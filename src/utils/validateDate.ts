import {State} from "../Types.ts";

export default function validateDate(state:State) {
    const { day, month, year } = state;

    const dayNumber = parseInt(day, 10);
    const monthNumber = parseInt(month, 10);
    const yearNumber = parseInt(year, 10);

    if (monthNumber < 1 || monthNumber > 12) return false;

    const daysInMonth = new Date(yearNumber, monthNumber, 0).getDate();
    if (dayNumber < 1 || dayNumber > daysInMonth) return false;

    if (yearNumber < 1000 || yearNumber > 2024) return false;

    return true;
}