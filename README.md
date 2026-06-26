# HVAC Preventive Maintenance Reminder Automation

## Project Overview

This project automates preventive maintenance reminders for HVAC service schedules using Microsoft Power Automate and Microsoft Excel Online.

The solution replaces a manual daily process of checking spreadsheets for upcoming service dates by automatically identifying services that require attention, emailing a reminder report, and recording when reminders were sent.

This project was built as part of my portfolio to demonstrate practical business process automation using Microsoft 365.

---

## Business Problem

Service coordinators were manually reviewing service schedules every morning to identify upcoming preventive maintenance visits.

This manual process introduced several challenges:

* Time spent reviewing spreadsheets every day
* Risk of missing upcoming service dates
* No automatic record of reminder emails
* Difficult to identify overdue services quickly
* Inconsistent follow-up between coordinators

The goal of this project was to automate the reminder process while keeping the existing Excel-based workflow familiar to users.

---

## Solution

A scheduled Power Automate cloud flow runs every morning and performs the following steps:

1. Read the service register stored in Excel Online.
2. Retrieve every active service requirement.
3. Ignore completed and cancelled jobs.
4. Check whether the next service date falls within the configured reminder window.
5. Identify overdue services.
6. Generate a reminder email summarizing upcoming and overdue work.
7. Update the "Last Reminder Sent" field for reminder records.

---

## Workflow

```
Daily Scheduled Trigger
          │
          ▼
Read Excel Service Register
          │
          ▼
Filter Active Services
          │
          ▼
Check Due Dates
          │
     ┌────┴─────┐
     │          │
Upcoming    Overdue
     │          │
     └────┬─────┘
          ▼
Build Reminder Email
          │
          ▼
Send Outlook Email
          │
          ▼
Update Last Reminder Sent
```

---

## Technologies Used

* Microsoft Excel Online
* Microsoft Power Automate
* Microsoft Outlook
* OneDrive / SharePoint
* Google Apps Script (initial prototype)
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

```
HVAC Daily Service Reminder Report

OVERDUE SERVICES

Client: ABC Manufacturing
Site: Makati Plant
Service Type: Major
Due Date: 20-Jun-2026

------------------------------------

SERVICES REQUIRING REMINDERS

Client: XYZ Office Tower
Site: BGC
Service Type: Minor
Due Date: 30-Jun-2026

------------------------------------

Please review and schedule accordingly.
```

---

## Repository Structure

```
/
│
├── README.md
├── excel/
│     ├── HVAC_Service_Register_Template.xlsx
│     └── Sample_Data.xlsx
│
├── power-automate/
│     ├── Flow_Screenshot.png
│     └── Flow_Export.zip
│
├── apps-script/
│     └── sendServiceReminders.js
│
├── screenshots/
│     ├── Excel_Register.png
│     ├── Reminder_Email.png
│     ├── PowerAutomate_Run.png
│     └── Flow_Overview.png
│
└── docs/
      ├── Business_Requirements.md
      └── Workflow.md
```

---

## Skills Demonstrated

* Business Process Automation
* Microsoft Power Automate
* Microsoft Excel Online
* Workflow Design
* Process Documentation
* Data Validation
* Scheduled Cloud Flows
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

## License

This project is provided for educational and portfolio purposes.
