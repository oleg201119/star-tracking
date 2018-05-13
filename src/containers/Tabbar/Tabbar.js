import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { translate } from 'react-i18next';
import 'react-tabs/style/react-tabs.css';
import './Tabbar.css';

class Tabbar extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="tabbar">
        <div className="container">
          <Tabs>
            <TabList>
              <Tab>{t('Discover')}</Tab>
              <Tab>{t('My registrations')}</Tab>
              <Tab>{t('Favorited')}</Tab>
              <Tab>{t('My results')}</Tab>
              <Tab className="account-tab react-tabs__tab">{t('My account')}</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default translate('translations')(Tabbar);