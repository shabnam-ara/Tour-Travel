import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Data, Data2, Data3 } from '../Data';
import { useRecoilState } from 'recoil';
import NavbarStyle from './Navbar.module.css';

export default function Navbar() {
  const [show, setShow] = useState(true);

  const [data, setData] = useRecoilState(Data);
  const [sub, setSub] = useRecoilState(Data2);
  const [sub1, setSub1] = useRecoilState(Data3);

  function logout() {
    setData(false);
  }

  return (
    <>
      <div className={NavbarStyle.box}>
        <a href='#'>
          <div className={NavbarStyle.logo}>
            <Link to='/'>
              <img src="whiteLogo.png" alt="Logo" className={NavbarStyle.whiteLogo} /> 
            </Link>
          </div>
        </a>
        <div className={NavbarStyle.link} id={show ? '' : NavbarStyle.menu}>
          <Link className={NavbarStyle.lin} to="/about">
            Home
          </Link>
          <a className={NavbarStyle.lin} href="#program">
            Destination
          </a>
          <a className={NavbarStyle.lin} href="#program">
            About Us
          </a>
          {sub1 ? (
            <a
              className={NavbarStyle.lin}
              href=""
              style={{ color: 'black', backgroundColor: 'white', textShadow: '1px 1px red' }}
            >
         
            </a>
          ) : (
            <>
              {sub ? (
                <a
                  className={NavbarStyle.lin}
                  href=""
                  style={{ color: 'black', backgroundColor: 'white', textShadow: '1px 1px red' }}
                >
               
                </a>
              ) : (
                <>
                  {data ? (
                    <a className={NavbarStyle.lin} href="">
                      SUBSCRIBE-NOW
                    </a>
                  ) : (
                    <a className={NavbarStyle.lin} href="">
                      Contact Us
                    </a>
                  )}
                </>
              )}
            </>
          )}
        </div>
        <div className={NavbarStyle.mobile}>
          {show ? <AiOutlineMenu onClick={() => setShow(false)} /> : <AiOutlineClose onClick={() => setShow(true)} />}
        </div>
      </div>
    </>
  );
}
