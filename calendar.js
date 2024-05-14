//     !
let today = new Date();
let dayInt = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let calendarBody = document.getElementById("daysCalendar");

let months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];
showCalendar(month, year);

function showDate(e) {
  let showYear = e.getAttribute("data-year");
  let showMonth = e.getAttribute("data-month");
  let showDay = e.getAttribute("data-day");
  document.getElementById("select").innerHTML =
    showDay + " " + months[showMonth] + " " + showYear;
}

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  calendarBody.innerHTML = "";
  let totalDays = daysInMonth(month, year);
  blankDates(firstDay === 0 ? 6 : firstDay - 1);
  for (let day = 1; day <= totalDays; day++) {
    let cell = document.createElement("li");
    let cellText = document.createTextNode(day);
    if (
      dayInt === day &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add("active");
    }
    cell.setAttribute("data-day", day);
    cell.setAttribute("data-month", month);
    cell.setAttribute("data-year", year);
    cell.classList.add("singleDay");
    cell.appendChild(cellText);
    
    calendarBody.appendChild(cell);
  }
  document.getElementById("month").innerHTML = months[month];
  document.getElementById("year").innerHTML = year;
}

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function blankDates(count) {
  for (let x = 0; x < count; x++) {
    let cell = document.createElement("li");
    let cellText = document.createTextNode("");
    cell.appendChild(cellText);
    cell.classList.add("empty");
    calendarBody.appendChild(cell);
  }
}
