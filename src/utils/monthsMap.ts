export function getMonth(monthNumber: string) {
    const months: {[x in string]: string} = {
        "01": "янв", "02": "февр", "03": "март", "04": "апр", "05": "май", "06": "июнь",
        "07": "июль", "08": "авг", "09": "сент", "10": "окт", "11": "нояб", "12": "дек"
    }

    return months[monthNumber];
}