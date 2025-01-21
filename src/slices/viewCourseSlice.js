import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  courseSectionData: [],
  courseEntireData: [],
  completedLectures: [],
  totalNoOfLectures: 0,
}

const viewCourseSlice = createSlice({
  name: "viewCourse",
  initialState: initialState,
  reducers: {
    setCourseSectionData: (state, action) => {
      state.courseSectionData = action.payload
    },
    setEntireCourseData: (state, action) => {
      state.courseEntireData = action.payload
      console.log("Data Set")
    },
    setTotalNoOfLectures: (state, action) => {
      state.totalNoOfLectures = action.payload
    },
    setCompletedLectures: (state, action) => {
      state.completedLectures = action.payload
    },
    updateCompletedLectures: (state, action) => {
      state.completedLectures = [...state.completedLectures, action.payload]
    },
  },
})

export const {
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
  setCompletedLectures,
  updateCompletedLectures,
} = viewCourseSlice.actions

export default viewCourseSlice.reducer















// Initial state for the slice
// const initialState = {
//   courseSectionData: [], // Holds data for the course sections
//   courseEntireData: [], // Holds data for the entire course
//   completedLectures: [], // Tracks completed lectures
//   totalNoOfLectures: 0,  // Stores the total number of lectures
// };

// // Create the slice
// const viewCourseSlice = createSlice({
//   name: "viewCourse",
//   initialState,
//   reducers: {
//     // Sets the course section data
//     setCourseSectionData: (state, action) => {
//       state.courseSectionData = action.payload;
//     },
//     // Sets the entire course data
//     setEntireCourseData: (state, action) => {
//       state.courseEntireData = action.payload;
//     },
//     // Sets the total number of lectures
//     setTotalNoOfLectures: (state, action) => {
//       state.totalNoOfLectures = action.payload;
//     },
//     // Sets the completed lectures
//     setCompletedLectures: (state, action) => {
//       state.completedLectures = action.payload;
//     },
//     // Updates completed lectures by adding a new lecture
//     updateCompletedLectures: (state, action) => {
//       state.completedLectures = [...state.completedLectures, action.payload];
//     },
//   },
// });

// // Export actions for use in other components
// export const {
//   setCourseSectionData,
//   setEntireCourseData,
//   setTotalNoOfLectures,
//   setCompletedLectures,
//   updateCompletedLectures,
// } = viewCourseSlice.actions;

// // Export the reducer as the default export
// export default viewCourseSlice.reducer;








// import { createSlice } from "@reduxjs/toolkit";

// // Initial state for the slice
// const initialState = {
//   courseSectionData: [], // Holds data for the course sections
//   courseEntireData: [], // Holds data for the entire course
//   completedLectures: [], // Tracks completed lectures
//   totalNoOfLectures: 0,  // Stores the total number of lectures
// };

// // Create the slice
// const viewCourseSlice = createSlice({
//   name: "viewCourse",
//   initialState,
//   reducers: {
//     // Sets the course section data
//     setCourseSectionData: (state, action) => {
//       state.courseSectionData = action.payload;
//     },
//     // Sets the entire course data
//     setEntireCourseData: (state, action) => {
//       state.courseEntireData = action.payload;
//     },
//     // Sets the total number of lectures
//     setTotalNoOfLectures: (state, action) => {
//       state.totalNoOfLectures = action.payload;
//     },
//     // Sets the completed lectures
//     setCompletedLectures: (state, action) => {
//       state.completedLectures = action.payload;
//     },
//     // Updates completed lectures by adding a new lecture
//     updateCompletedLectures: (state, action) => {
//       state.completedLectures = [...state.completedLectures, action.payload];
//     },
//   },
// });

// // Export actions for use in other components
// export const {
//   setCourseSectionData,
//   setEntireCourseData,
//   setTotalNoOfLectures,
//   setCompletedLectures,
//   updateCompletedLectures,
// } = viewCourseSlice.actions;

// // Export the reducer as the default export
// export default viewCourseSlice.reducer;


