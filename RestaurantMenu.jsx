//  WHEN WE ARE USING API WE HAVE TO USE THR USEEFfECT AND THE USE STATE



// import { useEffect, useState } from 'react';
// import Shimmer from './Shimmer';
// import { useParams } from 'react-router-dom';
// import { MENU_API_URL } from '../utils/constant';

// const RestaurantMenu = () => {
//   const [resInfo, setresInfo] = useState(null);
//   const { resId } = useParams();

//      CUSTOM HOOK
  //   const resInfo = useRestaurantMenu(resId);

  //  if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage, avgRatingString, totalRatingsString } =
//     resInfo?.cards[0]?.card?.card?.info || {};

//   const { itemCards } =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <h2>{cuisines && cuisines.join(", ")}</h2>
//       <h2>{costForTwoMessage}</h2>
//       <h1>{avgRatingString}</h1>
//       <h1>{totalRatingsString}</h1>
//       <ul>
//         {itemCards
//           ? itemCards.map((item, idx) => <li key={idx}>{item.card.info.name}</li>)
//           : <li>No menu items found.</li>}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;


import{useParams} from 'react-router-dom';
import resListMenu from '../utils/mockData2';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useState } from 'react';
// import RestaurantCategory from './RestaurantCatogory';
import Accordion from './Accordion';
const RestaurantMenu=()=>{
    const{resId} = useParams();

    // custom hook
    const resInfo = useRestaurantMenu(resId);

    const[showindex , setShowIndex] = useState(null);  // by default show first category

    // below code  is directly fetching the mock data so to
    // reduce the code complexity we are using the custom hook
    //  const resInfo = resListMenu.find((res)=>res.id === resId);
    if(!resInfo) return <h2>Restaurant Not Found.</h2>

    const categories = resInfo.accordionMenu;
    console.log(categories);

    const { name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    menu,
    } = resInfo;

    
    return ( // 5️⃣
        <div className="menu" style={{ padding: "20px" }}>
      <h1 className='restaurant-name'>{name}</h1>
      <p className='restaurant-cuisines'> <strong>Cuisines:</strong> {cuisines.join(", ")}</p>
      <p className='restaurant-cost'> <strong>Cost for Two:</strong> {costForTwoMessage}</p>
      <p className='restaurant-rating'> <strong>Rating:</strong> {avgRatingString}</p>
      <p className='restaurant-total-ratings'> <strong>Total Ratings:</strong> {totalRatingsString}</p>

      <h2>Menu</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* CONTROLLED COMPONENT FROM DATA IS OIL*/}
      {/*  Adding ACCORDIAN ITEMS CONCEPT */}
        {categories.map((category, index) => (
          <Accordion  data={category } key={index} showitems={showindex === index ? true : false} 
          fun={() => setShowIndex(index)}/>
          
          // we are calling the setShowIndex function to update the state
          // and the Accordion component will re-render with the new showitems value
          //and the set show index is being passed to the accordion
        ))}
    </div>
);
}


export default RestaurantMenu;