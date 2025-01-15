import { format } from "date-fns";

export const formatDate = (date) => {
  try {
    // Validate the `date` input
    const parsedDate = new Date(date);

    // Check if the date is valid
    if (isNaN(parsedDate.getTime())) {
      return "Invalid Date"; // Fallback for invalid date
    }

    // Format the valid date
    return format(parsedDate, "dd-MM-yyyy");
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date"; // Fallback for unexpected errors
  }
};
