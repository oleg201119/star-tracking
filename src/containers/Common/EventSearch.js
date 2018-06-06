import React, { Component } from 'react';
import Select from 'react-select';
import { translate } from 'react-i18next';
import 'react-select/dist/react-select.css';
import './EventSearch.css';

class EventSearch extends Component {
  constructor() {
    super();
    this.state = {
      selectEvent: '',
      selectStatus: '',
    };
    this.updateselectEvent = this.updateselectEvent.bind(this);
    this.updateselectStatus = this.updateselectStatus.bind(this);
  }
  componentDidMount() {
    this.setState({ selectEvent : this.props.selectEvent });
  }
  updateselectEvent(e) {
    this.setState({ selectEvent: e });
  }
  updateselectStatus(e) {
    this.setState({ selectStatus: e });
  }
  render() {
    const { t } = this.props;

    return (
      <div className="search-main">
        <div className="search-title">
          <span className="title-context">{t('Vind hier jouw sportevent')}:</span>
        </div>
        <div className="search-bar">
          <div className="row search-bar-main">
            <div className="col-4 search-element">
              <Select
                ref={(ref) => { this.select = ref; }}
                options={[
                  { value: 'Running', label: t('Running') },
                  { value: 'TrialRun', label: t('TrialRun') },
                  { value: 'Roadbike', label: t('Roadbike') },
                  { value: 'Mountainbike', label: t('Mountainbike') },
                  { value: 'MultiSport', label: t('MultiSport') },
                  { value: 'Other', label: t('Other') },
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
              <button type="button" className="btn btn-red btn-search">{t('Zoek')}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default translate('translations')(EventSearch);