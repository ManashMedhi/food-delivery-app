import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import {removeItem} from "../utils/cartSlice";


const Cart=()=>{
    const dispatch = useDispatch();

    const handleClearCart = () => {
      dispatch(clearCart());
    }


    const handleRemoveItem=(itemId)=>{
        dispatch(removeItem(itemId));
        console.log("Item removed from cart:", itemId);
    }
    // const handleRemoveItems=(itemId)
    const CartItems = useSelector((store) => store.cart.items);
    return (
        <div>
            <div className="cart-header">
            <h1 className="cart-title">Cart🛒</h1>
       <button onClick={handleClearCart} className="clear-cart-btn">Clear Cart</button>
       </div>
            {CartItems.length === 0 ? (
                <div className="empty-cart-message">No items in cart
                  <img  className="dog-photo" src="https://www.shutterstock.com/image-photo/golden-retriever-dog-lying-down-260nw-2485323863.jpg" alt="Dog Photo" />
                      </div>
            ) : (
                <ul>
                    {CartItems.map((item, index) => (
                       <div className="item-details" key={index}>
                <p className="item-name">{item.name}</p>
                <p className="item-price">₹{item.price}</p>
                <p className="item-description">{item.description}</p>
                <button className="remove-item-btn" onClick={()=> handleRemoveItem(item.id)} >Remove Item -</button>
              </div>
                    ))}

                </ul>
            )}
            </div>
    );
}
export default Cart;