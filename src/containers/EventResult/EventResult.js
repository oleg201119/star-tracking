import React, { Component } from "react";
import { translate } from "react-i18next";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import overlayFactory from "react-bootstrap-table2-overlay";
import ReactCountryFlag from "react-country-flag";
import Menu, { SubMenu, MenuItem } from "rc-menu";
import Select from "react-select";
import HamburgerMenu from "react-hamburger-menu";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./rc-menu.css";
import paginationFactory from "../react-table-paginator";
import * as eventresultActions from "../../store/eventresult/actions";
import * as eventresultSelectors from "../../store/eventresult/reducer";
import * as eventActions from "../../store/events/actions";
import SimilarEvents from "../Eventdetail/SimilarEvents";
import EventresultService from "../../services/eventresult";
import * as eventsSelectors from "../../store/events/reducer";
import "./EventResult.css";

const RemotePagination = ({
  data,
  page,
  sizePerPage,
  onTableChange,
  totalSize,
  columns,
  loading,
  paginationsize
}) => (
  <div className="result-table">
    <BootstrapTable
      remote
      loading={loading}
      keyField="0"
      data={data}
      columns={columns}
      pagination={paginationFactory({
        page,
        sizePerPage,
        totalSize,
        alwaysShowAllBtns: true,
        hideSizePerPage: true,
        paginationSize: paginationsize
      })}
      onTableChange={onTableChange}
      striped
      bordered={false}
      defaultSortDirection={"asc"}
      overlay={overlayFactory({
        spinner: true,
        background: "rgba(192,192,192,0.3)",
        color: "red"
      })}
    />
  </div>
);

