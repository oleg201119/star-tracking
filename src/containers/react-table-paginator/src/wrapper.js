
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = require('./const');

var _const2 = _interopRequireDefault(_const);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _page = require('./page');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (Base, _ref) {
  var _class, _temp;

  var remoteResolver = _ref.remoteResolver;
  return _temp = _class = function (_remoteResolver) {
    _inherits(PaginationWrapper, _remoteResolver);

    function PaginationWrapper(props) {
      _classCallCheck(this, PaginationWrapper);

      var _this = _possibleConstructorReturn(this, (PaginationWrapper.__proto__ || Object.getPrototypeOf(PaginationWrapper)).call(this, props));

      _this.handleChangePage = _this.handleChangePage.bind(_this);
      _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);

      var currPage = void 0;
      var currSizePerPage = void 0;
      var options = props.pagination.options;

      var sizePerPageList = options.sizePerPageList || _const2.default.SIZE_PER_PAGE_LIST;

      // initialize current page
      if (typeof options.page !== 'undefined') {
        currPage = options.page;
      } else if (typeof options.pageStartIndex !== 'undefined') {
        currPage = options.pageStartIndex;
      } else {
        currPage = _const2.default.PAGE_START_INDEX;
      }

      // initialize current sizePerPage
      if (typeof options.sizePerPage !== 'undefined') {
        currSizePerPage = options.sizePerPage;
      } else if (_typeof(sizePerPageList[0]) === 'object') {
        currSizePerPage = sizePerPageList[0].value;
      } else {
        currSizePerPage = sizePerPageList[0];
      }

      _this.state = { currPage: currPage, currSizePerPage: currSizePerPage };
      _this.saveToStore(currPage, currSizePerPage);
      return _this;
    }

    _createClass(PaginationWrapper, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var needNewState = false;
        var _state = this.state,
            currPage = _state.currPage,
            currSizePerPage = _state.currSizePerPage;
        var _nextProps$pagination = nextProps.pagination.options,
            page = _nextProps$pagination.page,
            sizePerPage = _nextProps$pagination.sizePerPage,
            pageStartIndex = _nextProps$pagination.pageStartIndex,
            onPageChange = _nextProps$pagination.onPageChange;


        if (typeof page !== 'undefined' && currPage !== page) {
          // user defined page
          currPage = page;
          needNewState = true;
        } else if (nextProps.isDataChanged) {
          // user didn't defined page but data change
          currPage = typeof pageStartIndex !== 'undefined' ? pageStartIndex : _const2.default.PAGE_START_INDEX;
          needNewState = true;
        }

        if (typeof sizePerPage !== 'undefined') {
          currSizePerPage = sizePerPage;
          needNewState = true;
        }

        this.saveToStore(currPage, currSizePerPage);

        if (needNewState) {
          if (onPageChange) {
            onPageChange(currPage, currSizePerPage);
          }
          this.setState(function () {
            return { currPage: currPage, currSizePerPage: currSizePerPage };
          });
        }
      }
    }, {
      key: 'saveToStore',
      value: function saveToStore(page, sizePerPage) {
        this.props.store.page = page;
        this.props.store.sizePerPage = sizePerPage;
      }
    }, {
      key: 'handleChangePage',
      value: function handleChangePage(currPage) {
        var currSizePerPage = this.state.currSizePerPage;
        var options = this.props.pagination.options;

        this.saveToStore(currPage, currSizePerPage);

        if (options.onPageChange) {
          options.onPageChange(currPage, currSizePerPage);
        }
        if (this.isRemotePagination()) {
          this.handleRemotePageChange();
          return;
        }
        this.setState(function () {
          return { currPage: currPage };
        });
      }
    }, {
      key: 'handleChangeSizePerPage',
      value: function handleChangeSizePerPage(currSizePerPage, currPage) {
        var options = this.props.pagination.options;

        this.saveToStore(currPage, currSizePerPage);

        if (options.onSizePerPageChange) {
          options.onSizePerPageChange(currSizePerPage, currPage);
        }
        if (this.isRemotePagination()) {
          this.handleRemotePageChange();
          return;
        }
        this.setState(function () {
          return {
            currPage: currPage,
            currSizePerPage: currSizePerPage
          };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            options = _props.pagination.options,
            store = _props.store;
        var _state2 = this.state,
            currPage = _state2.currPage,
            currSizePerPage = _state2.currSizePerPage;

        var withFirstAndLast = typeof options.withFirstAndLast === 'undefined' ? _const2.default.With_FIRST_AND_LAST : options.withFirstAndLast;
        var alwaysShowAllBtns = typeof options.alwaysShowAllBtns === 'undefined' ? _const2.default.SHOW_ALL_PAGE_BTNS : options.alwaysShowAllBtns;
        var hideSizePerPage = typeof options.hideSizePerPage === 'undefined' ? _const2.default.HIDE_SIZE_PER_PAGE : options.hideSizePerPage;
        var hidePageListOnlyOnePage = typeof options.hidePageListOnlyOnePage === 'undefined' ? _const2.default.HIDE_PAGE_LIST_ONLY_ONE_PAGE : options.hidePageListOnlyOnePage;
        var pageStartIndex = typeof options.pageStartIndex === 'undefined' ? _const2.default.PAGE_START_INDEX : options.pageStartIndex;

        var data = this.isRemotePagination() ? this.props.data : (0, _page.getByCurrPage)(store, pageStartIndex);

        return [_react2.default.createElement(Base, _extends({ key: 'table' }, this.props, { data: data })), _react2.default.createElement(_pagination2.default, {
          key: 'pagination',
          dataSize: options.totalSize || store.data.length,
          currPage: currPage,
          currSizePerPage: currSizePerPage,
          onPageChange: this.handleChangePage,
          onSizePerPageChange: this.handleChangeSizePerPage,
          sizePerPageList: options.sizePerPageList || _const2.default.SIZE_PER_PAGE_LIST,
          paginationSize: options.paginationSize || _const2.default.PAGINATION_SIZE,
          pageStartIndex: pageStartIndex,
          withFirstAndLast: withFirstAndLast,
          alwaysShowAllBtns: alwaysShowAllBtns,
          hideSizePerPage: hideSizePerPage,
          hidePageListOnlyOnePage: hidePageListOnlyOnePage,
          showTotal: options.showTotal,
          paginationTotalRenderer: options.paginationTotalRenderer,
          firstPageText: options.firstPageText || _const2.default.FIRST_PAGE_TEXT,
          prePageText: options.prePageText || _const2.default.PRE_PAGE_TEXT,
          nextPageText: options.nextPageText || _const2.default.NEXT_PAGE_TEXT,
          lastPageText: options.lastPageText || _const2.default.LAST_PAGE_TEXT,
          prePageTitle: options.prePageTitle || _const2.default.PRE_PAGE_TITLE,
          nextPageTitle: options.nextPageTitle || _const2.default.NEXT_PAGE_TITLE,
          firstPageTitle: options.firstPageTitle || _const2.default.FIRST_PAGE_TITLE,
          lastPageTitle: options.lastPageTitle || _const2.default.LAST_PAGE_TITLE
        })];
      }
    }]);

    return PaginationWrapper;
// eslint-disable-next-line
}(remoteResolver(_react.Component)), _class.propTypes = {
    store: _propTypes2.default.object.isRequired
  }, _temp;
};