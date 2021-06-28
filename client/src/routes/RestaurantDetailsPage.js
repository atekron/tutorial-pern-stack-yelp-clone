import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import Header from "../components/Header";
import StarRating from "../components/StarRating";

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, setSelectedRestaurant]);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <Header text={selectedRestaurant.restaurant.name} />
          <div className="text-center">
            <StarRating
              rating={
                selectedRestaurant.reviews.reduce((acc, review) => {
                  return acc + review.rating;
                }, 0) / selectedRestaurant.reviews.length
              }
            />
          </div>

          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;
