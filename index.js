/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
// function allWagesFor(this) {
//    return this.timeInEvents.map( e => wagesEarnedOnDate(this, e.date)).reduce( (sum, wage) => sum + wage, 0);
// }

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
            firstName,
            familyName,
            title,
            payPerHour,
            timeInEvents: [],
            timeOutEvents: []
    };
}
function createEmployeeRecords(arr) {
    return arr.map( ar => createEmployeeRecord(ar));
}
function createTimeInEvent(date) {
    const [day, hour] = date.split(" ");

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: day
    });
    return this;
}
function createTimeOutEvent(date) {
    const [day, hour] = date.split(" ");

    this['timeOutEvents'].push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: day
    });
    return this;
}
function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find( timeInDay => timeInDay.date === date);
    const timeOut = this.timeOutEvents.find( timeInDay => timeInDay.date === date);
    
    const hoursWorked = Math.abs(timeIn.hour - timeOut.hour)/100;

    return hoursWorked;

}
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}
function calculatePayroll(employees) {
    return employees.map(e => allWagesFor.call(e)).reduce( (sum, wages) => sum + wages, 0);
}
function findEmployeeByFirstName(employees, fname) {
    return employees.find( e => e.firstName === fname);
}
