import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabbar.css';

export default class Tabbar extends Component {
  render() {
    return (
      <div className="tabbar">
      <div className="container">
          <Tabs>
            <TabList>
              <Tab>Discover</Tab>
              <Tab>My registrations</Tab>
              <Tab>Favorited</Tab>
              <Tab>My results</Tab>
              <Tab className="account-tab react-tabs__tab">My account</Tab>
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
