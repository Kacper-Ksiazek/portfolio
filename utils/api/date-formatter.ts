// Tools
import moment from "moment";
/**
 * Converts **PostgreSQL** `DataTime` format into something like `"March 2022"`
 */
export const formatProjectDate = (date: Date): string => {
    return moment(date).format("MMMM YYYY");
};
