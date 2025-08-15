// import Title from "./Title";
// import { useState } from "react";

// const Header = () => {
//   const [btnReact, setBtnReact] = useState("Login");

//   return (
//     <div className="header">
//       <Title />
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Cart</li>
//           <li>
//             <button
//               className="login"
//               onClick={() => {
//                 setBtnReact(btnReact === "Login" ? "Logout" : "Login");
//               }}
//             >
//               {btnReact}
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;


// import { useState } from "react";
// const loggedInUser = () => {
//   // API call to check authentication
//   return false;
// };
// const Title = () => (
//   <a href="/">
//     <img
//       className="logo"
//       alt="logo"
//       src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
//     />
//   </a>
// );
// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <div className="header">
//       <Title />
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//       {isLoggedIn ? (
//         <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//       ) : (
//         <button onClick={() => setIsLoggedIn(true)}>Login</button>
//       )}
//     </div>
//   );
// };
// export default Header;


// NISHA CODE


import { useState , useContext} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.jsx';
import { lazy, Suspense} from 'react';
import UserContext from '../utils/UserContext.jsx';
import { useSelector } from 'react-redux';



export const Header = () => {
    const [changeBtn, setChangeBtn] = useState('Login')


const cartItems = useSelector((store)=>store.cart.items);
    //  userContext concept
    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)

const isOnline = useOnlineStatus();
const Grocery = lazy(() => import("./Grocery"));

    const btnChange = () => {
        changeBtn === "Login" ? setChangeBtn("Logout") : setChangeBtn('Login')
    }
    return (
        <div className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9N_J6QUBKgyKj_fuWxlNMr5rvG163ObcAM4ldnUNoYPkdzRl8fYbjmmetr6ZdFRRHxU&usqp=CAU" alt="" className="imgLogo" />

            <div className="list">
                <ul className="nav-list">
                  <li>
                    Online Status:{isOnline?"✅":"🔴"}
                  </li>
                    <li className='nav-item'>
                      <Link to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='nav-item'>
                      <Link to="/about">About us</Link>
                    </li>
                     <li className='nav-item'>
                      <Link to="/grocery">Grocery</Link>
                    </li>
                    {/* <li className='nav-item'>
                      {loggedInUser}
                    </li> */}
                    <li className='nav-item'>
                      <Link to="/logins">Login</Link>
                    </li>
                    <li className='nav-item'>
                      <Link to="/cart"> 🛒 Cart({cartItems.length}) </Link>
                    </li>
                    {/* <button onClick={btnChange}>{changeBtn}</button> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;