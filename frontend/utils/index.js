import { format } from "date-fns";

export const formatDate = (date) => {
  // Ensure `date` is a valid Date object
  const formattedDate = format(new Date(date), "dd-MM-yyyy");

  return formattedDate;
};
