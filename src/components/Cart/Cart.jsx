import PropTypes from 'prop-types';
import { LuClock3 } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";

const Cart = ({ cart, handleOrder }) => {

    const { recipe_image, short_description, recipe_name, ingredients, preparing_time, calories } = cart;

    return (
        <div className="mt-16">
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt={`image`} className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="border-b pb-3">{short_description}</p>
                    <div>
                        <p className="card-title mb-4">Ingredients: {ingredients.length}</p>
                        {
                            ingredients.map((ingredient, index) => <li className="ml-4 mt-1 text-[#150B2BB3]" key={index}>{ingredient}</li>)
                        }
                    </div>
                    <div className="border-t mt-4 flex justify-between">
                        <div className="mt-4">
                            <p className="flex items-center gap-2"><LuClock3 /> {preparing_time} minutes</p>
                        </div>
                        <div className="mt-4">
                            <p className="flex items-center gap-1"><AiOutlineFire />{calories} Calories</p>
                        </div>
                    </div>
                    <div onClick={() => handleOrder(cart)} className="card-actions mt-5">
                        <button className="btn text-lg px-5 bg-[#35f3a3] rounded-3xl">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    handleOrder: PropTypes.func.isRequired
}

export default Cart;