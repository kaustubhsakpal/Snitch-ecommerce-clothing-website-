import React from 'react'
import './login.scss'
const login = () => {
  return (
    <div className="maincontainer">
        <div className="imagecontainer">
            <div className="leftcontainer">
                <div><h1>CompanyLogo</h1></div>
                <div>
                    <h1>Shop</h1>
                 <div>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li> something</li>
                    <li>something</li>
                 </div>

                </div>
            </div>
            <div className="rightcontainer">
                <div className="right">
                    <div>X</div>
                    <div>
                        <h2>Existing Member</h2>
                        <h2>Welcome Back</h2>
                    </div>
                    <div>
                        <form action="">
                            <input type="email" name="email" id="" />
                            <input type="password" />
                            <button>Continue</button>
                        </form>
                    </div>
                    <div>------------OR-------------</div>
                    <div>
                        <img src="" alt="googlelogo" />
                        <img src="" alt="lnkdinlogo" />
                        <img src="" alt="githublogo" />
                    </div>
                    <div>
                        <p> New here ? Create your account </p>
                    </div>
                </div>
            </div>

        </div>
    
    </div>
  )
}

export default login