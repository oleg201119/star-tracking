import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { translate } from 'react-i18next';
import 'react-tabs/style/react-tabs.css';
import MySelectedEvents from '../Homeperson/MySelectedEvents';
import FriendEvents from '../Homeperson/FriendEvents';
import CategoryEvents from '../Homeperson/CategoryEvents';
import RegisteredEvents from './RegisteredEvents';
import MyResultsEvents from './MyResultsEvents';
import './Tabbar.css';
import Wizardview from '../Wizardview/Wizardview';
import Register6 from '../Wizardview/Register6';
import FavoritedEvents from './FavoritedEvents';

class Tabbar extends Component {
	constructor() {
		super();
		this.state = {
			tabindex: 0
		};
	}
	componentDidMount() {
		const registered = this.props.location.state !== undefined ? this.props.location.state.registered : '';
		const tabindex = this.props.location.state !== undefined ? this.props.location.state.tabindex : '';
		if (registered) {
			this.setState({ tabindex: 4 });
		}
		if (tabindex !== undefined && tabindex !== '') {
			this.setState({ tabindex: tabindex });
		}
	}
	componentWillReceiveProps = (nextProps) => {
		const tabindex = nextProps.location.state !== undefined ? nextProps.location.state.tabindex : '';
		if (tabindex !== undefined && tabindex !== '') {
			this.setState({ tabindex: tabindex });
		}
	};

	render() {
		const { t } = this.props;
		const { tabindex } = this.state;
		const registered = this.props.location.state !== undefined ? this.props.location.state.registered : '';
		return (
			<Tabs selectedIndex={tabindex} onSelect={(firstTab, lastTab) => this.setState({ tabindex: firstTab })}>
				<div className="tabbar">
					<div className="container">
						<TabList>
							<Tab>{t('Discover')}</Tab>
							<Tab>{t('My registrations')}</Tab>
							<Tab>{t('Favorited')}</Tab>
							<Tab>{t('My results')}</Tab>
							<Tab className="account-tab react-tabs__tab">{t('My account')}</Tab>
						</TabList>
					</div>
				</div>
				<TabPanel>
					<MySelectedEvents />
					<div className="container friend-event">
						<FriendEvents />
					</div>
					<div className="container category-event">
						<CategoryEvents />
					</div>
				</TabPanel>
				<TabPanel>
					<RegisteredEvents />
				</TabPanel>
				<TabPanel>
					<FavoritedEvents />
				</TabPanel>
				<TabPanel>
					<MyResultsEvents />
				</TabPanel>
				<TabPanel>{!registered ? <Wizardview {...this.props} /> : <Register6 {...this.props} />}</TabPanel>
			</Tabs>
		);
	}
}
export default translate('translations')(Tabbar);
