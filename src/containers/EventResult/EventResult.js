import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { translate } from 'react-i18next';
import 'react-tabs/style/react-tabs.css';
import Category from './Category1/Category';

class EventResult extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    // const { t } = this.props;
    return (
      <div>
        <Tabs>
          <div className="tabbar">
            <div className="container">
              <TabList>
                <Tab>Category1</Tab>
                <Tab>Category2</Tab>
                <Tab>Category3</Tab>
                <Tab>Category4</Tab>
                <Tab>Category5</Tab>
              </TabList>
            </div>
          </div>
          <TabPanel>
            <div className="container">
              <Category />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="container">
              <Category />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="container">
              <Category />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="container">
              <Category />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="container">
              <Category />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default translate('translations')(EventResult);
