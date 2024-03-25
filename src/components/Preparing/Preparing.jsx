import PropTypes from "prop-types";
import { useState } from "react";


const Preparing = ({ carts, handleDelete }) => {

    const [cookingList, setCookingList] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    const handleCookingList = (cookingCart) => {

        handleDelete(cookingCart.recipe_id);

        const newCookingList = [...cookingList, cookingCart];
        setCookingList(newCookingList);

        const time =totalTime+cookingCart.preparing_time;
        setTotalTime(time);

        const calories =totalCalories+cookingCart.calories;
        setTotalCalories(calories);
    }


    return (
        <div className="md:w-1/3 mt-16">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-body items-center">
                        <div className="border-b w-3/4 flex justify-center pb-3">
                            <h2 className="card-title text-center">Want to cook: {carts.length}</h2>
                        </div>
                    </div>
                    <div className="flex justify-between pr-28">
                        <p className="pl-5">Name</p>
                        <p className="pl-10">Time</p>
                        <p className="pr-6">Calories</p>
                    </div>

                    <div className="flex items-center">
                        <div className="w-full">
                            {
                                carts.map((cart, index) =>
                                    <div className="flex items-center bg-gray-100 p-5 my-5 rounded-lg" key={index}>
                                        <p className="font-bold text-lg mr-4">{index + 1}</p>
                                        <div className="flex gap-10 items-center">
                                            <p>{cart.recipe_name}</p>
                                            <p>{cart.preparing_time} Min</p>
                                            <p>{cart.calories} Calories</p>
                                            <button onClick={() => handleCookingList(cart)} className="btn rounded-3xl bg-[#35f3a3]">Preparing</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="card-body items-center">
                        <div className="border-b w-3/4 flex justify-center pb-3">
                            <h2 className="card-title text-center">Currently cooking: {cookingList.length}</h2>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div><p>Name</p></div>
                        <div className="pl-14"><p>Time</p></div>
                        <div className="pr-16"><p>Calories</p></div>
                    </div>

                    <div className="flex items-center">
                        <div className="w-full">
                            {
                                cookingList.map((cart, index) =>
                                    <div className="flex items-center bg-gray-100 p-5 my-5 rounded-lg" key={index}>
                                        <span className="font-bold text-lg mr-4">{index + 1}</span>
                                        <div className="flex gap-16 justify-between items-center">
                                            <p>{cart.recipe_name}</p>
                                            <p>{cart.preparing_time} Minutes</p>
                                            <p>{cart.calories} Calories</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex justify-between pl-5">
                        <p className="text-lg font-semibold">Total Time = {totalTime} Minutes</p>
                        <p className="text-lg font-semibold">Total Calories = {totalCalories} Calories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Preparing.propTypes = {
    carts: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default Preparing;