class EventResult extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      currentlanguage: "",
      page: 1,
      data: [],
      sizePerPage: 25,
      eventID: this.props.location.state.eventID,
      categoryID: "",
      columns: [],
      sortColumn: -1,
      sortDirection: "asc",
      totalSize: 0,
      loading: false,
      filter: "",
      hiddencolumn: false,
      paginationsize: 5,
      hamburgermenu: false,
      menumode: "horizontal",
      selectmenu: ""
    };
    this.drawmenu = this.drawmenu.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.showtable = this.showtable.bind(this);
    this.updatepagesize = this.updatepagesize.bind(this);
    this.filtertable = this.filtertable.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    let currentlanguage = this.props.i18n.language;
    if (this.props.i18n.language.length > 2) {
      currentlanguage = this.props.i18n.language.substring(0, 2);
    }
    this.setState({ currentlanguage: currentlanguage });
    this.props.dispatch(
      eventresultActions.fetchMenuResult(this.state.eventID, currentlanguage)
    );
    this.props.dispatch(
      eventActions.fetchEventDetail(this.state.eventID, currentlanguage)
    );
    this.props.dispatch(eventActions.fetchSimilarEvents(currentlanguage));
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillReceiveProps(nextProps) {
    let nextlanguage = nextProps.i18n.language;
    if (nextProps.i18n.language.length > 2) {
      nextlanguage = nextProps.i18n.language.substring(0, 2);
    }
    if (nextlanguage !== this.state.currentlanguage) {
      this.setState({ currentlanguage: nextlanguage });
      this.props.dispatch(
        eventresultActions.fetchMenuResult(this.state.eventID, nextlanguage)
      );
      this.props.dispatch(eventActions.fetchSimilarEvents(nextlanguage));
      this.props.dispatch(
        eventActions.fetchEventDetail(this.state.eventID, nextlanguage)
      );
      this.showtable(
        this.state.eventID,
        this.state.categoryID,
        this.state.page - 1,
        this.state.sizePerPage,
        this.state.sortColumn,
        this.state.sortDirection,
        nextlanguage
      );
    }
  }
  updateDimensions() {
    if (window.innerWidth <= 768) {
      this.setState({
        hiddencolumn: true,
        paginationsize: 3,
        menumode: "inline"
      });
    } else {
      this.setState({
        hiddencolumn: false,
        paginationsize: 5,
        menumode: "horizontal"
      });
    }
  }
  showtable = (
    eventID,
    categoryID,
    page,
    sizePerPage,
    sortColumn,
    sortDirection,
    language,
    filter
  ) => {
    const self = this;
    if (this.state.totalSize > 0) self.setState({ loading: true });
    EventresultService.getHeaderResult(eventID, categoryID, language)
      .then(function(value) {
        EventresultService.getBodyResult(
          eventID,
          categoryID,
          page,
          sizePerPage,
          sortColumn,
          sortDirection,
          language,
          filter
        )
          .then(function(body) {
            const headerarray = value;
            const bodyarray = body;
            const totalSize = bodyarray.FilteredRecordCount;
            const bibPosition = bodyarray.BibPositions[0];
            const namePosition = bodyarray.NamePositions[0];
            self.setState({ totalSize: totalSize });
            const columns = [];
            for (let i = 0; i <= headerarray.length - 1; i++) {
              if (i === bibPosition) {
                columns.push({
                  dataField: `${i}`,
                  text: headerarray[i],
                  sort: true,
                  style: { fontStyle: "italic" },
                  headerStyle: { width: 80 },
                  classes: "hiddenbibcolumn",
                  headerClasses: "hiddenbibcolumn"
                });
              } else if (i === namePosition) {
                columns.push({
                  dataField: `${i}`,
                  text: headerarray[i],
                  sort: true,
                  formatter: self.priceFormatter
                });
              } else if (i === 0) {
                columns.push({
                  dataField: `${i}`,
                  text: headerarray[i],
                  sort: true,
                  headerClasses: "poscolumn"
                });
              } else {
                if (i === headerarray.length - 1) {
                  columns.push({
                    dataField: `${i}`,
                    text: headerarray[i],
                    sort: true
                  });
                } else {
                  columns.push({
                    dataField: `${i}`,
                    text: headerarray[i],
                    sort: true,
                    classes: "hiddencolumn",
                    headerClasses: "hiddencolumn"
                  });
                }
              }
            }
            const data = [];
            let country = "";
            for (let i = 0; i <= bodyarray.Rows.length - 1; i++) {
              const rowarray = bodyarray.Rows[i];
              country = rowarray.Countries[0];
              let row = {};
              for (let j = 0; j <= rowarray.Values.length - 1; j++) {
                if (j === namePosition) {
                  row[j] = { country: country, name: rowarray.Values[j] };
                } else {
                  row[j] = rowarray.Values[j];
                }
              }
              data.push(row);
            }
            self.setState({
              columns: columns,
              data: data,
              page: page + 1,
              loading: false
            });
          })
          .catch(function(error) {
            console.log(error);
            self.setState({ loading: false });
          });
      })
      .catch(function(error) {
        console.log(error);
        self.setState({ loading: false });
      });
  };
  priceFormatter(cell) {
    return (
      <span>
        <ReactCountryFlag code={cell.country} svg /> &nbsp; {cell.name}
      </span>
    );
  }
  filtertable() {
    this.showtable(
      this.state.eventID,
      this.state.categoryID,
      0,
      this.state.sizePerPage,
      this.state.sortColumn,
      this.state.sortDirection,
      this.state.currentlanguage,
      this.state.filter
    );
  }
  updatepagesize(e) {
    const pagesize = this.state.sizePerPage;
    let page = this.state.page - 1;
    if (e !== pagesize) {
      if (e === -1) {
        page = 0;
      } else {
        page = Math.floor((pagesize * page) / e);
      }
      this.setState({ sizePerPage: e });
      this.showtable(
        this.state.eventID,
        this.state.categoryID,
        page,
        e,
        this.state.sortColumn,
        this.state.sortDirection,
        this.state.currentlanguage
      );
    }
  }
  handleTableChange = (type, { page, sizePerPage, sortField, sortOrder }) => {
    if (type === "sort") {
      this.setState({ sortColumn: sortField, sortDirection: sortOrder });
      this.showtable(
        this.state.eventID,
        this.state.categoryID,
        0,
        sizePerPage,
        sortField,
        sortOrder,
        this.state.currentlanguage
      );
    } else {
      this.showtable(
        this.state.eventID,
        this.state.categoryID,
        page - 1,
        sizePerPage,
        this.state.sortColumn,
        this.state.sortDirection,
        this.state.currentlanguage
      );
    }
  };
  menuClick = menu => {
    this.setState({
      categoryID: menu.key,
      selectmenu: menu.item.props.longname
    });
    this.showtable(
      this.state.eventID,
      menu.key,
      this.state.page - 1,
      this.state.sizePerPage,
      this.state.sortColumn,
      this.state.sortDirection,
      this.state.currentlanguage
    );
  };
  drawmenu(menuarray) {
    const self = this;
    return menuarray.map(function(menuitem, i) {
      if (menuitem.ChildCategories !== null) {
        return (
          <SubMenu title={menuitem.Name} key={i}>
            {self.drawmenu(menuitem.ChildCategories)}
          </SubMenu>
        );
      } else {
        return (
          <MenuItem key={menuitem.ID} longname={menuitem.LongName}>
            {menuitem.Name}
          </MenuItem>
        );
      }
    });
  }
  hamburgermenuClick() {
    this.setState({ hamburgermenu: !this.state.hamburgermenu });
  }
  render() {
    const { t } = this.props;
    const { menuResult, eventDetail } = this.props;
    const {
      data,
      sizePerPage,
      page,
      columns,
      totalSize,
      loading,
      paginationsize,
      hiddencolumn
    } = this.state;
    const filterclass =
      hiddencolumn && !this.state.hamburgermenu
        ? "eventresult-custom-filter"
        : null;
    return (
      <div className="eventresult-page">
        {eventDetail.length !== 0 ? (
          <div>
            <div className="event-page d-none d-md-block">
              <div className="header-banner">
                <div className="glass-section">
                  <div className="slogan-section">
                    <div className="container event-header">
                      <div className="event-name">
                        <span className="eventname">{eventDetail.Name}</span>
                        <span className="event-organizer">
                          {t("Door")}: {eventDetail.Organizer}
                        </span>
                      </div>
                      <div className="event-time">
                        <div className="day">{eventDetail.Day}</div>
                        <div className="month">{eventDetail.Month}</div>
                        <div className="time">{eventDetail.Time}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="card-star">
                  <img alt="star" src="/img/card-white-star.png" />
                </div>
              </div>
            </div>
            <div className="event-page-mobile d-md-none">
              <div className="event-card">
                <div className="card-banner">
                  <img alt="banner" src="/img/card-banner.png" />
                </div>
                <div className="card-glass">
                  <div className="slogan">{eventDetail.Name}</div>
                </div>
                <div className="card-star">
                  <img alt="star" src="/img/card-white-star.png" />
                </div>
                <div className={`event-info ${eventDetail.Type}`}>
                  <div className="event-content">
                    <div className="event-time">
                      <div className="day">{eventDetail.Day}</div>
                      <div className="month">{eventDetail.Month}</div>
                      <div className="time">{eventDetail.Time}</div>
                    </div>
                    <div className="event-description">
                      <div className="title">{eventDetail.Description}</div>
                      <div className="by-options">
                        <div className="by">
                          {t("Door")}: {eventDetail.Organizer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="eventresult-menu">
          <div className="container">
            <div className="row">
              {menuResult.length > 0 ? (
                <div className="hamburgermenu">
                  {hiddencolumn ? (
                    <div className="hamburgermenu-mark">
                      <HamburgerMenu
                        isOpen={this.state.hamburgermenu}
                        menuClicked={this.hamburgermenuClick.bind(this)}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color="black"
                        borderRadius={0}
                        animationDuration={0.5}
                      />
                    </div>
                  ) : null}
                  {!hiddencolumn || this.state.hamburgermenu ? (
                    <Menu mode={this.state.menumode} onClick={this.menuClick}>
                      {this.drawmenu(menuResult)}
                    </Menu>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.columns.length > 0 ? (
              <div>
                <div className={`eventresult-filter ${filterclass}`}>
                  <span>{this.state.selectmenu}</span>
                  <div className="eventresult-filter-body">
                    <input
                      type="text"
                      placeholder="filter"
                      value={this.state.filter}
                      onChange={e => this.setState({ filter: e.target.value })}
                      className="eventresult-text"
                    />
                    <button
                      type="button"
                      className="btn btn-red btn-eventresult-filter"
                      onClick={this.filtertable}
                    >
                      {t("Zoek")}
                    </button>
                  </div>
                </div>
                <RemotePagination
                  data={data}
                  page={page}
                  loading={loading}
                  sizePerPage={sizePerPage === -1 ? totalSize : sizePerPage}
                  totalSize={totalSize}
                  columns={columns}
                  paginationsize={paginationsize}
                  onTableChange={this.handleTableChange}
                />
                <div className="sizerpage">
                  <span>Show</span>
                  <Select
                    ref={ref => {
                      this.select = ref;
                    }}
                    options={[
                      { value: 25, label: 25 },
                      { value: 50, label: 50 },
                      { value: 100, label: 100 },
                      { value: -1, label: "All" }
                    ]}
                    simpleValue
                    placeholder="Status"
                    value={this.state.sizePerPage}
                    onChange={this.updatepagesize}
                    className="eventresult-sizerpage"
                    searchable={false}
                    clearable={false}
                  />
                  <span>entries of {totalSize} entries</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {eventDetail.length !== 0 ? (
          <div>
            <div className="event-page">
              <div className="container">
                <div className="event-detail">
                  <div className="row">
                    <div className="col-12">
                      <div className="event-organisation">
                        <div className="event-organisation-topic">
                          <span>{t("Organisatie")}</span>
                        </div>
                        {eventDetail.OrganizerHasLogo ? (
                          <div className="event-organisation-logo">
                            <img
                              src={eventDetail.OrganizerLogo}
                              alt="Organizer-logo"
                            />
                          </div>
                        ) : null}
                        <div className="event-organisation-detail">
                          <span>{eventDetail.OrganizerMail}</span>
                          {eventDetail.OrganizerWeb !== null ? (
                            <a className="event-organisation-web" href="#/">
                              {eventDetail.OrganizerWeb}
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="container">
          <div className="friend-event">
            <SimilarEvents />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const menuResult = eventresultSelectors.getMenuResult(state);
  const eventDetail = eventsSelectors.getEventDetail(state);

  return {
    menuResult,
    eventDetail
  };
}
export default translate("translations")(connect(mapStateToProps)(EventResult));
