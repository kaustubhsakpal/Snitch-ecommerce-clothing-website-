import React from 'react'
import './login.scss'
import closelogo from "../../../assets/png/close.png"
const login = () => {
    console.log(closelogo);
    
  return (
    <div className="maincontainer">
        <div className="imagecontainer">
            <div className="leftcontainer">
                <div className="companylogo"><h1>Snitch_ _ _!!</h1></div>
                <div className="shop">
                    <h1>Shop</h1>
                 <div className="shoplist">
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                 </div>
 
                </div>
            </div>
            <div className="rightcontainer">
                    
                <div className="close">
                  <img src={closelogo} alt="" className="close" />
                </div>
                    <div className="welcome">
                        <h2>Existing Member</h2>
                        <h2>Welcome Back</h2>
                    </div>
                    <div className="form">
                        <form >
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="" />
                            <label htmlFor="">Password</label>
                            <input type="password" />
                            <button>Continue <img src="../../../assets/png/right-arrow.png" alt="" /></button>
                        </form>
                    </div>
                    <div className="orline"><p></p> OR <p></p></div>
                    <div className="images">
                        <img src="../../../assets/png/google.png" alt="googlelogo" />
                        <img src="../../../assets/png/linkedin.png" alt="lnkdinlogo" />
                        <img src="../../../assets/png/github.png" alt="githublogo" />
                    </div>
                    <div className="newaccount">
                        <p> New here ? <a href="#">Create your account</a> </p>
                    </div>
            </div>

        </div>
    
    </div>
  )
}

export default login