// import { useEffect, useState } from "react"
// import { BsChevronDown } from "react-icons/bs"
// import { IoIosArrowBack } from "react-icons/io"
// import { useSelector } from "react-redux"
// import { useLocation, useNavigate, useParams } from "react-router-dom"

// import IconBtn from "../../common/IconBtn"

// export default function VideoDetailsSidebar({ setReviewModal }) {
//   const [activeStatus, setActiveStatus] = useState("")
//   const [videoBarActive, setVideoBarActive] = useState("")
//   const navigate = useNavigate()
//   const location = useLocation()
//   const { sectionId, subSectionId } = useParams()
//   const {
//     courseSectionData,
//     courseEntireData,
//     totalNoOfLectures,
//     completedLectures,
//   } = useSelector((state) => state.viewCourse)

//   useEffect(() => {
//     ;(() => {
//       if (!courseSectionData.length) return
//       const currentSectionIndx = courseSectionData.findIndex(
//         (data) => data._id === sectionId
//       )
//       const currentSubSectionIndx = courseSectionData?.[
//         currentSectionIndx
//       ]?.subSection.findIndex((data) => data._id === subSectionId)
//       const activeSubSectionId =
//         courseSectionData[currentSectionIndx]?.subSection?.[
//           currentSubSectionIndx
//         ]?._id
//       setActiveStatus(courseSectionData?.[currentSectionIndx]?._id)
//       setVideoBarActive(activeSubSectionId)
//     })()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [courseSectionData, courseEntireData, location.pathname])

//   return (
//     <>
//       <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
//         <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
//           <div className="flex w-full items-center justify-between ">
//             <div
//               onClick={() => {
//                 navigate(`/dashboard/enrolled-courses`)
//               }}
//               className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
//               title="back"
//             >
//               <IoIosArrowBack size={30} />
//             </div>
//             <IconBtn
//               text="Add Review"
//               customClasses="ml-auto"
//               onclick={() => setReviewModal(true)}
//             />
//           </div>
//           <div className="flex flex-col">
//             <p>{courseEntireData?.courseName}</p>
//             <p className="text-sm font-semibold text-richblack-500">
//               {completedLectures?.length} / {totalNoOfLectures}
//             </p>
//           </div>
//         </div>

//         <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
//           {courseSectionData.map((course, index) => (
//             <div
//               className="mt-2 cursor-pointer text-sm text-richblack-5"
//               onClick={() => setActiveStatus(course?._id)}
//               key={index}
//             >
//               {/* Section */}
//               <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
//                 <div className="w-[70%] font-semibold">
//                   {course?.sectionName}
//                 </div>
//                 <div className="flex items-center gap-3">
//                   {/* <span className="text-[12px] font-medium">
//                     Lession {course?.subSection.length}
//                   </span> */}
//                   <span
//                     className={`${
//                       activeStatus === course?.sectionName
//                         ? "rotate-0"
//                         : "rotate-180"
//                     } transition-all duration-500`}
//                   >
//                     <BsChevronDown />
//                   </span>
//                 </div>
//               </div>

//               {/* Sub Sections */}
//               {activeStatus === course?._id && (
//                 <div className="transition-[height] duration-500 ease-in-out">
//                   {course.subSection.map((topic, i) => (
//                     <div
//                       className={`flex gap-3  px-5 py-2 ${
//                         videoBarActive === topic._id
//                           ? "bg-yellow-200 font-semibold text-richblack-800"
//                           : "hover:bg-richblack-900"
//                       } `}
//                       key={i}
//                       onClick={() => {
//                         navigate(
//                           `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
//                         )
//                         setVideoBarActive(topic._id)
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         checked={completedLectures.includes(topic?._id)}
//                         onChange={() => {}}
//                       />
//                       {topic.title}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }










// import { useEffect, useState } from "react";
// import { BsChevronDown } from "react-icons/bs";
// import { IoIosArrowBack } from "react-icons/io";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

// import IconBtn from "../../common/IconBtn";

// export default function VideoDetailsSidebar({ setReviewModal }) {
//   const [activeStatus, setActiveStatus] = useState("");
//   const [videoBarActive, setVideoBarActive] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { sectionId, subSectionId } = useParams();

//   const {
//     courseSectionData = [], // Default to an empty array if undefined
//     courseEntireData = {}, // Default to an empty object if undefined
//     totalNoOfLectures = 0, // Default to 0 if undefined
//     completedLectures = [], // Default to an empty array if undefined
//   } = useSelector((state) => state.viewCourse || {}); // Safeguard against undefined state

