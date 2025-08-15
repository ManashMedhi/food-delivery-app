// when we are Fetching data from API we are going to use this code

// import { useState, useEffect } from "react";
// import { MENU_API_URL } from "./constant";
// const useRestaurantMenu=((resId)=>{
    
//     const [resInfo,setresInfo] = useState(null);
//     useEffect(()=>{
    //         fetchMenu();
//     } , [])
// })

//  const fetchMenu = async() => {
//      const data = await fetch(MENU_API_URL +resId);
//       const json = await data.json();
//       setresInfo(json.data);
//  }

// ...................................................

//  THIS IS THE CODE WHEN WE ARE USING THE MOCK DATA



import resListMenu from './mockData2';
const useRestaurantMenu=(resId)=>{
    const resInfo = resListMenu.find((res)=>res?.id === resId);
    return resInfo;
}
export default useRestaurantMenu;