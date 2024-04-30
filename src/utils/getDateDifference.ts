export default function getDateDifference(day: number, month: number, year: number){
    const inputDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - inputDate.getFullYear();
    let months = currentDate.getMonth() - inputDate.getMonth();
    let days = currentDate.getDate() - inputDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return {
        years: years.toString(),
        months: months.toString(),
        days: days.toString()
    };
};