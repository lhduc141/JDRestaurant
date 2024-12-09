import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMenuThunk } from "../../../service/userReducer/userThunk";

import menubg1 from "../../../assets/menu1.png";
import menubg2 from "../../../assets/menu2.png";
import menubg3 from "../../../assets/menu3.png";
import menubg4 from "../../../assets/menu4.png";
import menubg5 from "../../../assets/menu5.png";
import FoodList from "./FoodList";

const UserMenu = () => {
  const dispatch = useDispatch();

  // Accessing the 'menu' from the Redux state
  const { menu } = useSelector((state) => state.userReducer);

  // State hooks for each category
  const [appetizers, setAppetizers] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [lightMeals, setLightMeals] = useState([]);
  const [mainDishes, setMainDishes] = useState([]);

  // Fetch menu data from Redux store
  useEffect(() => {
    dispatch(getMenuThunk());
  }, [dispatch]);

  // Update state once the menu data is loaded
  useEffect(() => {
    if (menu && menu.length > 0) {
      const appetizersData = menu.find(
        (item) => item.type_of_food === "Appetizers"
      );
      const dessertsData = menu.find(
        (item) => item.type_of_food === "Desserts"
      );
      const drinksData = menu.find((item) => item.type_of_food === "Drinks");
      const lightMealsData = menu.find(
        (item) => item.type_of_food === "Light Meals"
      );
      const mainDishesData = menu.find(
        (item) => item.type_of_food === "Main Dishes"
      );

      // Set the states accordingly
      setAppetizers(appetizersData ? appetizersData.items : []);
      setDesserts(dessertsData ? dessertsData.items : []);
      setDrinks(drinksData ? drinksData.items : []);
      setLightMeals(lightMealsData ? lightMealsData.items : []);
      setMainDishes(mainDishesData ? mainDishesData.items : []);
    }
  }, [menu]);

  return (
    <div className="w-full h-full bg-white space-y-24 p-12">
      {/* Appetizers Section */}
      <section className="flex justify-between space-x-4">
        <div className="flex space-x-10 max-w-[70%]">
          <img src={menubg1} alt="Appetizers" />
          <FoodList list={appetizers} />
        </div>
        <div className="w-1/4 h-full bg-black">check</div>
      </section>
    </div>
  );
};

export default UserMenu;
