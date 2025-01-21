// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

// import CourseCard from "./Course_Card";

// const CourseSlider = ({ Courses }) => {
//   return (
//     <>
//       {Courses?.length ? (
//         <Swiper
//           slidesPerView={1}
//           loop={true}
//           spaceBetween={200}
//           pagination={{ clickable: true }}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//           autoplay={{
//             delay: 1000,
//             disableOnInteraction: false,
//           }}
//           navigation={true}
//           breakpoints={{
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {Courses?.map((course, index) => (
//             <SwiperSlide key={index}>
//               <CourseCard course={course} Height={"h-[250px]"} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p>No Course Found</p>
//       )}
//     </>
//   );
// };

// export default CourseSlider;




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import Course_Card component
import Course_Card from "./Course_Card";

const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          pagination={{ clickable: true }}
          freeMode={true}
          breakpoints={{
            1024: {
              slidesPerView: 3, // Show 3 slides for devices with width 1024px and above
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  );
};

export default CourseSlider;


