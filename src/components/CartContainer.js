import { useSelector } from "react-redux";
import CartItem from './CartItem'

const CartContainer = () => {
  const {cartItems, total, amount} = useSelector((store) => store.cart);
 
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <div>
            {cartItems.map((item) => {
              return <CartItem key= {item.id}/>
            })} 
            <footer>
              <hr />
              <div className="cart-total">
                <h4 className="">Total <span>${amount} </span></h4>
              </div>
            </footer>
          </div>
        </header>
      </section>
    );
}

export default CartContainer