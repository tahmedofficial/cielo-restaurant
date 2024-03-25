import { useState } from "react";
import Carts from "../Carts/Carts";
import Preparing from "../Preparing/Preparing";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {

    const notify = () => toast("Already exist");
    const [carts, setCarts] = useState([]);

    const handleOrder = (cart) => {

        const isExist = carts.find(item => item.recipe_id == cart.recipe_id);

        if (!isExist) {
            const newCarts = [...carts, cart];
            setCarts(newCarts);
        }
        else {
            notify();
        }

    }

    const handleDelete = (id) => {
        const newCart = carts.filter(item => item.recipe_id !== id);
        setCarts(newCart);
    }

    return (
        <main className="md:w-5/6 mx-auto px-3">
            <div className="flex justify-center">
                <div className="w-4/6 text-center">
                    <h1 className="md:text-5xl text-4xl font-semibold mt-20">Our Recipes</h1>
                    <p className="text-lg mt-8">Explore a symphony of flavors at our restaurant, where each dish tells a story of culinary craftsmanship and innovation. Our recipes, meticulously curated by our talented chefs, blend traditional techniques with contemporary twists, resulting in a menu that delights the senses and sparks the imagination.</p>
                </div>
            </div>
            <div className="md:flex gap-7">
                <Carts handleOrder={handleOrder}></Carts>
                <ToastContainer />
                <Preparing carts={carts} handleDelete={handleDelete}></Preparing>
            </div>
        </main>
    );
};

export default Main;