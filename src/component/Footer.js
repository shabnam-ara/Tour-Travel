import React from "react";
import style from "./Footer.module.css";
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <div className={style.main}>
      <div className={style.leftColumn}>
        <img src="whiteLogo.png" alt="Logo" className={style.whiteLogo} />
        <p>
          Trippy Baba is one of the best travel agencies so far in Delhi NCR. With a splendid experience of delivering the best travel experiences in the most stunning holiday destinations ranging from Goa to Singapore and prominent honeymoon locations like Bali.
        </p>
      </div>
      <div className={style.rightColumn}>
        <div>
          <NavLink to="/about">About</NavLink>
          <ol>
            <li>- About</li>
            <li>- Destination</li>
            <li>- Testimonials</li>
          </ol>
        </div>
        <div>
          <NavLink to="/link">Link</NavLink>
          <ol>
            <li>- Home</li>
            <li>- About Us</li>
            <li>- Contact Us</li>
          </ol>
        </div>
        <div>
          <NavLink to="/contact">Contact Us</NavLink> 
          <ol>
            <li>- 8178550422 / 7827423788</li>
            <li>- enquiry@trippybabatours.com</li>
            <li>- Social Links:</li>
          </ol>
        </div>
      </div>

      <div className={style.hr}></div>
      <div className={style.col}>All Rights reserved by ©: trippybabatours.com</div>
    </div>
  );
}

export default Footer;
