// App.js

import React from "react";
import AppStyle from "./App.module.css";
import Navbar from "./component/Navbar";
import Training from "./component/Training";
import Footer from "./component/Footer";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Data, Data2, Data3 } from "./Data.js";
import Form from "./Form";
import Feedback from "./Feedback";
import Global from "./Global";

export default function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useRecoilState(Data);
  const [sub, setSub] = useRecoilState(Data2);
  const [sub1, setSub2] = useRecoilState(Data3);

  function Logout() {
    setData(false);
    setSub(false);
    setSub2(false);
  }

  return (
    <>
      <div id="Home" className={AppStyle.box}>
        <Navbar className={AppStyle.nav} />
        <div className={AppStyle.wrap}>
          <div className={AppStyle.content}>
            <Form />
            <p>ELEVATE YOUR TRAVEL JOURNEY</p>
            <h1>Discover Your World With Trippy Baba</h1>
            <p>
              "Trippy Baba is your gateway to unforgettable journeys. We're
              passionate about crafting unique travel experiences that immerse
              you in culture, adventure, and discovery. Join us in exploring the
              world's most captivating destinations, one trip at a time. Travel
              with Trippy Baba for unforgettable memories."
            </p>
          </div>
        </div>
      </div>

      <div id="program">
        <Training />
      </div>
      <div className="app">
        <Feedback />
      </div>
      <div>
        <Global />
      </div>

      <Footer />
    </>
  );
}
