// Domingo = 0
// Lunes = 1
// Martes = 2
// Miercoles = 3
// Jueves = 4
// Viernes = 5
// Sábado = 6

function countHours(year: number, holidays: string[]) {
  return holidays.reduce((sum, holiday) => {
    const date = new Date(`${holiday}/${year}`);
    const weekDay = date.getDay();
    const isBetweenMondayAndFriday = weekDay >= 1 && weekDay <= 5;
    return sum + (isBetweenMondayAndFriday ? 2 : 0);
  }, 0);
}

console.log(countHours(2023, ["01/06", "04/01", "12/25"]));
