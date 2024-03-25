import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";


const Carts = ({ handleOrder }) => {

    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch("recipe.json")
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <div className="grid lg:grid-cols-2 gap-7 justify-center">
                {
                    carts.map(cart => <Cart
                        key={cart.recipe_id}
                        cart={cart}
                        handleOrder={handleOrder}
                    ></Cart>)
                }
            </div>
        </div>
    );
};


Carts.propTypes = {
    handleOrder: PropTypes.func.isRequired
}
export default Carts;