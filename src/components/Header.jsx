import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import logoASI from "../assets/img/ASI-logo-01b.png";

function Header() {
  

    return (
        <>
        <header>
          <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid navbar_image">
                <Link to={"/"} className="navbar-brand" href="#">
                  <img src={logoASI} alt="logo"/>
                </Link>
                {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                    {/* <li className="nav-item ms-lg-auto "> */}
                      <h1 className="title-nav">Run'illac</h1>
                    {/* </li> */}
                {/* </div> */}
              </div>
            </nav>
        </header>
    </>
    );
}

export default Header;