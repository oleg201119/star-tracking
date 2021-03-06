
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageResolver2 = require('./page-resolver');

var _pageResolver3 = _interopRequireDefault(_pageResolver2);

var _sizePerPageDropdown = require('./size-per-page-dropdown');

var _sizePerPageDropdown2 = _interopRequireDefault(_sizePerPageDropdown);

var _paginationList = require('./pagination-list');

var _paginationList2 = _interopRequireDefault(_paginationList);

var _paginationTotal = require('./pagination-total');

var _paginationTotal2 = _interopRequireDefault(_paginationTotal);

var _const = require('./const');

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint arrow-body-style: 0 */


var Pagination = function (_pageResolver) {
  _inherits(Pagination, _pageResolver);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.defaultTotal = function (from, to, size) {
      return _react2.default.createElement(_paginationTotal2.default, {
        from: from,
        to: to,
        dataSize: size
      });
    };

    _this.setTotal = function (from, to, size, total) {
      if (total && typeof total === 'function') {
        return total(from, to, size);
      }

      return _this.defaultTotal(from, to, size);
    };

    _this.closeDropDown = _this.closeDropDown.bind(_this);
    _this.toggleDropDown = _this.toggleDropDown.bind(_this);
    _this.handleChangePage = _this.handleChangePage.bind(_this);
    _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);
    _this.state = _this.initialState();
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var dataSize = nextProps.dataSize,
          currSizePerPage = nextProps.currSizePerPage;

      if (currSizePerPage !== this.props.currSizePerPage || dataSize !== this.props.dataSize) {
        var totalPages = this.calculateTotalPage(currSizePerPage, dataSize);
        var lastPage = this.calculateLastPage(totalPages);
        this.setState({ totalPages: totalPages, lastPage: lastPage });
      }
    }
  }, {
    key: 'toggleDropDown',
    value: function toggleDropDown() {
      var dropdownOpen = !this.state.dropdownOpen;
      this.setState(function () {
        return { dropdownOpen: dropdownOpen };
      });
    }
  }, {
    key: 'closeDropDown',
    value: function closeDropDown() {
      this.setState(function () {
        return { dropdownOpen: false };
      });
    }
  }, {
    key: 'handleChangeSizePerPage',
    value: function handleChangeSizePerPage(sizePerPage) {
      var _props = this.props,
          currSizePerPage = _props.currSizePerPage,
          onSizePerPageChange = _props.onSizePerPageChange;

      var selectedSize = typeof sizePerPage === 'string' ? parseInt(sizePerPage, 10) : sizePerPage;
      var currPage = this.props.currPage;

      if (selectedSize !== currSizePerPage) {
        var newTotalPages = this.calculateTotalPage(selectedSize);
        var newLastPage = this.calculateLastPage(newTotalPages);
        if (currPage > newLastPage) currPage = newLastPage;
        onSizePerPageChange(selectedSize, currPage);
      }
      this.closeDropDown();
    }
  }, {
    key: 'handleChangePage',
    value: function handleChangePage(newPage) {
      var page = void 0;
      var _props2 = this.props,
          currPage = _props2.currPage,
          pageStartIndex = _props2.pageStartIndex,
          prePageText = _props2.prePageText,
          nextPageText = _props2.nextPageText,
          lastPageText = _props2.lastPageText,
          firstPageText = _props2.firstPageText,
          onPageChange = _props2.onPageChange;
      var lastPage = this.state.lastPage;


      if (newPage === prePageText) {
        page = this.backToPrevPage();
      } else if (newPage === nextPageText) {
        page = currPage + 1 > lastPage ? lastPage : currPage + 1;
      } else if (newPage === lastPageText) {
        page = lastPage;
      } else if (newPage === firstPageText) {
        page = pageStartIndex;
      } else {
        page = parseInt(newPage, 10);
      }

      // if (keepSizePerPageState) { this.closeDropDown(); }

      if (page !== currPage) {
        onPageChange(page);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          totalPages = _state.totalPages,
          lastPage = _state.lastPage,
          open = _state.dropdownOpen;
      var _props3 = this.props,
          showTotal = _props3.showTotal,
          dataSize = _props3.dataSize,
          paginationTotalRenderer = _props3.paginationTotalRenderer,
          sizePerPageList = _props3.sizePerPageList,
          currSizePerPage = _props3.currSizePerPage,
          hideSizePerPage = _props3.hideSizePerPage,
          hidePageListOnlyOnePage = _props3.hidePageListOnlyOnePage;

      var pages = this.calculatePageStatus(this.calculatePages(totalPages), lastPage);

      var _calculateFromTo = this.calculateFromTo(),
          _calculateFromTo2 = _slicedToArray(_calculateFromTo, 2),
          from = _calculateFromTo2[0],
          to = _calculateFromTo2[1];

      var pageListClass = (0, _classnames2.default)('react-bootstrap-table-pagination-list', 'col-md-12 col-xs-12 col-sm-12 col-lg-12', {
        'react-bootstrap-table-pagination-list-hidden': hidePageListOnlyOnePage && totalPages === 1
      });
      return _react2.default.createElement(
        'div',
        { className: 'react-bootstrap-table-pagination' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12 col-xs-12 col-sm-12 col-lg-12' },
          sizePerPageList.length > 1 && !hideSizePerPage ? _react2.default.createElement(_sizePerPageDropdown2.default, {
            currSizePerPage: '' + currSizePerPage,
            options: this.calculateSizePerPageStatus(),
            onSizePerPageChange: this.handleChangeSizePerPage,
            onClick: this.toggleDropDown,
            onBlur: this.closeDropDown,
            open: open
          }) : null,
          showTotal ? this.setTotal(from, to, dataSize, paginationTotalRenderer) : null
        ),
        _react2.default.createElement(
          'div',
          { className: pageListClass },
          _react2.default.createElement(_paginationList2.default, { pages: pages, onPageChange: this.handleChangePage })
        )
      );
    }
  }]);

  return Pagination;
}((0, _pageResolver3.default)(_react.Component));

