import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import ReactStars from "react-rating-stars-component";
import { apiConnector } from "../../services/apiconnector";
import { ratingsEndpoints } from "../../services/apis";
import { FaStar } from "react-icons/fa";

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const { data } = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        );
        console.log("Logging response in rating:", data);

        if (data?.success) {
          setReviews(data?.data);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchAllReviews();
  }, []);

  return (
    <div className="text-white">
      <div className="h-[190px] max-w-maxContent">
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center space-y-2">
                {/* Profile Picture */}
                <img
                  src={
                    review?.user?.image
                      ? review?.user?.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                  }
                  alt="Profile Pic"
                  className="h-9 w-9 object-cover rounded-full"
                />

                {/* User Details */}
                <p className="font-semibold">
                  {review?.user?.firstName} {review?.user?.lastName}
                </p>
                <p className="text-sm text-gray-400">
                  {review?.course?.courseName}
                </p>

                {/* Review Text */}
                <p className="text-sm text-gray-300 text-center">
                  {review?.review}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <p className="text-yellow-400 font-bold">
                    {review?.rating.toFixed(1)}
                  </p>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;




