import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    // const dispatch = useDispatch();
    const globalstate = useSelector((state) => state.cartState);
    console.log(globalstate);
    return (
        <div className="max-w-[1200px] mx-auto flex justify-center mt-8">
            <div className="flex">title</div>
            <div className="flex">price</div>
            <div className="div">quantity</div>
            <div className="flex">subtotal</div>
        
            {globalstate.map((product) => (
                <div className="max-w-[1200px] mx-auto flex justify-center mt-8" >
                    <div className="flex">key={product.id}</div>
                    <div className="flex">{product.price}</div>
                    <div className="flex">{product.quantity}</div>
                    <div className="flex">subtotal</div>
                </div>
            ))}
        </div>
    );
}

export default Cart;