Pagination.propTypes = {
  dataSize: _propTypes2.default.number.isRequired,
  sizePerPageList: _propTypes2.default.array.isRequired,
  currPage: _propTypes2.default.number.isRequired,
  currSizePerPage: _propTypes2.default.number.isRequired,
  onPageChange: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  pageStartIndex: _propTypes2.default.number,
  paginationSize: _propTypes2.default.number,
  showTotal: _propTypes2.default.bool,
  paginationTotalRenderer: _propTypes2.default.func,
  firstPageText: _propTypes2.default.string,
  prePageText: _propTypes2.default.string,
  nextPageText: _propTypes2.default.string,
  lastPageText: _propTypes2.default.string,
  nextPageTitle: _propTypes2.default.string,
  prePageTitle: _propTypes2.default.string,
  firstPageTitle: _propTypes2.default.string,
  lastPageTitle: _propTypes2.default.string,
  withFirstAndLast: _propTypes2.default.bool,
  alwaysShowAllBtns: _propTypes2.default.bool,
  hideSizePerPage: _propTypes2.default.bool,
  hidePageListOnlyOnePage: _propTypes2.default.bool
};

Pagination.defaultProps = {
  pageStartIndex: _const2.default.PAGE_START_INDEX,
  paginationSize: _const2.default.PAGINATION_SIZE,
  withFirstAndLast: _const2.default.With_FIRST_AND_LAST,
  alwaysShowAllBtns: _const2.default.SHOW_ALL_PAGE_BTNS,
  showTotal: _const2.default.SHOW_TOTAL,
  paginationTotalRenderer: _const2.default.PAGINATION_TOTAL,
  firstPageText: _const2.default.FIRST_PAGE_TEXT,
  prePageText: _const2.default.PRE_PAGE_TEXT,
  nextPageText: _const2.default.NEXT_PAGE_TEXT,
  lastPageText: _const2.default.LAST_PAGE_TEXT,
  sizePerPageList: _const2.default.SIZE_PER_PAGE_LIST,
  nextPageTitle: _const2.default.NEXT_PAGE_TITLE,
  prePageTitle: _const2.default.PRE_PAGE_TITLE,
  firstPageTitle: _const2.default.FIRST_PAGE_TITLE,
  lastPageTitle: _const2.default.LAST_PAGE_TITLE,
  hideSizePerPage: _const2.default.HIDE_SIZE_PER_PAGE,
  hidePageListOnlyOnePage: _const2.default.HIDE_PAGE_LIST_ONLY_ONE_PAGE
};

exports.default = Pagination;