//   useEffect(() => {
//     // Ensure the courseSectionData exists before processing
//     if (!courseSectionData.length) return;

//     const currentSectionIndex = courseSectionData.findIndex(
//       (data) => data._id === sectionId
//     );
//     const currentSubSectionIndex = courseSectionData?.[currentSectionIndex]?.subSection.findIndex(
//       (data) => data._id === subSectionId
//     );
//     const activeSubSectionId =
//       courseSectionData[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;

//     setActiveStatus(courseSectionData?.[currentSectionIndex]?._id || "");
//     setVideoBarActive(activeSubSectionId || "");
//   }, [courseSectionData, sectionId, subSectionId, location.pathname]);

//   return (
//     <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
//       {/* Header */}
//       <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
//         <div className="flex w-full items-center justify-between">
//           {/* Back Button */}
//           <div
//             onClick={() => navigate(`/dashboard/enrolled-courses`)}
//             className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
//             title="back"
//           >
//             <IoIosArrowBack size={30} />
//           </div>
//           {/* Add Review Button */}
//           <IconBtn
//             text="Add Review"
//             customClasses="ml-auto"
//             onclick={() => setReviewModal(true)}
//           />
//         </div>
//         {/* Course Info */}
//         <div className="flex flex-col">
//           <p>{courseEntireData?.courseName || "Course Name"}</p>
//           <p className="text-sm font-semibold text-richblack-500">
//             {completedLectures?.length} / {totalNoOfLectures}
//           </p>
//         </div>
//       </div>

//       {/* Sections and Subsections */}
//       <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
//         {courseSectionData.map((course, index) => (
//           <div
//             className="mt-2 cursor-pointer text-sm text-richblack-5"
//             key={index}
//             onClick={() => setActiveStatus(course?._id)}
//           >
//             {/* Section */}
//             <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
//               <div className="w-[70%] font-semibold">{course?.sectionName}</div>
//               <div className="flex items-center gap-3">
//                 <span
//                   className={`${
//                     activeStatus === course?._id ? "rotate-0" : "rotate-180"
//                   } transition-all duration-500`}
//                 >
//                   <BsChevronDown />
//                 </span>
//               </div>
//             </div>

//             {/* Subsections */}
//             {activeStatus === course?._id && (
//               <div className="transition-[height] duration-500 ease-in-out">
//                 {course?.subSection?.map((topic, i) => (
//                   <div
//                     className={`flex gap-3 px-5 py-2 ${
//                       videoBarActive === topic._id
//                         ? "bg-yellow-200 font-semibold text-richblack-800"
//                         : "hover:bg-richblack-900"
//                     }`}
//                     key={i}
//                     onClick={() => {
//                       navigate(
//                         `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
//                       );
//                       setVideoBarActive(topic._id);
//                     }}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={completedLectures.includes(topic?._id)}
//                       readOnly
//                     />
//                     {topic?.title || "Untitled"}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react"
// import { BsChevronDown } from "react-icons/bs"
// import { IoIosArrowBack } from "react-icons/io"
// import { useSelector } from "react-redux"
// import { useLocation, useNavigate, useParams } from "react-router-dom"

// import IconBtn from "../../common/IconBtn"

// export default function VideoDetailsSidebar({ setReviewModal }) {
//   const [activeStatus, setActiveStatus] = useState("")
//   const [videoBarActive, setVideoBarActive] = useState("")
//   const navigate = useNavigate()
//   const location = useLocation()
//   const { sectionId, subSectionId } = useParams()
//   const {
//     courseSectionData,
//     courseEntireData,
//     totalNoOfLectures,
//     completedLectures,
//   } = useSelector((state) => state.viewCourse)

//   useEffect(() => {
//     ;(() => {
//       if (!courseSectionData.length) return
//       const currentSectionIndx = courseSectionData.findIndex(
//         (data) => data._id === sectionId
//       )
//       const currentSubSectionIndx = courseSectionData?.[
//         currentSectionIndx
//       ]?.subSection.findIndex((data) => data._id === subSectionId)
//       const activeSubSectionId =
//         courseSectionData[currentSectionIndx]?.subSection?.[
//           currentSubSectionIndx
//         ]?._id
//       setActiveStatus(courseSectionData?.[currentSectionIndx]?._id)
//       setVideoBarActive(activeSubSectionId)
//     })()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [courseSectionData, courseEntireData, location.pathname])

