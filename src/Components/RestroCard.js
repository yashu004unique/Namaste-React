import { CDN_URL } from "../utils/constant";
const RestroCard = (props) => {
  //   const { img, name, rating, cuisines, location } = props;
  const { data } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } = data?.card;
  return (
    <div className="restro-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestroCard;
