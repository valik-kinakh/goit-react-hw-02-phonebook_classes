import React from 'react';
import Proptypes from 'prop-types';
import s from './Label.module.css';

const Label = ({ text, htmlFor }) => {
  return (
    <label className={s.label} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

Label.propTypes = {
  text: Proptypes.string.isRequired,
  htmlFor: Proptypes.string.isRequired,
};

export default Label;
