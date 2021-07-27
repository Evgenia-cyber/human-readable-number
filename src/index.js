module.exports = function toReadable(number) {
    let answer;
    if (number <= 20) {
        answer = digitToString(number);
    } else if (number < 100) {
        const tens = digitToString(Math.floor(number / 10) * 10); //десятки >= 20
        const units = digitToString(number % 10); //единицы
        if (units === "zero") {
            answer = tens;
        } else {
            answer = tens + " " + units;
        }
    } else if (
        number <= 120 ||
        (number >= 200 && number <= 220) ||
        (number >= 300 && number <= 320) ||
        (number >= 300 && number <= 320) ||
        (number >= 400 && number <= 420) ||
        (number >= 500 && number <= 520) ||
        (number >= 600 && number <= 620) ||
        (number >= 700 && number <= 720) ||
        (number >= 800 && number <= 820) ||
        (number >= 900 && number <= 920)
    ) {
        const hundreds = digitToString(Math.floor(number / 100)); //сотни
        let remainder = digitToString(number % 100); //единицы и десятки <20
        if (remainder === "zero") {
            answer = hundreds + " hundred";
        } else {
            answer = hundreds + " hundred " + remainder;
        }
    } else if (number <= 999) {
        const hundreds = digitToString(Math.floor(number / 100)); //сотни
        const remainder = number % 100;
        const tens = digitToString(Math.floor(remainder / 10) * 10); //десятки >= 20
        let units = digitToString(number % 10); //единицы
        if (units === "zero") {
            answer = hundreds + " hundred " + tens;
        } else {
            answer = hundreds + " hundred " + tens + " " + units;
        }
    } else {
        console.log("Too many");
    }
    return answer;
};

function digitToString(digit) {
    switch (digit) {
        case 0:
            return "zero";
            break;
        case 1:
            return "one";
            break;
        case 2:
            return "two";
            break;
        case 3:
            return "three";
            break;
        case 4:
            return "four";
            break;
        case 5:
            return "five";
            break;
        case 6:
            return "six";
            break;
        case 7:
            return "seven";
            break;
        case 8:
            return "eight";
            break;
        case 9:
            return "nine";
            break;
        case 10:
            return "ten";
            break;
        case 11:
            return "eleven";
            break;
        case 12:
            return "twelve";
            break;
        case 13:
            return "thirteen";
            break;
        case 14:
            return "fourteen";
            break;
        case 15:
            return "fifteen";
            break;
        case 16:
            return "sixteen";
            break;
        case 17:
            return "seventeen";
            break;
        case 18:
            return "eighteen";
            break;
        case 19:
            return "nineteen";
            break;
        case 20:
            return "twenty";
            break;
        case 30:
            return "thirty";
            break;
        case 40:
            return "forty";
            break;
        case 50:
            return "fifty";
            break;
        case 60:
            return "sixty";
            break;
        case 70:
            return "seventy";
            break;
        case 80:
            return "eighty";
            break;
        case 90:
            return "ninety";
            break;
    }
}
