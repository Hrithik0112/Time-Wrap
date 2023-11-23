import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  const year = dayjs().year();

  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  let currentMonthCounter = 0 - firstDayOfTheMonth;
  const matrixOfDays = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCounter++;
      return dayjs(new Date(year, month, currentMonthCounter));
    });
  });
  return matrixOfDays;
}
