const Login=()=>{
    return (
        <div className="Login-container">
           <h2 className="logo">𝔉𝔬𝔬𝔡 𝔇𝔢𝔩𝔦𝔳𝔢𝔯𝔶</h2>
              <div className="login">
            <input  className ="input-field"type="text"  placeholder=" Username, Phone No., Email Id"/> 
            <input className ="input-field"type="password" placeholder="Password" />
            <button className="login-btn1">Login</button>
            <div className="or-divider">
                <span>OR</span>
            </div>
            <p className="forget">Forget Password</p>

        </div>
        </div>
      
    )
}
export default Login;