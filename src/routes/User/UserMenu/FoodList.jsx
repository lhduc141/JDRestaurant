import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Typography } from "antd";

const FoodList = ({ list }) => {
  if (!list || list.length === 0) {
    return null; // Return null if the list is empty or undefined
  }

  return (
    <div>
      <h1 className="font-rufina text-[40px] mb-8 text-[#003459]">
        {list[0].type_of_food}
      </h1>
      <div className="space-y-8">
        {list.map((item) => (
          <div className="flex justify-between space-x-4" key={item.itemID}>
            <div>
              <Typography.Text className="text-[#003459] text-[24px] font-rufina">
                {item.itemName}
              </Typography.Text>
              <br />
              <Typography.Text className="text-[16px] text-[#003459]">
                {item.descriptions}
              </Typography.Text>
              <br />
              <Typography.Text className="text-base text-[#72889F]">
                {item.preparation_time} min
              </Typography.Text>
            </div>

            <div className="flex flex-col justify-start space-y-4">
              <Typography.Text className="text-2xl text-[#F8AFA6] font-bold">
                {item.price} $
              </Typography.Text>
              <div>
                <button className="px-8 py-4 bg-[#F8AFA6] text-white rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes Validation
FoodList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      itemID: PropTypes.string.isRequired,
      itemName: PropTypes.string.isRequired,
      descriptions: PropTypes.string,
      preparation_time: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      type_of_food: PropTypes.string.isRequired,
    })
  ).isRequired, // list should be an array of objects with the specified shape
};

export default FoodList;
