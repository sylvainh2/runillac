import { Link } from "react-router-dom";
// import jwt_decode from "jwt-decode";
import {useState,useEffect} from "react";

function Header() {
  
  let disableNav = 'disabled';
  let disableNav2 = 'disabled';
  
  // const [roleData, setRoleData] = useState(window.localStorage.getItem("jwt"));
  // let connectData = window.localStorage.getItem("connect");
  // const [mail, setMail] = useState("");

  // if (roleData) {
  //   const role = (jwt_decode(roleData)).roles;
  //   const validity = (jwt_decode(roleData)).validity;
  //   if((role==="admin" || role==="user") && validity=="1"){
  //     disableNav = "";
  //     disableNav2 = "";
  //    } else if(role==="user"){
  //     disableNav = "disabled";
  //     disableNav2 = "";
  //    }
  // }
  // if (!connectData){
  //   connectData = "connexion";
  // }
  // useEffect(()=>{
  //   (()=>{
  //     console.log("role:",roleData);
  //     if(roleData){
  //       let mailData = ((jwt_decode(roleData)).email) ;
  //       console.log("mail:",mailData);
  //       setMail(mailData);
  //     } else {
  //       let mailData = "";
  //       console.log("mail2:",mailData);
  //       setRoleData("");
  //       setMail("");
  //     }
  // })(mail)
  // },[]);
    return (
        <>
        <header>
          <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid navbar_image">
                <Link to={"/"} className="navbar-brand" href="#">
                  <img src="public/img/ASI-logo-01b.png" alt="logo"/>
                </Link>
  
              </div>
            </nav>
        </header>
    </>
    );
}

export default Header;