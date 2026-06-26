function sendServiceReminders() {

var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ServiceSchedule');

if (!sheet) {
throw new Error('Sheet "ServiceSchedule" not found.');
}

var data = sheet.getDataRange().getValues();
var today = new Date();

var reminderList = [];
var overdueList = [];
var rowsToUpdate = [];
var FIRST_DATA_ROW = 4;

for (var i = FIRST_DATA_ROW - 1; i < data.length; i++) {


var client = data[i][0];
var site = data[i][1];
var serviceType = data[i][2];
var nextServiceDue = new Date(data[i][4]);
var reminderDays = Number(data[i][5]);
var notes = data[i][6];
var active = data[i][7];

if (active != "Yes") {
  continue;
}

var daysUntilDue = Math.ceil(
  (nextServiceDue.getTime() - today.getTime()) /
  (1000 * 60 * 60 * 24)
);

if (daysUntilDue < 0) {

  var dueDate = Utilities.formatDate(
    nextServiceDue,
    Session.getScriptTimeZone(),
    "dd-MMM-yyyy"
  );

  overdueList.push(
    "Client: " + client + "\n" +
    "Site: " + site + "\n" +
    "Service Type: " + serviceType + "\n" +
    "Due Date: " + dueDate + "\n" +
    "Days Overdue: " + Math.abs(daysUntilDue) + "\n" +
    "Notes: " + notes + "\n" +
    "-----------------------------------"
  );

}
else if (daysUntilDue <= reminderDays) {

  var dueDate = Utilities.formatDate(
    nextServiceDue,
    Session.getScriptTimeZone(),
    "dd-MMM-yyyy"
  );

  reminderList.push(
    "Client: " + client + "\n" +
    "Site: " + site + "\n" +
    "Service Type: " + serviceType + "\n" +
    "Due Date: " + dueDate + "\n" +
    "Days Until Due: " + daysUntilDue + "\n" +
    "Notes: " + notes + "\n" +
    "-----------------------------------"
  );

  rowsToUpdate.push(i + 1);
}


}

if (reminderList.length > 0 || overdueList.length > 0) {

var subject =
  "Daily HVAC Service Report - " +
  overdueList.length + " Overdue, " +
  reminderList.length + " Upcoming";

var body = "";

if (overdueList.length > 0) {
  body +=
    "OVERDUE SERVICES (" + overdueList.length + ")\n\n" +
    overdueList.join("\n\n") +
    "\n\n";
}

if (reminderList.length > 0) {
  body +=
    "SERVICES REQUIRING REMINDERS (" + reminderList.length + ")\n\n" +
    reminderList.join("\n\n") +
    "\n\n";
}

body += "Please review and schedule accordingly.";

GmailApp.sendEmail(
  "carlosabiera@gmail.com",
  subject,
  body
);

var now = new Date();

rowsToUpdate.forEach(function(row) {
  sheet.getRange(row, 9).setValue(now);
});


}
}

