import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Accordion = ({ data, showitems, fun }) => {
  const [auto, setAuto] = useState(false);
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };


  return (
    <div className="accordion">
      {/* Accordion Header */}
      <div
        className="accordion-header"
        onClick={() => {
          fun();
          setAuto(!auto); // Toggle showitems state when header is clicked
        }}
      >
        <span className="accordion-title">{data.category}</span>
        <span className="accordion-count">
          (
          {data.items?.length ||
            data.subCategories?.reduce(
              (count, sub) => count + (sub.items?.length || 0),
              0
            ) ||
            0}
          ) items
        </span>
        <span className="accordion-arrow">
          {showitems && auto ? "▲" : "▼"}{" "}
        </span>
      </div>

      {/* Accordion Content */}
      {showitems && auto && (
        <div className="accordion-content">
          {/* JODI DIRECT ITEMS THAKE TAHALE AITA RUN KOR AMAR ? MARK I.E OPTIONAL CHAINING THAY UTA KAM KORIBI JODI ASE TAHALE ETA RANDER KOR JODI ITEMS NAI THEN JS A UNDEFINED DIBO KIN2 AND UNDEFINED IN REACT MEANS NO NEED TO RENDER */}
          {data.items?.map((item, index) => (
            <div key={index} className="accordion-item">
              {/* Left side content */}
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">₹{item.price}</p>
                <p className="item-description">{item.description}</p>
              </div>

              {/* Right side image with ADD button */}
              <div className="item-image-container">
                <img src={item.image} alt={item.name} className="item-image" />
                <button className="item-add-btn" onClick={()=>handleAddItems(item)}>+ADD</button>
                {item.customisable && (
                  <p className="item-customisable">Customisable</p>
                )}
              </div>
            </div>
          ))}

          {/* MANI LO J AMAR ITEMS NAI DIRECTLY SUBCATAGORY ASE TAHALE UPORER PORTION CODE TA RUN NOHOBO AER TOLER KHINE HOBO */}
          {data.subCategories?.map((sub, subIndex) => (
            <div key={subIndex} className="accordion-subcategory">
              <h4>{sub.name}</h4>
              {/* JODI ITEMS ASE RUN TAHALE MAP TA SOLAY I.E ITERATE KOR JODI ITEMS NAI RENDER KORIBA NALAGE */}
              {sub.items?.map((item, index) => (
                <div key={index} className="accordion-item">
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">₹{item.price}</p>                  
                    <p className="item-description">{item.description}</p>
                  </div>
                  <div className="item-image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                    />
                    <button className="item-add-btn" onClick={()=>handleAddItems(item)}>+ADD</button>
                    {item.customisable && (
                      <p className="item-customisable">Customisable</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))} 
        </div>
      )}
    </div>
  );
};

export default Accordion;




// onClick={handleAddItems}
// onClick={() => handleAddItems(item)}
// onClick={handleAddItems(Item)}
//  onClick={() => handleAddItems}   ===> this is same as this 
                                                                  // function temp() {
                                                                  //   return handleAddItems;
                                                              // }