import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import overlayFactory from 'react-bootstrap-table2-overlay';
import ReactCountryFlag from 'react-country-flag';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import Select from 'react-select';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './rc-menu.css';
import paginationFactory from '../react-table-paginator';
import * as eventresultActions from '../../store/eventresult/actions';
import * as eventresultSelectors from '../../store/eventresult/reducer';
import EventresultService from '../../services/eventresult';
import './EventResult.css';

const RemotePagination = ({ data, page, sizePerPage, onTableChange, totalSize, columns, loading }) => (
  <div className="result-table">
    <BootstrapTable
      remote
      loading={ loading }
      keyField="0"
      data={data}
      columns={columns}
      pagination={ paginationFactory({ page, sizePerPage, totalSize, nextPageText: 'Next', prePageText: 'Previous', firstPageText: 'First', lastPageText: 'Last', alwaysShowAllBtns: true, hideSizePerPage: true, paginationSize: 5}) }
      onTableChange={ onTableChange }
      striped
      bordered={ false }
      defaultSortDirection={'asc'}
      overlay={ overlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)', color: 'red' }) }
    />
  </div>
);

class EventResult extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      currentlanguage: '',
      page: 1,
      data: [],
      sizePerPage: 25,
      eventID: this.props.location.state.eventID,
      categoryID: '',
      columns: [],
      sortColumn: -1,
      sortDirection: 'asc',
      totalSize: 0,
      loading: false,
    };
    this.drawmenu = this.drawmenu.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.showtable = this.showtable.bind(this);
    this.updatepagesize = this.updatepagesize.bind(this);
  }
  componentDidMount() {
    let currentlanguage = this.props.i18n.language;
    if (this.props.i18n.language.length > 2) {
      currentlanguage = this.props.i18n.language.substring(0, 2);
    }
    this.setState({ currentlanguage: currentlanguage });
    this.props.dispatch(eventresultActions.fetchMenuResult(this.state.eventID, currentlanguage));
  }
  componentWillReceiveProps(nextProps) {
    let nextlanguage = nextProps.i18n.language;
    if (nextProps.i18n.language.length > 2) {
      nextlanguage = nextProps.i18n.language.substring(0, 2);
    }
    if (nextlanguage !== this.state.currentlanguage) {
      this.setState({ currentlanguage: nextlanguage });
      this.props.dispatch(eventresultActions.fetchMenuResult(this.state.eventID, nextlanguage));
      this.showtable(this.state.eventID, this.state.categoryID, this.state.page-1, this.state.sizePerPage, this.state.sortColumn, this.state.sortDirection, nextlanguage);
    }
  }
  showtable = (eventID, categoryID, page, sizePerPage, sortColumn, sortDirection, language) => {
    const self = this;
    self.setState({ loading: true })
    EventresultService.getHeaderResult(eventID, categoryID, language)
      .then(function(value) {
        EventresultService.getBodyResult(eventID, categoryID, page, sizePerPage, sortColumn, sortDirection, language)
        .then(function(body) {
          const headerarray = value;
          const bodyarray = body;
          const totalSize = bodyarray.FilteredRecordCount;
          const bibPosition = bodyarray.BibPositions[0];
          const namePosition = bodyarray.NamePositions[0];
          self.setState({ totalSize: totalSize });
          const columns = [];
          for (let i = 0; i <= headerarray.length - 1; i++ ) {
            if( i === bibPosition ) {
              columns.push({ dataField: `${i}`, text: headerarray[i], sort: true, style: { fontStyle: 'italic'}, headerStyle: {width:80} });
            } else if( i === namePosition ) {
              columns.push({ dataField: `${i}`, text: headerarray[i], sort: true, formatter: self.priceFormatter });
            } else if( i === 0 ) {
              columns.push({ dataField: `${i}`, text: headerarray[i], sort: true, headerStyle: {width:80} });
            } else {
              columns.push({ dataField: `${i}`, text: headerarray[i], sort: true });
            }
          }
          const data = [];
          let country = '';
          for ( let i = 0; i<= bodyarray.Rows.length -1; i++ ) {
            const rowarray = bodyarray.Rows[i];
            country = rowarray.Countries[0];
            let row = {};
            for ( let j = 0; j<= rowarray.Values.length -1; j++ ) {
              if ( j === namePosition ){
                row[j] = {country:country, name: rowarray.Values[j]};  
              } else {
                row[j] = rowarray.Values[j];
              }
            }
            data.push(row);
          }
          self.setState({ columns: columns, data: data, page: page+1, loading:false});
        }).catch(function(error) {
          console.log(error);
          self.setState({ loading: false })
        });
      }).catch(function(error) {
        console.log(error);
        self.setState({ loading: false })
      });
  }
  priceFormatter(cell) {
    return (
      <span><ReactCountryFlag code={cell.country} svg /> &nbsp; { cell.name }</span>
    );
  }
  updatepagesize(e) {
    const pagesize = this.state.sizePerPage;
    let page = this.state.page-1;
    if(e !== pagesize) {
      if(e === -1) {
        page = 0;
      } else {
        page = Math.floor(pagesize * page / e);
      }
      this.setState({ sizePerPage: e });
      this.showtable(this.state.eventID, this.state.categoryID, page, e, this.state.sortColumn, this.state.sortDirection, this.state.currentlanguage);
    }
  }
  handleTableChange = (type, { page, sizePerPage, sortField, sortOrder }) => {
    console.log(type);
    console.log(sortField);
    console.log(sortOrder);
    if(type === 'sort') {
      this.setState({ sortColumn: sortField, sortDirection: sortOrder});
      this.showtable(this.state.eventID, this.state.categoryID, 0, sizePerPage, sortField, sortOrder, this.state.currentlanguage);
    } else {
      this.showtable(this.state.eventID, this.state.categoryID, page-1, sizePerPage, this.state.sortColumn, this.state.sortDirection, this.state.currentlanguage);
    }
  }
  menuClick = (menu) => {
    this.setState({ categoryID: menu.key });
    this.showtable(this.state.eventID, menu.key, this.state.page-1, this.state.sizePerPage, this.state.sortColumn, this.state.sortDirection, this.state.currentlanguage);
  }
  drawmenu(menuarray) {
    const self = this;
    return (
      menuarray.map(function(menuitem, i) {
        if(menuitem.ChildCategories !== null){
          return(
            <SubMenu title={menuitem.Name} key={i}>
              {self.drawmenu(menuitem.ChildCategories)}
            </SubMenu>
          )
        } else {
          return (
            <MenuItem key={menuitem.ID}>{menuitem.Name}</MenuItem>
          )
        }
      })
    );
  }
  render() {
    // const { t } = this.props;
    const { menuResult } = this.props;
    const { data, sizePerPage, page, columns, totalSize, loading } = this.state;
    return (
      <div className="container">
        <div className="row">
          { menuResult.length > 0 ?
            <Menu mode="horizontal" onClick={this.menuClick}>
              {this.drawmenu(menuResult)}
            </Menu> : null }
          { this.state.columns.length > 0 ?
            <div>
              <RemotePagination
                data={ data }
                page={ page }
                loading={ loading }
                sizePerPage={ sizePerPage === -1 ? totalSize : sizePerPage }
                totalSize={ totalSize }
                columns= { columns}
                onTableChange={ this.handleTableChange }
              />
              <div className="sizerpage">
                <span>Show</span>
                <Select
                  ref={(ref) => { this.select = ref; }}
                  options={[
                    { value: 25, label: 25 },
                    { value: 50, label: 50 },
                    { value: 100, label: 100 },
                    { value: -1, label: 'All' },
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
            : null }
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const menuResult = eventresultSelectors.getMenuResult(state);

  return {
    menuResult,
  };
}
export default translate('translations')(connect(mapStateToProps)(EventResult));
