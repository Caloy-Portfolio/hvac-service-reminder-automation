# hvac-service-reminder-automation
Automated preventative maintenance reminders for HVAC service schedules using AppsScript. The solution monitors upcoming service dates, emails daily reminders, and records when reminders were sent to reduce manual tracking.

Project Overview

Automated preventative maintenance reminders for HVAC service schedules using Microsoft Power Automate. The solution monitors upcoming service dates, emails daily reminders, and records when reminders were sent to reduce manual tracking.

Business Problem

Example:

Service coordinators were manually checking spreadsheets every morning to identify upcoming preventative maintenance visits. This process was time-consuming and prone to missed reminders.

Solution:
Excel Service Register
          │
          ▼
Power Automate Trigger
          │
          ▼
Read Table
          │
          ▼
For Each Service
          │
          ▼
Is Active?
     │
     ├──No
     │
     └──Yes
          │
          ▼
Is Due?
          │
          ▼
Build Email
          │
          ▼
Send Outlook Email
          │
          ▼
Update Last Reminder Sent


Technologies Used:
Google Sheets
Google Apps Script
GitHub

Features
Daily scheduled execution
Reminder window based on configurable Reminder Days
Active/Inactive filtering
Status filtering
Overdue detection
Reminder email generation
Automatic Last Reminder Sent update
Configurable service frequencies

| Column             | Description                              |
| ------------------ | ---------------------------------------- |
| Client             | Customer name                            |
| Site               | Service location                         |
| Service Type       | Major / Minor / Standard / Shutdown      |
| Frequency          | Service interval                         |
| Next Service Due   | Next planned service                     |
| Reminder Days      | Number of days before due date to notify |
| Notes              | Additional information                   |
| Active             | Yes/No                                   |
| Last Reminder Sent | Updated automatically                    |
| Status             | Pending / Completed / Cancelled          |

Workflow

Include screenshots like:

Excel table
Power Automate flow
Reminder email
Successful run history

Improvements

This section shows you're thinking beyond the initial implementation.
HTML formatted emails
Teams notifications
Manager approval for overdue jobs
Escalation after 7 overdue days
Service technician calendar integration
Automatic next due date calculation after completion
Power BI reporting dashboard