//   return (
//     <>
//       <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
//         <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
//           <div className="flex w-full items-center justify-between ">
//             <div
//               onClick={() => {
//                 navigate(`/dashboard/enrolled-courses`)
//               }}
//               className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
//               title="back"
//             >
//               <IoIosArrowBack size={30} />
//             </div>
//             <IconBtn
//               text="Add Review"
//               customClasses="ml-auto"
//               onclick={() => setReviewModal(true)}
//             />
//           </div>
//           <div className="flex flex-col">
//             <p>{courseEntireData?.courseName}</p>
//             <p className="text-sm font-semibold text-richblack-500">
//               {completedLectures?.length} / {totalNoOfLectures}
//             </p>
//           </div>
//         </div>

//         <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
//           {courseSectionData.map((course, index) => (
//             <div
//               className="mt-2 cursor-pointer text-sm text-richblack-5"
//               onClick={() => setActiveStatus(course?._id)}
//               key={index}
//             >
//               {/* Section */}
//               <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
//                 <div className="w-[70%] font-semibold">
//                   {course?.sectionName}
//                 </div>
//                 <div className="flex items-center gap-3">
//                   {/* <span className="text-[12px] font-medium">
//                     Lession {course?.subSection.length}
//                   </span> */}
//                   <span
//                     className={`${
//                       activeStatus === course?.sectionName
//                         ? "rotate-0"
//                         : "rotate-180"
//                     } transition-all duration-500`}
//                   >
//                     <BsChevronDown />
//                   </span>
//                 </div>
//               </div>

//               {/* Sub Sections */}
//               {activeStatus === course?._id && (
//                 <div className="transition-[height] duration-500 ease-in-out">
//                   {course.subSection.map((topic, i) => (
//                     <div
//                       className={`flex gap-3  px-5 py-2 ${
//                         videoBarActive === topic._id
//                           ? "bg-yellow-200 font-semibold text-richblack-800"
//                           : "hover:bg-richblack-900"
//                       } `}
//                       key={i}
//                       onClick={() => {
//                         navigate(
//                           `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
//                         )
//                         setVideoBarActive(topic._id)
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         checked={completedLectures.includes(topic?._id)}
//                         onChange={() => {}}
//                       />
//                       {topic.title}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }















// import { useEffect, useState } from "react";
// import { BsChevronDown } from "react-icons/bs";
// import { IoIosArrowBack } from "react-icons/io";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

// import IconBtn from "../../common/IconBtn";

// export default function VideoDetailsSidebar({ setReviewModal }) {
//   const [activeStatus, setActiveStatus] = useState("");
//   const [videoBarActive, setVideoBarActive] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { sectionId, subSectionId } = useParams();

//   const {
//     courseSectionData = [],
//     courseEntireData = {},
//     totalNoOfLectures = 0,
//     completedLectures = [],
//   } = useSelector((state) => state.viewCourse || {});

//   useEffect(() => {
//     if (!courseSectionData.length) return;

//     const currentSectionIndex = courseSectionData.findIndex(
//       (data) => data._id === sectionId
//     );
//     const currentSubSectionIndex =
//       courseSectionData?.[currentSectionIndex]?.subSection.findIndex(
//         (data) => data._id === subSectionId
//       );

//     const activeSubSectionId =
//       courseSectionData?.[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;

//     setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
//     setVideoBarActive(activeSubSectionId);
//   }, [courseSectionData, sectionId, subSectionId]);

//   return (
//     <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
//       {/* Header */}
//       <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
//         <div className="flex w-full items-center justify-between">
//           <button
//             onClick={() => navigate("/dashboard/enrolled-courses")}
//             className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
//             title="Go back"
//           >
//             <IoIosArrowBack size={30} />
//           </button>
//           <IconBtn
//             text="Add Review"
//             customClasses="ml-auto"
//             onClick={() => setReviewModal(true)}
//           />
//         </div>
//         <div>
//           <p>{courseEntireData?.courseName || "Loading course name..."}</p>
//           <p className="text-sm font-semibold text-richblack-500">
//             {completedLectures.length} / {totalNoOfLectures}
//           </p>
//         </div>
//       </div>

