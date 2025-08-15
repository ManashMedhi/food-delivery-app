// // import {CDN_URL} from "../utils/constant"

// // const RestrauntCard = ({
// //   name,
// //   cuisines,
// //   cloudinaryImageId,
// //   lastMileTravelString,
// // }) => {
// //   return (
// //     <div className="card">
// //       <img
// //   src={imageUrl || "fallback-image-url.jpg"}
// //   onError={(e) => { e.target.src = "fallback-image-url.jpg"; }}
// //   alt={name}
// // />
// //       <h2>{name}</h2>
// //       <h3>{cuisines.join(", ")}</h3>
// //       <h4>{lastMileTravelString} minutes</h4>
// //     </div>
// //   );
// // };
// // export default RestrauntCard;

// import { CDN_URL } from "../utils/constant";

// const RestrauntCard = ({
//   name,
//   cuisines,
//   cloudinaryImageId,
//   lastMileTravelString,
// }) => {
//   // const imageUrl = cloudinaryImageId
//   //   ? CDN_URL + cloudinaryImageId
//   //   : "https://via.placeholder.com/200x150?text=No+Image";
// const imageUrl = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/8f8b2c0c4e3b8e1c3e8e8e8e8e8e8e8e";
//   return (
//     <div className="card">
//       <img
//         src={imageUrl}
//         onError={(e) => {
//           e.target.src = "https://via.placeholder.com/200x150?text=No+Image";
//         }}
//         alt={name}
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h4>{lastMileTravelString} minutes</h4>
//     </div>
//   );
// };

// export default RestrauntCard;



// NISHA CODE
const RestaurantCard = ({ resData }) => {
    // console.log(props);
// ami alay body er paray ate ahilung since body et lekkha asil ate suggest korse 
// ai j amar resData ta ase eta ami body component er paray pisung 
    const { name, cuisine, rating, avgTime, image, costForTwo } = resData.data // this is destructuring of the object
    return (
        <div className="res-card">
            <img src={image} alt="Dishes"
                className="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
           <p>⭐{rating}</p>
            <h4>{avgTime} mins</h4>
            <p><strong>Cost for Two:</strong> ₹{costForTwo}</p>
        </div>
    )
};

// creating higher order component
// input  - ReataurantCard and the o/p will be the RestaurantCard with promoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="promoted-label">Promoted</label>
                <RestaurantCard {...props} />
            </>
        )
    }
}

export default RestaurantCard;
