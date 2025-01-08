import { format } from "date-fns";
export const formatDate = (date) => {
  const formattedDate = format(`${date}`, "dd-MM-yyyy");

  return formattedDate;
};
