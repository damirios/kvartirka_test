const russianMonths = {
    Jan: "Янв",
    Feb: "Фев",
    Mar: "Март",
    Apr: "Апр",
    May: "Май",
    Jun: "Июнь",
    Jul: "Июль",
    Aug: "Авг",
    Sep: "Сен",
    Oct: "Окт",
    Nov: "Нояб",
    Dec: "Дек",
};
function getRussianMonth(month: string) {
    // @ts-ignore
    return russianMonths[month] || "";
}

export function getFormattedDateAndTime(dateTime: string) {
    const [year, month, day] = dateTime.split(" ")[0].split("-");
    const time = dateTime.split(" ")[1];

    return {
        date: `${day} ${getRussianMonth(month)} ${year}`,
        time,
    };
}
