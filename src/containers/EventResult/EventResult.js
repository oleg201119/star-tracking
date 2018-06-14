import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ReactCountryFlag from 'react-country-flag';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './rc-menu.css';
import * as eventresultActions from '../../store/eventresult/actions';
import * as eventresultSelectors from '../../store/eventresult/reducer';
import './EventResult.css';

function priceFormatter(cell) {
  return (
    <span><ReactCountryFlag code={cell} svg /> &nbsp; { cell }</span>
  );
}
// const products = [{ id: 1, name: 'be', price: 20 }, { id: 2, name: 'be', price: 20 },
//   { id: 3, name: 'be', price: 20 }, { id: 4, name: 'be', price: 20 },
//   { id: 5, name: 'be', price: 20 }, { id: 6, name: 'be', price: 20 },
//   { id: 7, name: 'be', price: 20 }, { id: 8, name: 'be', price: 20 },
//   { id: 9, name: 'be', price: 20 }, { id: 10, name: 'be', price: 20 },
//   { id: 11, name: 'be', price: 20 }, { id: 12, name: 'be', price: 20 },
//   { id: 13, name: 'be', price: 20 }, { id: 14, name: 'be', price: 20 },
//   { id: 15, name: 'be', price: 20 }, { id: 16, name: 'be', price: 20 },
//   { id: 17, name: 'be', price: 20 }, { id: 18, name: 'be', price: 20 },
//   { id: 19, name: 'be', price: 20 }, { id: 20, name: 'be', price: 20 }];
const products = [];
// const columns = [{
//   dataField: 'id',
//   text: 'Product ID',
//   sort: true,
//   style: {
//     fontStyle: 'italic'
//   }
// }, {
//   dataField: 'name',
//   text: 'Product Name',
//   formatter: priceFormatter,
//   sort: true,
// }, {
//   dataField: 'price',
//   text: 'Product Price',
// }];
const RemotePagination = ({ data, page, sizePerPage, onTableChange, totalSize, columns }) => (
  <div className="result-table">
    <BootstrapTable
      remote
      keyField="id"
      data={data}
      columns={columns}
      pagination={ paginationFactory({ page, sizePerPage, totalSize, nextPageText: 'Next', alwaysShowAllBtns: true, hideSizePerPage: true,paginationSize: 1}) }
      onTableChange={ onTableChange }
      striped
      bordered={ false }
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
      data: products.slice(0, 10),
      sizePerPage: 10,
      eventID: this.props.location.state.eventID,
      categoryID: '',
      columns: [],
    };
    this.drawmenu = this.drawmenu.bind(this);
    this.menuClick = this.menuClick.bind(this);
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
      this.props.dispatch(eventresultActions.fetchMenuResult(this.state.eventID, this.state.categoryID, nextlanguage));
    }
    if (this.props.headerResult !== nextProps.headerResult) {
      console.log(nextProps.headerResult);
      const headerarray = nextProps.headerResult;
      const columns = [];
      for (let i = 0; i <= headerarray.length - 1; i++ ) {
        // if (headerarray[i] == )
        columns.push({dataField: headerarray[i] , text: headerarray[i] });
      }
      this.setState({ columns: columns });
    }
  }
  handleTableChange = (type, { page, sizePerPage }) => {
    const currentIndex = (page - 1) * sizePerPage;
    setTimeout(() => {
      this.setState(() => ({
        page,
        data: products.slice(currentIndex, currentIndex + sizePerPage),
        sizePerPage,
      }));
    }, 1000);
  }
  menuClick = (menu) => {
    console.log(menu.key);
    this.setState({ categoryID: menu.key });
    this.props.dispatch(eventresultActions.fetchHeaderResult(this.state.eventID, menu.key, this.state.currentlanguage));
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
    console.log(this.state.eventID);
    const { data, sizePerPage, page, columns } = this.state;
    return (
      <div className="container">
        <div className="row">
          { menuResult.length > 0 ?
            <Menu mode="horizontal" onClick={this.menuClick}>
              {this.drawmenu(menuResult)}
            </Menu> : null }
          { this.state.columns.length > 0 ?
            <RemotePagination
              data={ data }
              page={ page }
              sizePerPage={ sizePerPage }
              totalSize={ products.length }
              columns= { columns}
              onTableChange={ this.handleTableChange }
            /> : null }
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const menuResult = eventresultSelectors.getMenuResult(state);
  const headerResult = eventresultSelectors.getHeaderResult(state);

  return {
    menuResult,
    headerResult,
  };
}
export default translate('translations')(connect(mapStateToProps)(EventResult));
