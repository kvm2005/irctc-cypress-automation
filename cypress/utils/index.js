const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

export function formatDate(inputDate) {
    console.log("inputDate", inputDate)
    return dayjs(inputDate, 'DD/MM/YYYY').format('ddd, DD MMM')
}

export const tatkalOpenTimings = {
    "2A": "9:25",
    "3A": "9:25",
    "3E": "9:25",
    "1A": "9:25",
    "CC": "9:25",
    "EC": "9:25",
    "2S": "9:25",
    "SL": "9:25",
}

export const hasTatkalAlreadyOpened = (TRAIN_COACH) => {
    const openTime = tatkalOpenTimings[TRAIN_COACH]
    const targetTime = dayjs().set('hour', openTime.split(':')[0]).set('minute', openTime.split(':')[1]).set('second', 0)
    const currentTime = dayjs()
    return currentTime.isAfter(targetTime);
}

export function tatkalOpenTimeForToday(TRAIN_COACH) {
    const openTime = tatkalOpenTimings[TRAIN_COACH]
    return `${openTime}`
}
