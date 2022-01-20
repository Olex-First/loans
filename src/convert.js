import * as data from "./data/current-loans.json";

export function getCurrentLoans() {
    return data.loans;
}

export function numberWithCommas(number) {
    return number.toLocaleString("en-US")
}

export function getTimeRemaining(seconds) {
    const displayText = [];
    let delta = seconds;
    const days = Math.floor(delta / 86400);
    if (days > 0) {
        displayText.push(`${days} days`);
    }
    delta = delta - days * 86400;
    const hours = Math.floor(delta / 3600) % 24;
    if (hours > 0) {
        displayText.push(`${hours} hours`);
    }
    delta = delta - hours * 3600;
    const minutes = Math.floor(delta / 60) % 60;
    if (minutes > 0) {
        displayText.push(`${minutes} minutes`);
    }
    if (displayText.length === 0) {
        return "None";
    } else {
        return displayText.join(" ");
    }
}
