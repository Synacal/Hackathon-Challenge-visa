# Hackathon-Challenge-visa

This project is part of a hackathon challenge aimed at building a visa processing application for tourism in Sri Lanka. The application includes key functionalities such as visa form submissions, officer approval interfaces, and email notifications.

## Project Overview

The Visa Processing Application allows tourists to submit their visa applications with required attachments like passport bio pages and passport photos. The system also includes an officer dashboard for visa officers to approve or deny applications and flag risky applicants based on Interpol Notices API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

Core Features
Visa Form Submission: Tourists can fill in personal information, upload required documents (passport bio page, passport photo), and submit travel history for the last 12 months.
Visa Officer Dashboard: Visa officers can view applications, approve or deny them, and check if applicants are flagged by the Interpol API.
Email Notifications: Users receive email notifications about the status of their visa applications once approved or denied.
Risk Assessment: Integration with Interpol Notices API to notify visa officers of risky applicants.

Key APIs Used
Interpol Notices API: Used for flagging risky applicants based on publicly available notices. API Documentation.
SendGrid (for email notifications): Used to notify users via email when their visa application has been processed.
Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!