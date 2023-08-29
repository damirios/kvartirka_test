export function getFormattedDate(date: Date) {
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    if (+day < 10) {
        day = "0" + day;
    }
    if (+month < 10) {
        month = "0" + month;
    }
    return `${year}-${month}-${day}`;
}

export function getTomorrowDate(today: string) {
    const [year, month, day] = today.split("-");
    const tomorrow = new Date(+year, +month - 1, +day + 1);
    return getFormattedDate(tomorrow);
}