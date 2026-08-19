import React, { useEffect, useState } from "react";
import "./login.scss";

import close from "../../../../assets/png/close.png";
import rightarrow from "../../../../assets/png/right-arrow.png";
import google from "../../../../assets/png/google-symbol.png";
import linkedin from "../../../../assets/png/linkedin.png";
import github from "../../../../assets/png/github.png";
import threeline from "../../../../assets/png/threeline.png";

import { useAuth } from "../../hook/useAuth.hook.js";

const login = () => {
  const [isopen, setIsOpen] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { registerhandler, loginhandler, getmehandler } = useAuth();

  function handelinput(e) {
    e.preventDefault();

    console.log(email, password);
    loginhandler({ email, password });
  }

  return (
    <div className="maincontainer">
      <div className="imagecontainer">
        <div className="leftcontainer">
          <div className="companylogo">
            <h1>Snitch_ _ _!!</h1>
          </div>
          <div className="shop">
            <h1>Shop</h1>
            <ul className="shoplist">
              <li>Mens</li>
              <li>Womens</li>
              <li>Kids</li>
              <li>Accessories</li>
              <li>Footwear</li>
            </ul>
          </div>
        </div>
        <img
          src={threeline}
          alt=""
          className="show"
          onClick={() => {
            setIsOpen(true);

            console.log("hii");
          }}
        />
        <div className={`rightcontainer ${!isopen ? "hide" : ""}`}>
          <div className="close">
            <img
              src={close}
              alt=""
              className="close"
              onClick={() => {
                setIsOpen(false);
                console.log("hii");
              }}
            />
          </div>
          <div className="welcome">
            <h2>Existing Member</h2>
            <h2>Welcome Back</h2>
          </div>
          <div className="form">
            <form
              onSubmit={(e) => {
                handelinput(e);
              }}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <button>
                Continue <img src={rightarrow} alt="" />
              </button>
            </form>
          </div>
          <div className="orline">
            <p></p> OR <p></p>
          </div>
          <div className="images">
            <img src={google} alt="googlelogo" />
            <img src={linkedin} alt="lnkdinlogo" />
            <img src={github} alt="githublogo" />
          </div>
          <div className="newaccount">
            <p>
              {" "}
              New here ? <a href="#">Create your account</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
