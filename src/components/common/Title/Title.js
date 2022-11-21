import React from 'react';
import Proptypes from 'prop-types';
import s from './Title.module.css';

const Title = ({ title }) => {
  return <h1 className={s.title}>{title}</h1>;
};

Title.propTypes = {
  title: Proptypes.string.isRequired,
};

export default Title;
