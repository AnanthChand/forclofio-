import React from "react";
import Card from "./Card";
import styles from './CardLayout.module.css'

function CardLayout() {
  return (
    <div className={styles.cardlayout}>
      <Card line1="$400,000" line2="Total budget you own"/>
      <Card line1="$299,762" line2="Spent month to date."/>
      <Card line1="$2,939,332" line2="Forecasted till monthy end."/>
    </div>
  );
}

export default CardLayout;
