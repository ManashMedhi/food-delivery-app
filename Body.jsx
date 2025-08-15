import restrautList from "../utils/mockData";
import{useEffect, useState} from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

// lecture 3 
// const Body = () => {
//   return (
//     <div className="restaurant-list">
//       {restrautList.map((restaurant) => {
//         return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
//       })}
//     </div>
//   );
// };

// transformation of the react by hooked  i.e if we want to filter the top rated restaurant in the city i.e > 4 then how to make this 
//  this is the code
// we are using dummy data here 

//  const Body = () => {
//   const [listOfReataurants, setlistOfReataurants] = useState(restrautList);

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfReataurants.filter(
//               (res) => res.data.avgRating > 4 
//             );
//             setlistOfReataurants(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="restaurant-list">
//         {listOfReataurants.map((restaurant) => {
//           return (
//             <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
//           );
//          })}
//       </div>
//     </div>
//   );
// };



//   HERE WE ARE GOING TO FETCH DATA FOR THE API  WITH THE HELP OF THE USEEFECT
// 

// const Body = () => {
//   const [listOfReataurants, setlistOfReataurants] = useState([]);
  
//   useEffect(() => {
//     fetchData();
//   }, []);

//  const fetchData = async () => {
//   try {
//     const data = await fetch(
// "https://my-json-server.typicode.com/sumitkharche/demo/restaurants");
//     const json = await data.json();
//     console.log(json);
//     setlistOfReataurants(json.restaurants);
//   } catch (error) {
//     console.error("Fetch failed:", error);
//   }
// };

//   // SHIMMER UI
//   if (listOfReataurants.length === 0) { // ❌ "lenght" typo fixed to "length" and "==" changed to "==="
//     return <Shimmer />;
//   }

//   return (
//     <div className="body">
//       <div className="filter">
//       <div className="search">
//         <input type="text" className="search-box" />
//         <button className="search-btn">search</button>
//       </div>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfReataurants.filter(
//               (res) => res.data.avgRating > 4
//             );
//             setlistOfReataurants(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="restaurant-list">
//         {listOfReataurants.map((restaurant) => {
//           return (
//             <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

//import { useEffect, useState } from "react";
// import RestrauntCard from "./RestrauntCard";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [listOfReataurants, setlistOfReataurants] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const data = await fetch(
//         "https://swiggy-api-4c740.web.app/swiggy-api.json"
//       );
//       const json = await data.json();
//       setlistOfReataurants(json.restaurants);
//     } catch (error) {
//       console.error("Fetch failed:", error);
//     }
//   };

  
//   if (listOfReataurants.length === 0) {
//     return <Shimmer />;
//   }

//   return (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input type="text" className="search-box" />
//           <button className="search-btn">search</button>
//         </div>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfReataurants.filter(
//               (res) => res.avgRating > 4
//             );
//             setlistOfReataurants(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="restaurant-list">
//         {listOfReataurants.map((restaurant) => {
//           return (
//             <RestrauntCard {...restaurant} key={restaurant.id} />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Body;








// import { restaurantList } from "./contants";
// import RestaurantCard from "../RestaurantCard";
// import { useState } from "react";



// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// function filterData(searchText, restaurants) {
//   // 8 restraunt list = > filtered  rest with "King"
//   const filterData = restaurants.filter((restaurant) =>
 
//     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
//   );
//   return filterData;
// }
// const Body = () => {
//   const [allRestaurants, setAllRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   // empty dependency array => once after render
//   // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
//   useEffect(() => {
//     // API call
//     getRestaurants();
//   }, []);
//   async function getRestaurants() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     console.log(json);
//     // Optional Chaining
//     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//   }
//   console.log("render");
//   // not render component (Early return)
//   if (!allRestaurants) return null;
//   if (filteredRestaurants?.length === 0)
//     return <h1>No Restraunt match your Filter!!</h1>;
//   return allRestaurants?.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           className="search-btn"
//           onClick={() => {
//             //need to filter the data
//             const data = filterData(searchText, allRestaurants);
//             // update the state - restaurants
    
//             setFilteredRestaurants(data);
//           }}
//         >
//           Search
//         </button>
//       </div>
//       <div className="restaurant-list">
//         {/* You have to write logic for NO restraunt fount here */}
//         {filteredRestaurants.map((restaurant) => {
//           return (
//             <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
//           );
//         })}
//       </div>
//     </>
//   );
// };
// export default Body;

//  NISHA'S CODE


import { useEffect, useState , useContext} from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestrauntCard";
import {withPromotedLabel} from "./RestrauntCard.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import UserContext from "../utils/UserContext.jsx";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // loading state
    const [filteredRest, setFilteredRest] = useState([])
    const [searchItem, setSearchItem] = useState("");
    console.log(listOfRestaurants);

     const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

      const{loggedInUser , setUserName} = useContext(UserContext);
       

    useEffect(() => {
        const timer = setTimeout(() => {
            setListOfRestaurants(resList); // setting mock data
            setIsLoading(false); // shimmer off
            setFilteredRest(resList) // ami ate filteredRest state variable tat mock data set korilung karon ami nasang j amar listOfRestaurants state variable tat mock data change houk so ami jolay kiba 
            // search korung uta ami filteredRest variable tat jate update hoy .
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    //  Don't forget the `return` here!
    
    // CODE FOR ONLINE STATUS
    
    const isOnline = useOnlineStatus();
    if (!isOnline) {
        return <h1>
            Looks like you are offline!! Please check your internet connection.
        </h1>
    }



    
    if (isLoading) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="filter"> 
                {    /*   EVERY TIME I PRESS A KEY ONCHANGE GET FIRE , e.target.value holds the current value in the input box.
setSearch() updates the state variable with the new text. */}
                <div className="search">
                    <input type="text" placeholder="Search Restaurants" value={searchItem} className="search-box"
                     onChange={(e) => setSearchItem(e.target.value)}
                    />
                    {/*  JOLAY AMI ETA USE KORLUNG I.E setSearchItem(e.target.value) AMi  juta search korsung uta searchItem state variable tat store hobo*/}
                    {/* clear hoise eta done */}
                    <button className="search-btn" onClick={() => {
                        //filtered the restaurant cards and update the UI
                        const filteredItem = filteredRest.filter((res) => res.data.name.toLowerCase().includes(searchItem.toLowerCase()))
                         
                            setFilteredRest(filteredItem) // eta marar loge loge amr juta restraunt search korsung uta ahibo
                      
                    }}>Search</button>
                      
             {/*  DETAILS CONCEPT OF THE USECONTEXT */}
                      {/* User types → onChange fires.

setUserName updates userName in AppLayout’s state.

Since userName changed, React re-renders AppLayout.

New value={{ loggedInUser: userName, setUserName }} is passed to the Provider.

All components using useContext(UserContext) get the updated loggedInUser instantly. */}

                    {/* <input type="text" value={loggedInUser} onChange={(e)=>{
                     setUserName(e.target.value);
                    }} /> */}

                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = filteredRest.filter(
                        (res) => res.data.rating >= 4.3
                    );
                    setFilteredRest(filteredList);
                }}>
                    Top Rated
                </button>

            </div>


            {/* use params to make the cards dynamic  */}
           <div className="res-container">
    {filteredRest.length > 0 ? (
        filteredRest.map((res) => (
            <Link to={"/restaurants/" + res.data.id} key={res.data.id}>
                {res.data.promoted ? (
                   <PromotedRestaurantCard resData={res} />
                ) : (
                   <RestaurantCard resData={res} />
                )}
            </Link>
        ))
    ) : (
        <h1>No Restaurant Found</h1>
    )}
</div>
        </div>
    );
};

export default Body;