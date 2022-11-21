import React from 'react';
import Proptypes from 'prop-types';
import s from './SubTitle.module.css';

const SubTitle = ({ title }) => {
  return <h2 className={s.subTitle}>{title}</h2>;
};

SubTitle.propTypes = {
  title: Proptypes.string.isRequired,
};

export default SubTitle;
