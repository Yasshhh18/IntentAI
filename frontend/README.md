# IntentIQ - Retail Banking Intelligence Platform

## Overview
**IntentIQ** is an advanced, AI-driven banking platform designed to solve the problem of low retail lending conversions caused by a reliance on traditional metrics. 

By analyzing **transactional and behavioral insights**, IntentIQ accurately assesses a borrower's actual repayment capacity and genuine intent. This allows underwriters and relationship managers to target the right prospects, at the right time, with the right product—driving lead conversion rates beyond 30%.

## The Hackathon Problem Statement
*Bank’s retail lending relies on traditional metrics, resulting in low conversions and limited insight into customer intent. A data-driven approach is needed to identify eligible, quantifiable repayment capacity, genuinely interested prospects using transaction and behavioral insights.*

**Our Expected Outcome:**
Generate high-quality leads with a conversion rate exceeding 30%, while enabling accurate assessment of borrowers' actual income levels to support prudent underwriting for:
- Personal Loans
- Home Loans
- Mortgage Loans
- Auto Loans

## How We Solve It
IntentIQ moves beyond simple credit scores and declared incomes by employing deep behavioral analysis:
1. **AI Income Assessment**: The platform cross-references declared incomes with anomalous high-value deposits and transaction histories to calculate true "Repayment Capacity".
2. **Behavioral Triggers**: The AI detects hidden intent signals (e.g., increased savings rates, ride-share patterns, or real estate portal browsing) to assign an "Intent Score".
3. **High-Quality Lead Cockpit**: Relationship Managers are presented with a real-time dashboard of high-conviction customers, highlighting specifically why the AI recommends a certain loan, empowering them to initiate contact with extreme precision.

## Key Features
- **Predictive Cockpit (Dashboard)**: A comprehensive view tracking portfolio-wide "Avg Lead Conversion" (>34%) and total "Repayment Capacity Identified". 
- **Customer 360 View**: A deep dive into an individual borrower. It visually contrasts their "Declared Income" against the "AI Assessed Income", providing the exact monthly repayment capacity calculated by the AI.
- **Actionable AI Reasoning**: Every recommended loan type comes with explicit behavioral drivers (e.g., "Repeated payments to ride-sharing apps and high transaction volume at dealerships" -> Recommend Auto Loan).

## Tech Stack
- **Frontend Framework**: React 18 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom Design System with Glassmorphism, Micro-animations, and Data-driven Visuals)
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Running the Project

To run this project locally on your machine:

1. Ensure you have Node.js installed.
2. Navigate to the project root directory:
   ```bash
   cd frontend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## Core Pages to Demo to Judges
1. `/` (**Landing Page**): Showcases the pitch—moving beyond traditional metrics to behavioral insights.
2. `/dashboard` (**Manager Cockpit**): Displays the high-level >34% conversion metrics and a feed of highly qualified leads.
3. `/customer/CUST1000` (**Priya Shah's 360 Profile**): The ultimate proof-of-concept screen. Shows how the AI assessed her actual income (1.85L) vs her declared income (1.20L) to unlock 83K/mo in repayment capacity for a Home Loan based on browsing behavior.
