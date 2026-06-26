# HVAC Preventive Maintenance Reminder Automation

## Project Overview

This project automates preventive maintenance reminders for HVAC service schedules using Google Sheets and AppsScript, to be ported into Google Excel Online and Power Automate if necessary.

The solution makes it convenient for the business owner to keep track of all active service by reading the email instead of checking the sheet on a daily basis. 

This project was built as part of my portfolio to demonstrate practical business process automation.

---

## Business Problem

Service coordinators are using this sheet to update service schedules every day to identify upcoming preventive maintenance visits, meaning the owner of the business will need to open the sheet every day to ensure that all services are done in a timely manner.

This process proved to be repetitive for the business owner and wanted a more streamlined process of getting updates from the sheet.

The goal of this project was to automate the updates while keeping the existing sheets-based workflow familiar to users.

---

## Solution

A scheduled AppsScript runs every morning and performs the following steps:

1. Read the service register stored in Google Sheets.
2. Retrieve every active service requirement.
3. Ignore completed and cancelled jobs.
4. Check whether the next service date falls within the reminder window.
5. Identify overdue services.
6. Generate a reminder email summarizing upcoming and overdue work.
7. Update the "Last Reminder Sent" field for reminder records still active.

---

## Workflow

![Workflow](hvac-service-reminder-automation/emailoutput.png)


---

## Technologies Used

* Google Sheets
* Google Apps Script
* Gmail
* GitHub

---

## Excel Data Structure

| Column             | Description                                       |
| ------------------ | ------------------------------------------------- |
| Client             | Customer name                                     |
| Site               | Service location                                  |
| Service Type       | Major, Minor, Standard, Shutdown                  |
| Frequency          | Service interval                                  |
| Next Service Due   | Date of the next scheduled service                |
| Reminder Days      | Number of days before due date to begin reminders |
| Notes              | Additional scheduling information                 |
| Active             | Indicates whether reminders are enabled           |
| Last Reminder Sent | Automatically updated after reminder email        |
| Status             | Pending, Completed or Cancelled                   |
| Action             | Send Reminder or OVERDUE                          |

---

## Automation Logic

A reminder is sent when all of the following conditions are true:

* Active = Yes
* Status is not Completed
* Status is not Cancelled
* Next Service Due is within the configured Reminder Days

If the service due date has already passed, the service is listed separately as **Overdue** in the email.

After a reminder email is successfully sent, the automation records the current date in the **Last Reminder Sent** column.

---

## Example Reminder Email

![Service Register](hvac-service-reminder-automation/emailoutput.png)

---

## Skills Demonstrated

* Business Process Automation
* AI-Assisted AppScript Coding
* Google Sheets
* Workflow Design
* Process Documentation
* Data Validation
* Scheduled Automations
* Conditional Logic
* Email Automation
* Spreadsheet Automation

---

## Future Improvements

Potential enhancements include:

* HTML formatted email reports
* Microsoft Teams notifications
* Automatic calculation of the next service due date after completion
* Escalation emails for long-overdue services
* Power BI dashboard for service planning
* Technician workload reporting
* Integration with Microsoft Planner for work order creation

---

## Learning Outcomes

This project allowed me to practice designing an end-to-end business automation solution rather than simply automating individual tasks.

Key takeaways include:

* Translating business requirements into automated workflows
* Structuring spreadsheet data for automation
* Designing maintainable automation logic
* Creating reusable reminder processes
* Documenting technical solutions for future maintenance

---
