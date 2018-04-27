import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './EventSearch.css';

export default class EventSearch extends Component {
  constructor(){
    super();
    this.state = {
      selectEvent : "",
      selectStatus: ""
    }
    this.updateselectEvent = this.updateselectEvent.bind(this);
    this.updateselectStatus = this.updateselectStatus.bind(this);
  }
  updateselectEvent(e) {
    this.setState({selectEvent: e});
  }
  updateselectStatus(e) {
    this.setState({selectStatus: e});
  }
  render() {
    return (
      <div className="search-main">
        <div className="search-title">
          <span className="title-context">Vind hier jouw sportevent:</span>
        </div>
        <div className="search-bar">
          <div className="row search-bar-main">
            <div className="col-4 search-element">
              <Select
                ref={(ref) => { this.select = ref; }}
                options={[
                  { value: 'one', label: 'Marathons' },
                  { value: 'two', label: 'Triathlons' },
                  { value: 'three', label: 'Mountainbiking' },
                ]}
                simpleValue
                // clearable={this.state.clearable}
                placeholder="Type event"
                value={this.state.selectEvent}
                onChange={this.updateselectEvent}
                className="search-event"
                searchable={false}
              />
            </div>
            <div className="col-4 search-element">
              <Select
                ref={(ref) => { this.select = ref; }}
                options={[
                  { value: 'one', label: 'First' },
                  { value: 'two', label: 'Second' },
                  { value: 'three', label: 'Third' },
                ]}
                simpleValue
                // clearable={this.state.clearable}
                placeholder="Status"
                value={this.state.selectStatus}
                onChange={this.updateselectStatus}
                className="search-status"
                searchable={false}
              />
            </div>
            <div className="col-2 search-element">
              <button type="button" className="btn btn-red btn-search">Zoek</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