//       {/* Sections */}
//       <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
//         {courseSectionData.map((course, index) => (
//           <div
//             key={course?._id || index}
//             className="mt-2 cursor-pointer text-sm text-richblack-5"
//             onClick={() => setActiveStatus(course?._id)}
//           >
//             {/* Section Header */}
//             <div className="flex justify-between bg-richblack-600 px-5 py-4">
//               <div className="w-[70%] font-semibold">{course?.sectionName}</div>
//               <div className="flex items-center gap-3">
//                 <span
//                   className={`transition-transform duration-500 ${
//                     activeStatus === course?._id ? "rotate-0" : "rotate-180"
//                   }`}
//                 >
//                   <BsChevronDown />
//                 </span>
//               </div>
//             </div>

//             {/* Subsections */}
//             {activeStatus === course?._id && (
//               <div className="transition-[height] duration-500 ease-in-out">
//                 {course?.subSection.map((topic, i) => (
//                   <div
//                     key={topic?._id || i}
//                     className={`flex gap-3 px-5 py-2 ${
//                       videoBarActive === topic._id
//                         ? "bg-yellow-200 font-semibold text-richblack-800"
//                         : "hover:bg-richblack-900"
//                     }`}
//                     onClick={() => {
//                       navigate(
//                         `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
//                       );
//                       setVideoBarActive(topic._id);
//                     }}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={completedLectures.includes(topic?._id)}
//                       readOnly
//                     />
//                     {topic?.title || "Untitled"}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { createSelector } from 'reselect';

// Memoize the selector for courseSectionData
const selectCourseSectionData = createSelector(
  (state) => state.viewCourse?.courseSectionData,
  (courseSectionData) => courseSectionData || []
);

export default function VideoDetailsSidebar({ setReviewModal }) {
  const [activeStatus, setActiveStatus] = useState("");   
  const [videoBarActive, setVideoBarActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();

  // Use memoized selector
  const courseSectionData = useSelector(selectCourseSectionData);
  const {
    courseEntireData = {},
    totalNoOfLectures = 0,
    completedLectures = [],
  } = useSelector((state) => state.viewCourse || {});

  useEffect(() => {
    if (!courseSectionData.length) return;

    const currentSectionIndex = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );
    const currentSubSectionIndex =
      courseSectionData?.[currentSectionIndex]?.subSection.findIndex(
        (data) => data._id === subSectionId
      );

    const activeSubSectionId =
      courseSectionData?.[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;

    setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
    setVideoBarActive(activeSubSectionId);
  }, [courseSectionData, sectionId, subSectionId]);

  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
      {/* Header */}
      <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
        <div className="flex w-full items-center justify-between">
          <button
            onClick={() => navigate("/dashboard/enrolled-courses")}
            className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
            title="Go back"
          >
            <IoIosArrowBack size={30} />
          </button>
          <IconBtn
            text="Add Review"
            disabled={false}
            customClasses="ml-auto"
            onClick={() => {console.log("Review triggered");setReviewModal(true)}}
          />
        </div>
        <div>
          <p>{courseEntireData?.courseName || "Loading course name..."}</p>
          <p className="text-sm font-semibold text-richblack-500">
            {completedLectures.length} / {totalNoOfLectures}
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
        {courseSectionData.map((course, index) => (
          <div
            key={course?._id || index}
            className="mt-2 cursor-pointer text-sm text-richblack-5"
            onClick={() => setActiveStatus(course?._id)}
          >
            {/* Section Header */}
            <div className="flex justify-between bg-richblack-600 px-5 py-4">
              <div className="w-[70%] font-semibold">{course?.sectionName}</div>
              <div className="flex items-center gap-3">
                <span
                  className={`transition-transform duration-500 ${
                    activeStatus === course?._id ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <BsChevronDown />
                </span>
              </div>
            </div>

            {/* Subsections */}
            {activeStatus === course?._id && (
              <div className="transition-[height] duration-500 ease-in-out">
                {course?.subSection.map((topic, i) => (
                  <div
                    key={topic?._id || i}
                    className={`flex gap-3 px-5 py-2 ${
                      videoBarActive === topic._id
                        ? "bg-yellow-200 font-semibold text-richblack-800"
                        : "hover:bg-richblack-900"
                    }`}
                    onClick={() => {
                      navigate(
                        `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                      );
                      setVideoBarActive(topic._id);
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={completedLectures.includes(topic?._id)}
                      readOnly
                    />
                    {topic?.title || "Untitled"}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
