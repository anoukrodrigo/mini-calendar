const month = document.getElementById("month");
const day = document.getElementById("day");
const dayNum = document.getElementById("dayNum");
const year = document.getElementById("year");
const time = document.getElementById("time");


function update() {
const date = new Date();
const mon = date.getMonth();

month.innerText = date.toLocaleString("en", {
	month:"long"
});

day.innerText = date.toLocaleString("en", {
	weekday:"long"
});

dayNum.innerText = date.getDate();

year.innerText = date.getFullYear();

time.innerText = date.toLocaleTimeString("en");

}

update();

setInterval(update, 1000);