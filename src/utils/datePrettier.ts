import moment from "moment";

export const datePrettier = (date: string): string => {
    return moment(date).format('LT')
}