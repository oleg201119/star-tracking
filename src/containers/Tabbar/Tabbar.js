import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { translate } from 'react-i18next';
import 'react-tabs/style/react-tabs.css';
import PersonEvents from '../Homeperson/PersonEvents';
import FriendEvents from '../Homeperson/FriendEvents';
import CategoryEvents from '../Homeperson/CategoryEvents';
import './Tabbar.css';
import Wizardview from '../Wizardview/Wizardview';

class Tabbar extends Component {
  constructor() {
    super();
    this.state = {
      registered: false,
    };
  }
  render() {
    const { t } = this.props;
    const tabindex = this.props.registered ? 4 : 0;
    return (
      <div>
        <Tabs defaultIndex={tabindex}>
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
            <div className="container">
              <PersonEvents />
            </div>
            <div className="container friend-event">
              <FriendEvents />
            </div>
            <div className="container category-event">
              <CategoryEvents />
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel>
            {this.props.registered ? <Wizardview /> : <Wizardview />}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default translate('translations')(Tabbar);
