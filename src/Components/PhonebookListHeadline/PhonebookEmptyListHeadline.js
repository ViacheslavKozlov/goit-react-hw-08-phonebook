import React from "react";
import PropTypes from "prop-types";
import style from "./PhonebookListHeadline.module.css";

const PhonebookEmptyListHeadline = ({ title }) => {
  return <h3 className={style.phonebookListHeadline}> {title} </h3>;
};

PhonebookEmptyListHeadline.propTypes = {
  title: PropTypes.string.isRequired
};

export default PhonebookEmptyListHeadline;
