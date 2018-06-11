import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './Category.css';

class Category extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    // const { t } = this.props;
    return (
      <div className="container register-wizard">
        <div className="row">
          sss
        </div>
      </div>
    );
  }
}
export default translate('translations')(Category);
