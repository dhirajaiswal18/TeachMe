// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   step: 1,
//   course: null,
//   editCourse: false,
//   paymentLoading: false,
// }

// const courseSlice = createSlice({
//   name: "course",
//   initialState,
//   reducers: {
//     setStep: (state, action) => {
//       state.step = action.payload
//     },
//     setCourse: (state, action) => {
//       state.course = action.payload
//     },
//     setEditCourse: (state, action) => {
//       state.editCourse = action.payload
//     },
//     setPaymentLoading: (state, action) => {
//       state.paymentLoading = action.payload
//     },
//     resetCourseState: (state) => {
//       state.step = 1
//       state.course = null
//       state.editCourse = false
//     },
//   },
// })

// export const {
//   setStep,
//   setCourse,
//   setEditCourse,
//   setPaymentLoading,
//   resetCourseState,
// } = courseSlice.actions

// export default courseSlice.reducer



import { createSlice } from "@reduxjs/toolkit";

// Initial state for the course slice
const initialState = {
  step: 1, // Tracks the current step in the course creation process
  course: null, // Holds the course data
  editCourse: false, // Flag to determine if the course is being edited
  paymentLoading: false, // Flag to track payment-related loading state
};

// Create a slice for course-related state
const courseSlice = createSlice({
  name: "course", // Name of the slice
  initialState,
  reducers: {
    // Sets the current step in the course creation/editing process
    setStep: (state, action) => {
      state.step = action.payload;
    },

    // Updates the course data
    setCourse: (state, action) => {
      state.course = action.payload;
    },

    // Toggles edit mode for the course
    setEditCourse: (state, action) => {
      state.editCourse = action.payload;
    },

    // Updates the payment loading state
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload;
    },

    // Resets the course state to its initial values
    resetCourseState: (state) => {
      return { ...initialState }; // Clean reset using the initial state
    },
  },
});

// Export actions to use in components or thunks
export const {
  setStep,
  setCourse,
  setEditCourse,
  setPaymentLoading,
  resetCourseState,
} = courseSlice.actions;

// Export the reducer to include in the store
export default courseSlice.reducer;
