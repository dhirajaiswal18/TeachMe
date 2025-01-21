// // import React from 'react'
// // import {toast} from "react-hot-toast"
// // import { apiConnector } from '../apiconnector';
// // import { catalogData } from '../apis';

// // export const getCatalogaPageData = async(categoryId) => {
// //   const toastId = toast.loading("Loading...");
// //   let result = [];
// //   try{
// //         const response = await apiConnector("POST", catalogData.CATALOGPAGEDATA_API, 
// //         {categoryId: categoryId,});

// //         if(!response?.data?.success)
// //             throw new Error("Could not Fetch Category page data");

// //          result = response?.data;

// //   }
// //   catch(error) {
// //     console.log("CATALOG PAGE DATA API ERROR....", error);
// //     toast.error(error.message);
// //     result = error.response?.data;
// //   }
// //   toast.dismiss(toastId);
// //   return result;
// // }






// import { toast } from 'react-hot-toast';
// import { apiConnector } from '../apiconnector'; // Ensure apiConnector is correctly imported
// import { catalogData } from '../apis'; // Ensure catalogData is correctly imported
// //import { getCatalogPageData } from '../services/operations/pageAndComponentData';


// /**
//  * Fetch catalog page data based on the category ID.
//  * 
//  * @param {string} categoryId - The ID of the category to fetch data for.
//  * @returns {Promise<object>} The result object containing the catalog page data or an error.
//  */
// export const getCatalogPageData = async (categoryId) => {
//   // Show a loading toast while the API call is in progress
//   const toastId = toast.loading('Loading catalog data...');
//   let result = [];

//   try {
//     // Make an API call to fetch catalog data
//     const response = await apiConnector('POST', catalogData.CATALOGPAGEDATA_API, {
//       categoryId,
//     });

//     // Check if the API response indicates success
//     if (!response?.data?.success) {
//       throw new Error(response?.data?.message || 'Failed to fetch catalog data');
//     }

//     // Assign the successful response data to the result
//     result = response.data;

//   } catch (error) {
//     console.error('Error fetching catalog page data:', error);

//     // Show an error toast based on the error message
//     const errorMessage = error?.response?.data?.message || error?.message || 'An unknown error occurred';
//     toast.error(errorMessage);

//     // Assign error details to the result object
//     result = {
//       success: false,
//       message: errorMessage,
//     };

//   } finally {
//     // Dismiss the loading toast once the API call is complete
//     toast.dismiss(toastId);
//   }

//   return result;
// };




import { toast } from 'react-hot-toast';
import { apiConnector } from '../apiconnector';
import { catalogData } from '../apis';

/**
 * Fetch catalog page data based on the category ID.
 *
 * @param {string} categoryId - The ID of the category to fetch data for.
 * @returns {Promise<object>} The result object containing the catalog page data or an error.
 */
export const getCatalogPageData = async (categoryId) => {
  // Validate the input
  if (!categoryId) {
    toast.error('Category ID is required to fetch catalog data');
    return { success: false, message: 'Category ID is required' };
  }

  // Show a loading toast while the API call is in progress
  const toastId = toast.loading('Loading catalog data...');
  let result = { success: false, message: 'No data fetched yet' };

  try {
    // Make an API call to fetch catalog data
    const response = await apiConnector('POST', catalogData.CATALOGPAGEDATA_API, { categoryId });

    // Check if the API response indicates success
    if (!response?.data?.success) {
      throw new Error(response?.data?.message || 'Failed to fetch catalog data');
    }

    // Assign the successful response data to the result
    result = response.data;
  } catch (error) {
    // Log the error with more context
    console.error('Error fetching catalog page data:', {
      message: error.message,
      stack: error.stack,
      response: error?.response?.data,
    });

    // Show an error toast based on the error message
    const errorMessage = error?.response?.data?.message || error?.message || 'An unknown error occurred';
    toast.error(errorMessage);

    // Assign error details to the result object
    result = {
      success: false,
      message: errorMessage,
    };
  } finally {
    // Dismiss the loading toast once the API call is complete
    toast.dismiss(toastId);
  }

  return result;
};
