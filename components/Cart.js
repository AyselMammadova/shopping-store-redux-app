import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Cart = ({ close }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
      <div className="cart-wrapper">
          <div className="cart-head flex items-center justify-between p-[26px] bg-lwhite2 shadow-shadow4 border-b border-b-solid border-lwhite4">
              <h4 className="font-semibold text-base text-tx tracking-wider">
                  ÜRÜN SAYI: 
                  <span className="text-black ml-[5px]">
                    {cart.cartTotalQuantity}
                  </span>
              </h4>

              <div className="close-cart cursor-pointer" onClick={close}>
                  <img src="/images/close2.svg" alt="close-cart" />
              </div>
          </div>

          <div className="cart-items-wrap pl-[26px] pr-[20px] h-[100vh] bg-lwhite7">
              {cart.cartItems.length === 0 ? (
                  <div className="cart-empty pt-[30px]">
                      <p className="font-bold text-center">Səbətdə məhsul yoxdur</p>
                  </div>
              ) : 
              (
                  <div className="h-hcalc pt-[20px] pr-[20px] overflow-y-scroll scrollbar">
                      <div className="cart-items-wrap">
                          <div className="cart-items">
                              {cart.cartItems &&
                              cart.cartItems.map((cartItem) => (
                                  <div
                                    className="cart-item flex items-center py-[20px] first:pt-0 border-b border-b-solid border-b-bord1"
                                    key={cartItem.id}
                                  >
                                      <div className="img-wrap w-[67px] h-[101px] border border-solid border-grey6 mr-[20px]">
                                          <img
                                            src={cartItem.images[0]}
                                            alt={cartItem.title}
                                            className="w-[100%] h-[100%] object-cover"
                                          />
                                      </div>
                                      <div className="cart-item-info relative w-[70%] pr-[15px]">
                                          <h6 className="text-sm text-lblack font-semibold tracking-wider mb-[6px]">
                                            {cartItem.title}
                                          </h6>

                                          <p className="text-sm limited-text tracking-wider mb-[6px]">
                                            {cartItem.description}
                                          </p>

                                          <p className="text-sm text-red font-semibold mb-[10px]">
                                            {cartItem.price * cartItem.cartQuantity} TL
                                          </p>

                                          <div className="cart-item-quantity inline-flex rounded-[8px] h-[30px] border border-solid border-grey7">
                                            <button
                                              className="text-xl text-grey8 w-[32px] flex items-center justify-center"
                                              style={{lineHeight: "30px"}}
                                              onClick={() => handleDecreaseCart(cartItem)}
                                            >
                                              -
                                            </button>

                                            <div className="count border-l border-l-solid border-l-grey7 border-r border-r-solid border-r-grey7 bg-lwhite6 flex items-center justify-center px-[15px] text-sm">
                                              {cartItem.cartQuantity}
                                            </div>

                                            <button
                                              className="text-xl text-grey8 w-[32px] flex items-center justify-center"
                                              style={{lineHeight: "30px"}}
                                              onClick={() => handleAddToCart(cartItem)}
                                            >
                                              +
                                            </button>
                                          </div>

                                          <button
                                            className="absolute -right-[15px] top-0"
                                            onClick={() => handleRemoveFromCart(cartItem)}
                                          >
                                            <img src="/images/close.svg" alt="remove-item" />
                                          </button>
                                      </div>
                                  </div>
                              ))}
        
                          </div>
                      </div>

                      <div className="cart-summary shadow-shadow4 absolute bottom-[90px] left-0 py-[20px] px-[30px] w-[100%] bg-white z-20">
                          <div className="flex justify-between items-center mb-[20px]">
                              <span className="text-tx text-lg font-bold tracking-wider">
                                TOPLAM:
                              </span>
                              <span className="text-xl text-red font-bold">
                                {cart.cartTotalAmount} TL
                              </span>
                          </div>
                          <button className="rounded-[6px] bg-red text-lg font-bold tracking-wider text-white w-[100%] h-[50px] flex items-center justify-center"
                          onClick={() => handleClearCart()}>
                            SƏBƏTİ TƏMİZLƏ
                          </button>
                      </div>
                  </div>
              )}
          </div>
      </div>
  );
};

export default Cart;
