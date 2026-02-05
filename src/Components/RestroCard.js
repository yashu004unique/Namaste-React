import { CDN_URL } from "../utils/constant";
const RestroCard = (props) => {
  //   const { img, name, rating, cuisines, location } = props;
  const { data } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } = data?.card;
  //  const { name, avgRating, cuisines, areaName } = data.card.card.info;
  return (
    <div className="restro-card w-3xs h-[370] hover:border-2 rounded-lg p-2 bg-gray-100">
      <img
        className="h-48 w-full mb-2 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <h4 className="font-medium">{avgRating}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestroCard;
