let button = document.getElementById("button-click");

function validateDate() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if (month < 1 || month > 12) {
        return false;
    }

    let daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
        return false;
    }

    if (year < 1000 || year > 2024) {
        return false;
    }

    return true;
}

function getDateDifference(day, month, year) {
    let inputDate = new Date(`${year}-${month}-${day}`);
    let currentDate = new Date();

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
        years: years,
        months: months,
        days: days,
    };
}

button.addEventListener("click", function () {
    const inputBorder = document.getElementsByTagName("input");
    const inputWarning = document.getElementsByClassName("day-error");
    const inputLabel = document.getElementsByTagName("label");

    if (validateDate() === false) {
        for (let i = 0; i < inputBorder.length; i++) {
            inputBorder[i].style.border = "1px solid red";
        }
        for (let i = 0; i < inputWarning.length; i++) {
            inputWarning[i].style.display = "unset";
        }
        for (let i = 0; i < inputLabel.length; i++) {
            inputLabel[i].style.color = "red";
        }
    } else if (validateDate() === true) {
        const day = document.getElementById("day").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;

        let difference = getDateDifference(day, month, year);
        console.log(
            `The difference is ${difference.years} years, ${difference.months} months, and ${difference.days} days`
        );

        for (let i = 0; i < inputBorder.length; i++) {
            inputBorder[i].style.border = "1px solid gray";
        }
        for (let i = 0; i < inputWarning.length; i++) {
            inputWarning[i].style.display = "none";
        }
        for (let i = 0; i < inputLabel.length; i++) {
            inputLabel[i].style.color = "grey";
        }

        let inputDataDay = document.getElementById("p-days");
        let outputDataDay = document.createTextNode(difference.days);
        let inputDataMonth = document.getElementById("p-months");
        let outputDataMonth = document.createTextNode(difference.months);
        let inputDataYear = document.getElementById("p-years");
        let outputDataYear = document.createTextNode(difference.years);

        inputDataDay.textContent = "";
        inputDataDay.appendChild(outputDataDay);
        inputDataMonth.textContent = "";
        inputDataMonth.appendChild(outputDataMonth);
        inputDataYear.textContent = "";
        inputDataYear.appendChild(outputDataYear);
    }
});