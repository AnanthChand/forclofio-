import React, { useState } from "react";
import  styles from './Header.module.css'


function Header() {
  const [currentTime] = useState(new Date());

  const formattedTime = currentTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });

  return (
    <div className={styles.heading}>
      <h2 className="Logo">Hi Jennie Moss</h2>
        <p className="time">Last scanned on {formattedTime} IST</p>
    
    </div>
  );
}

export default Header;
