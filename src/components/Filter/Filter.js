import React from 'react';
import Proptypes from 'prop-types';
import s from './Filter.module.css';
import Label from '../common/Label';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    const { setSearchQuery } = this.props;
    setSearchQuery(e.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <div className={s.filter}>
        <Label htmlFor="searchQuery" text="Find contacts by name" />
        <input value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

Filter.propTypes = {
  value: Proptypes.string.isRequired,
  setSearchQuery: Proptypes.func.isRequired,
};

export default Filter;
