import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import overlayFactory from 'react-bootstrap-table2-overlay';
import ReactCountryFlag from 'react-country-flag';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import queryString from 'query-string';
import Select from 'react-select';
import HamburgerMenu from 'react-hamburger-menu';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import paginationFactory from '../react-table-paginator';
import * as eventresultActions from '../../store/challengeresult/actions';
import * as eventresultSelectors from '../../store/challengeresult/reducer';
import ChallengeresultService from '../../services/challengeresult';

const RemotePagination = ({ data, page, sizePerPage, onTableChange, totalSize, columns, loading, paginationsize }) => (
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
			rowClasses={'row-class'}
			defaultSortDirection={'asc'}
			overlay={overlayFactory({
				spinner: true,
				background: 'rgba(192,192,192,0.3)',
				color: 'red'
			})}
		/>
	</div>
);
class ChallengeResult extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	};
	constructor(props) {
		super(props);
		this.state = {
			currentlanguage: '',
			page: 1,
			data: [],
			sizePerPage: 100,
			eventID: this.props.match.params.id,
			categoryID: '',
			columns: [],
			sortColumn: -1,
			sortDirection: 'asc',
			totalSize: 0,
			loading: false,
			filter: '',
			hiddencolumn: false,
			paginationsize: 5,
			hamburgermenu: false,
			menumode: 'horizontal',
			selectmenu: '',
			openkeys: [],
			leaderboardshow: true,
			windowwidth: 0,
			chrome: true
		};
		this.drawmenu = this.drawmenu.bind(this);
		this.menuClick = this.menuClick.bind(this);
		this.showtable = this.showtable.bind(this);
		this.updatepagesize = this.updatepagesize.bind(this);
		this.filtertable = this.filtertable.bind(this);
		this.drawWinnertable = this.drawWinnertable.bind(this);
		this.showWinnertablesection = this.showWinnertablesection.bind(this);
	}
	componentWillMount() {
		const parsed = queryString.parse(this.props.location.search);
		const chrome = parsed.chrome;
		if (chrome === 'off') {
			this.setState({ chrome: false });
		}
		window.scrollTo(0, 0);
		let currentlanguage = this.props.i18n.language;
		if (this.props.i18n.language.length > 2) {
			currentlanguage = this.props.i18n.language.substring(0, 2);
		}
		this.setState({ currentlanguage: currentlanguage });
		this.props.dispatch(eventresultActions.fetchChallengeDetail(this.state.eventID, currentlanguage));
		this.props.dispatch(eventresultActions.fetchMenuResult(this.state.eventID, currentlanguage));
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this));
	}
	componentWillReceiveProps(nextProps) {
		let nextlanguage = nextProps.i18n.language;
		if (nextProps.i18n.language.length > 2) {
			nextlanguage = nextProps.i18n.language.substring(0, 2);
		}
		if (nextlanguage !== this.state.currentlanguage) {
			this.setState({ currentlanguage: nextlanguage });
			this.props.dispatch(eventresultActions.fetchChallengeDetail(this.state.eventID, nextlanguage));
			this.props.dispatch(eventresultActions.fetchMenuResult(this.state.eventID, nextlanguage));
		}
	}
	updateDimensions() {
		let windowwidth = window.innerWidth;
		if (window.innerWidth >= 1200) {
			windowwidth = 1140;
		} else if (window.innerWidth >= 992) {
			windowwidth = 960;
		} else if (window.innerWidth >= 768) {
			windowwidth = 720;
		} else if (window.innerWidth >= 576) {
			windowwidth = 540;
		}
		let hiddencolumn = false;
		if (window.innerWidth < 768) {
			hiddencolumn = true;
			this.setState({
				hiddencolumn: hiddencolumn,
				paginationsize: 3,
				menumode: 'inline',
				windowwidth: windowwidth
			});
		} else {
			this.setState({
				hiddencolumn: hiddencolumn,
				paginationsize: 5,
				menumode: 'horizontal',
				windowwidth: windowwidth
			});
		}
		if (this.state.columns.length > 0) {
			const thwidth = hiddencolumn
				? (windowwidth - 85) / 3
				: (windowwidth - 85) / (this.state.columns.length - 1);
			let temp = [ ...this.state.columns ];
			temp[1] = { ...temp[1], headerStyle: { width: thwidth * 2 } };
			let newtemp = temp.map((col) => {
				return { ...col, sort: !hiddencolumn };
			});
			this.setState({ columns: newtemp });
		}
	}
	showtable = (eventID, categoryID, page, sizePerPage, sortColumn, sortDirection, language, filter) => {
		const self = this;
		if (this.state.totalSize > 0) self.setState({ loading: true });
		ChallengeresultService.getHeaderResult(eventID, language)
			.then(function(value) {
				ChallengeresultService.getBodyResult(
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
						const namePosition = 1;
						const resultPosition = headerarray.length - 1;
						self.setState({ totalSize: totalSize });
						const columns = [];
						const thwidth = self.state.hiddencolumn
							? (self.state.windowwidth - 85) / 3
							: (self.state.windowwidth - 85) / (headerarray.length - 1);
						for (let i = 0; i <= headerarray.length - 1; i++) {
							if (i === namePosition) {
								columns.push({
									dataField: `${i}`,
									text: headerarray[i],
									sort: !self.state.hiddencolumn,
									formatter: self.priceFormatter,
									headerStyle: { width: thwidth * 2 }
								});
							} else if (i === 0) {
								columns.push({
									dataField: `${i}`,
									text: headerarray[i],
									sort: !self.state.hiddencolumn,
									headerClasses: 'challenge-poscolumn'
								});
							} else {
								if (i === resultPosition) {
									columns.push({
										dataField: `${i}`,
										text: headerarray[i],
										sort: !self.state.hiddencolumn
									});
								} else {
									columns.push({
										dataField: `${i}`,
										text: headerarray[i],
										sort: !self.state.hiddencolumn,
										classes: 'hiddencolumn',
										headerClasses: 'hiddencolumn'
									});
								}
							}
						}
						const data = [];
						let country = '';
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
							loading: false,
							hamburgermenu: false
						});
					})
					.catch(function(error) {
						console.log(error);
						self.setState({ loading: false, hamburgermenu: false });
					});
			})
			.catch(function(error) {
				console.log(error);
				self.setState({ loading: false, hamburgermenu: false });
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
				page = Math.floor(pagesize * page / e);
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
		if (type === 'sort') {
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
	menuClick = (menu) => {
		if (menu.key === '0') {
			this.setState({
				leaderboardshow: true,
				openkeys: [],
				hamburgermenu: false
			});
		} else {
			this.setState({
				categoryID: menu.key,
				selectmenu: menu.item.props.longname,
				openkeys: [],
				leaderboardshow: false,
				sizePerPage: 100
			});

			this.showtable(
				this.state.eventID,
				menu.key,
				0,
				100,
				this.state.sortColumn,
				this.state.sortDirection,
				this.state.currentlanguage
			);
		}
	};
	onOpenChange = (openKeys) => {
		this.setState({
			openkeys: openKeys
		});
	};
	drawmenu(menuarray) {
		const self = this;
		return menuarray.map(function(menuitem, i) {
			if (menuitem.ChildCategories !== null) {
				return (
					<SubMenu title={<span>{menuitem.Name}</span>} key={i}>
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
	drawWinnertable(result, t) {
		var self = this;
		return result.map(function(resultitem) {
			return (
				<div key={resultitem.ID} className="winner">
					<div className="winner-title">
						<span>{resultitem.LongName}</span>
						<a
							onClick={() => {
								self.setState({
									categoryID: resultitem.ID,
									selectmenu: resultitem.LongName,
									openkeys: [],
									leaderboardshow: false,
									sizePerPage: 100
								});

								self.showtable(
									self.state.eventID,
									resultitem.ID,
									0,
									100,
									self.state.sortColumn,
									self.state.sortDirection,
									self.state.currentlanguage
								);
							}}
						>
							{t('Alle resultaten')}
						</a>
					</div>
					<div className="result-table">{self.showWinnertablesection(resultitem)}</div>
				</div>
			);
		});
	}
	showWinnertablesection(resultitem) {
		var self = this;
		const headerarray = resultitem.Header;
		const bodyarray = resultitem.Winners;
		const namePosition = 1;
		const resultPosition = headerarray.length - 1;
		const columns = [];
		const thwidth = this.state.hiddencolumn
			? (this.state.windowwidth - 85) / 3
			: (this.state.windowwidth - 85) / (headerarray.length - 1);
		for (let i = 0; i <= headerarray.length - 1; i++) {
			if (i === namePosition) {
				columns.push({
					dataField: `${i}`,
					text: headerarray[i],
					formatter: self.priceFormatter,
					headerStyle: { width: thwidth * 2 }
				});
			} else if (i === 0) {
				columns.push({
					dataField: `${i}`,
					text: headerarray[i],
					headerClasses: 'challenge-poscolumn'
				});
			} else {
				if (i === resultPosition) {
					columns.push({
						dataField: `${i}`,
						text: headerarray[i]
					});
				} else {
					columns.push({
						dataField: `${i}`,
						text: headerarray[i],
						classes: 'hiddencolumn',
						headerClasses: 'hiddencolumn'
					});
				}
			}
		}
		const data = [];
		let country = '';
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
		return (
			<BootstrapTable
				keyField="0"
				data={data}
				columns={columns}
				striped
				bordered={false}
				rowClasses={'row-class'}
			/>
		);
	}
	handlefilterKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.filtertable();
		}
	};
	hamburgermenuClick() {
		this.setState({ hamburgermenu: !this.state.hamburgermenu });
	}
	render() {
		const { t } = this.props;
		const { menuResult, challengeDetail } = this.props;
		const { data, sizePerPage, page, columns, totalSize, loading, paginationsize, hiddencolumn } = this.state;
		const filterclass = hiddencolumn && !this.state.hamburgermenu ? 'eventresult-custom-filter' : null;
		return (
			<div className="eventresult-page">
				{this.state.chrome ? <Header {...this.props} /> : null}
				{challengeDetail.length !== 0 ? (
					<div>
						<div className="event-page d-none d-md-block">
							<div
								className="header-banner"
								style={
									challengeDetail.HasBigBackground ? (
										{ backgroundImage: `url(${challengeDetail.BigBackground})` }
									) : null
								}
							>
								<div className="glass-section">
									{challengeDetail.HasTopBanner ? (
										<div className="container event-top-banner">
											<img alt="event-top-banner" src={challengeDetail.TopBanner} />>
										</div>
									) : null}
									<div className="slogan-section">
										<div className="container event-header">
											<div className="event-name">
												<span className="eventname">{challengeDetail.Name}</span>
												<span className="event-organizer">
													{t('Door')}: {challengeDetail.Organizer}
												</span>
											</div>
											<div className="event-time">
												<div className="day">{challengeDetail.Day}</div>
												<div className="month">{challengeDetail.Month}</div>
												<div className="time">{challengeDetail.Time}</div>
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
									<img
										alt="banner"
										src={
											challengeDetail.HasSmallBackground ? (
												challengeDetail.SmallBackground
											) : (
												'/img/card-banner.png'
											)
										}
									/>
								</div>
								<div className="card-glass">
									<div className="slogan">{challengeDetail.Name}</div>
								</div>
								<div className="card-star">
									<img alt="star" src="/img/card-white-star.png" />
								</div>
								<div className={`event-info ${challengeDetail.Type}`}>
									<div className="event-content">
										<div className="event-time">
											<div className="day">{challengeDetail.Day}</div>
											<div className="month">{challengeDetail.Month}</div>
											<div className="time">{challengeDetail.Time}</div>
										</div>
										<div className="event-description">
											<div className="title">{challengeDetail.Description}</div>
											<div className="by-options">
												<div className="by">
													{t('Door')}: {challengeDetail.Organizer}
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
										<Menu
											mode={this.state.menumode}
											onClick={this.menuClick}
											onOpenChange={this.onOpenChange}
											openKeys={this.state.openkeys}
											defaultSelectedKeys={[ '0' ]}
										>
											{this.drawmenu(menuResult)}
										</Menu>
									) : null}
								</div>
							) : null}
						</div>
					</div>
				</div>
				{this.state.leaderboardshow ? (
					<div className="container">
						<div className="row">
							{this.props.winnerResult.length > 0 ? (
								this.drawWinnertable(this.props.winnerResult, t)
							) : this.props.menuResult.length > 0 ? (
								<img
									alt="event-loading-img"
									src="/img/table-loading-img.png"
									className="winnerresult-placeholder"
								/>
							) : null}
						</div>
					</div>
				) : (
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
												onChange={(e) => this.setState({ filter: e.target.value })}
												onKeyPress={this.handlefilterKeyPress}
												className="eventresult-text"
											/>
											<button
												type="button"
												className="btn btn-red btn-eventresult-filter"
												onClick={this.filtertable}
											>
												{t('Zoek')}
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
											ref={(ref) => {
												this.select = ref;
											}}
											options={[
												{ value: 25, label: 25 },
												{ value: 50, label: 50 },
												{ value: 100, label: 100 },
												{ value: -1, label: 'All' }
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
				)}
				{challengeDetail.length !== 0 ? (
					<div>
						<div className="event-page">
							<div className="container">
								<div className="event-detail">
									<div className="row">
										<div className="col-12">
											<div className="event-organisation">
												{challengeDetail.HasSmallBottomBanner ? (
													<img
														alt="event-bottom-banner"
														src={challengeDetail.SmallBottomBanner}
														className="d-md-none event-bottom-banner"
													/>
												) : null}
												<div className="event-organisation-topic">
													<span>{t('Organisatie')}</span>
												</div>
												{challengeDetail.OrganizerHasLogo ? (
													<div className="event-organisation-logo">
														<img src={challengeDetail.OrganizerLogo} alt="Organizer-logo" />
													</div>
												) : null}
												<div className="event-organisation-detail">
													<address>
														{challengeDetail.OrganizerMail !== null ? (
															<a
																className="event-organisation-web"
																href={`mailto:${challengeDetail.OrganizerMail}`}
															>
																{challengeDetail.OrganizerMail}
															</a>
														) : null}
													</address>
													{challengeDetail.OrganizerWeb !== null ? (
														<a
															className="event-organisation-web"
															href={`https://${challengeDetail.OrganizerWeb}`}
															target="_blank"
														>
															{challengeDetail.OrganizerWeb}
														</a>
													) : null}
													{challengeDetail.OrganizerPhone !== null ? (
														<a
															className="event-organisation-web"
															href={`tel:${challengeDetail.OrganizerPhone}`}
														>
															{challengeDetail.OrganizerPhone}
														</a>
													) : null}
													{challengeDetail.OrganizerFacebook !== null ? (
														<a
															className="event-organisation-web"
															href={`https://${challengeDetail.OrganizerFacebook}`}
															target="_blank"
														>
															{challengeDetail.OrganizerFacebook}
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
				{this.state.chrome ? <Footer /> : null}
			</div>
		);
	}
}
function mapStateToProps(state) {
	const challengeDetail = eventresultSelectors.getChallengeDetail(state);
	const menuResult = eventresultSelectors.getMenuResult(state);
	const winnerResult = eventresultSelectors.getWinnerResult(state);

	return {
		menuResult,
		challengeDetail,
		winnerResult
	};
}
export default translate('translations')(connect(mapStateToProps)(ChallengeResult));
