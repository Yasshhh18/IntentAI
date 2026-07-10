export interface CustomerProfile {
  id: string;
  name: string;
  mobile: string;
  pan: string;
  accountNumber: string;
  occupation: string;
  declaredIncome: number;
  assessedActualIncome: number;
  calculatedRepaymentCapacity: number;
  monthlyExpenses: number;
  savings: number;
  existingLoans: number;
  creditScore: number;
  relationshipDuration: string;
  behaviourScore: number;
  lifeEvents: string[];
  intents: IntentScore[];
  salaryTrend: 'Upward' | 'Stable' | 'Volatile';
  savingsTrend: 'Upward' | 'Stable' | 'Declining';
  pipelineStage: 'High Intent' | 'Contacted' | 'Interested' | 'Application Started' | 'Approved' | 'Disbursed';
  recommendedProduct: { product: string; reason: string; };
  priorityTier: 'Contact Today' | 'This Week' | 'Monitor' | 'Ignore';
  loanMatchScores: { homeLoan: number; personalLoan: number; autoLoan: number; mortgage: number; };
  behavioralSignals: string[];
  confidenceReasons: string[];
  aiConfidence: number;
  timeline: TimelineEvent[];
  behavioralHeatmap: HeatmapCategory[];
  nextBestActions: NextAction[];
  aiBadges: string[];
  expectedConversion: number;
}

export interface IntentScore {
  product: string;
  score: number;
  confidence: string;
  reason: string;
  suggestedAction: string;
  bestContactTime: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface TimelineEvent {
  month: string;
  event: string;
  detail: string;
  type: 'salary' | 'browse' | 'savings' | 'loan' | 'life' | 'purchase';
}

export interface HeatmapCategory {
  label: string;
  value: number;
  change: number; // positive = increase, negative = decrease
  highlight: boolean;
}

export interface NextAction {
  action: string;
  icon: string;
  confidence: number;
  label: string;
}

const FIRST_NAMES = ["Amit", "Priya", "Rahul", "Sneha", "Vikram", "Anjali", "Suresh", "Ramesh", "Kavita", "Pooja", "Arjun", "Neha", "Rohan", "Meera", "Karan", "Simran", "Siddharth", "Aisha", "Aditya", "Riya"];
const LAST_NAMES = ["Sharma", "Singh", "Patel", "Kumar", "Gupta", "Verma", "Shah", "Reddy", "Rao", "Jain", "Desai", "Joshi", "Iyer", "Nair", "Das", "Bose", "Chauhan", "Yadav", "Rajput", "Malhotra"];
const OCCUPATIONS = ["IT Professional", "Doctor", "Business Owner", "Teacher", "Engineer", "CA", "Architect", "Government Employee", "Banker", "Consultant"];
const PIPELINE_STAGES = ['High Intent', 'Contacted', 'Interested', 'Application Started', 'Approved', 'Disbursed'] as const;
const PRIORITY_TIERS = ['Contact Today', 'This Week', 'Monitor', 'Ignore'] as const;

function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePAN(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  let pan = '';
  for(let i = 0; i < 5; i++) pan += chars.charAt(Math.floor(Math.random() * chars.length));
  for(let i = 0; i < 4; i++) pan += nums.charAt(Math.floor(Math.random() * nums.length));
  pan += chars.charAt(Math.floor(Math.random() * chars.length));
  return pan;
}

export function generateMockCustomers(count: number): CustomerProfile[] {
  const customers: CustomerProfile[] = [];

  for (let i = 0; i < count; i++) {
    const declaredIncome = randomNumber(40000, 150000);
    const assessedActualIncome = declaredIncome + randomNumber(10000, 150000);
    const calculatedRepaymentCapacity = Math.floor(assessedActualIncome * 0.45);
    const expenses = Math.floor(assessedActualIncome * (randomNumber(30, 70) / 100));
    const savings = assessedActualIncome - expenses;
    const creditScore = randomNumber(650, 850);
    const intentScore = randomNumber(55, 97);
    const priorityTier = intentScore > 85 ? 'Contact Today' : intentScore > 70 ? 'This Week' : intentScore > 55 ? 'Monitor' : 'Ignore';

    const intents: IntentScore[] = [
      {
        product: "Home Loan",
        score: intentScore,
        confidence: randomElement(["High", "Medium"]),
        reason: "Recent property inquiries and stable high income detected via transaction patterns.",
        suggestedAction: "Call to discuss pre-approved rates.",
        bestContactTime: "Evening (6 PM - 8 PM)",
        priority: creditScore > 750 ? "High" : "Medium"
      },
      {
        product: "Personal Loan",
        score: randomNumber(20, 85),
        confidence: randomElement(["High", "Medium", "Low"]),
        reason: "Upcoming family event identified in transaction notes.",
        suggestedAction: "Send personalized email offer.",
        bestContactTime: "Afternoon (1 PM - 3 PM)",
        priority: "Medium"
      },
      {
        product: "Auto Loan",
        score: randomNumber(50, 99),
        confidence: "High",
        reason: "Repeated payments to ride-sharing apps and high transaction volume at dealerships.",
        suggestedAction: "Offer Auto Loan with competitive interest rate.",
        bestContactTime: "Morning (10 AM - 12 PM)",
        priority: "High"
      }
    ];

    intents.sort((a, b) => b.score - a.score);

    customers.push({
      id: `CUST${1000 + i}`,
      name: `${randomElement(FIRST_NAMES)} ${randomElement(LAST_NAMES)}`,
      mobile: `+91 ${randomNumber(9000000000, 9999999999)}`,
      pan: generatePAN(),
      accountNumber: `${randomNumber(100000000000, 999999999999)}`,
      occupation: randomElement(OCCUPATIONS),
      declaredIncome,
      assessedActualIncome,
      calculatedRepaymentCapacity,
      monthlyExpenses: expenses,
      savings,
      existingLoans: randomNumber(0, 5000000),
      creditScore,
      relationshipDuration: `${randomNumber(1, 15)} Years`,
      behaviourScore: randomNumber(60, 99),
      lifeEvents: [randomElement(["Marriage", "Childbirth", "New Job", "Relocation", "None"])].filter(e => e !== "None"),
      intents,
      salaryTrend: randomElement(['Upward', 'Stable', 'Volatile']),
      savingsTrend: randomElement(['Upward', 'Stable', 'Declining']),
      pipelineStage: randomElement([...PIPELINE_STAGES]),
      recommendedProduct: { product: intents[0].product, reason: intents[0].reason },
      priorityTier: priorityTier as CustomerProfile['priorityTier'],
      loanMatchScores: {
        homeLoan: intentScore,
        personalLoan: randomNumber(30, 70),
        autoLoan: randomNumber(20, 65),
        mortgage: randomNumber(15, 50),
      },
      behavioralSignals: [
        `${randomNumber(5, 20)} visits to housing websites`,
        `${randomNumber(1, 5)} EMI calculators used`,
        `Salary credit increased by ${randomNumber(8, 25)}%`,
        `Savings grew by ${randomNumber(10, 30)}%`,
        `Stable salary for ${randomNumber(12, 36)} months`,
      ],
      confidenceReasons: ["High data quality", "Verified income source", "Low transaction anomaly", "Stable credit history"],
      aiConfidence: randomNumber(75, 99),
      expectedConversion: randomNumber(60, 95),
      aiBadges: ["Verified Income", "Behavior Verified", "Intent Confirmed", "AI Recommended"],
      timeline: [
        { month: "Jan", event: "Salary Increased", detail: "+18% net credit detected", type: "salary" },
        { month: "Feb", event: "Started browsing Housing.com", detail: "14 property portal visits via UPI app pattern", type: "browse" },
        { month: "Mar", event: "Large Savings Deposit", detail: `₹${randomNumber(50000, 200000).toLocaleString()} transferred to savings`, type: "savings" },
        { month: "Apr", event: "Visited Builder Website", detail: "3 EMI calculators used, 2 site visits", type: "browse" },
        { month: "Today", event: `Intent Score ${intentScore}%`, detail: "Home Loan Recommendation Triggered", type: "loan" },
      ],
      behavioralHeatmap: [
        { label: "UPI Payments", value: 82, change: 5, highlight: false },
        { label: "Salary Credits", value: 100, change: 18, highlight: true },
        { label: "Fuel & Travel", value: 45, change: -8, highlight: false },
        { label: "Real Estate", value: 91, change: 91, highlight: true },
        { label: "Shopping", value: 38, change: -12, highlight: false },
        { label: "Healthcare", value: 22, change: 3, highlight: false },
        { label: "Investment", value: 67, change: 14, highlight: true },
        { label: "EMI Payments", value: 55, change: -5, highlight: false },
      ],
      nextBestActions: [
        { action: "Call Customer", icon: "📞", confidence: 91, label: "Highest impact" },
        { action: "Send Offer Email", icon: "📧", confidence: 78, label: "Personalized" },
        { action: "Recommend Home Loan", icon: "🏠", confidence: intentScore, label: "Top Match" },
        { action: "Recommend Auto Loan", icon: "🚗", confidence: randomNumber(30, 60), label: "Secondary" },
        { action: "Wait 14 Days", icon: "📅", confidence: randomNumber(10, 30), label: "If no response" },
      ],
    });
  }

  return customers;
}

export const mockCustomers = generateMockCustomers(30);

// Deterministic primary demo user — Priya Shah
mockCustomers[0] = {
  ...mockCustomers[0],
  id: "CUST1000",
  name: "Priya Shah",
  occupation: "Senior Architect",
  declaredIncome: 120000,
  assessedActualIncome: 185000,
  calculatedRepaymentCapacity: 83250,
  monthlyExpenses: 85000,
  savings: 100000,
  existingLoans: 450000,
  creditScore: 815,
  behaviourScore: 94,
  priorityTier: "Contact Today",
  expectedConversion: 91,
  aiConfidence: 98,
  loanMatchScores: { homeLoan: 92, personalLoan: 58, autoLoan: 74, mortgage: 31 },
  aiBadges: ["Verified Income", "Behavior Verified", "Intent Confirmed", "AI Recommended", "High Conversion", "Low Risk"],
  behavioralSignals: [
    "14 visits to housing websites (Housing.com, MagicBricks)",
    "3 EMI calculators used in last 30 days",
    "Salary credit increased by 22% (Jan)",
    "Savings increased by 18% over 3 months",
    "Stable salary credit for 24 consecutive months",
    "Closed education loan — EMI capacity freed up",
  ],
  confidenceReasons: ["High data quality", "Verified income source", "Low anomaly score", "Consistent 2-year salary", "No recent defaults"],
  intents: [
    {
      product: "Home Loan",
      score: 92,
      confidence: "High",
      reason: "Searched for real estate portals. Stopped heavy discretionary spending.",
      suggestedAction: "Call to offer pre-approved 1.5Cr limit.",
      bestContactTime: "Evening (6 PM)",
      priority: "High"
    },
    {
      product: "Auto Loan",
      score: 74,
      confidence: "Medium",
      reason: "Car insurance due in 2 months. 5 year old vehicle detected.",
      suggestedAction: "Email EV upgrade offers.",
      bestContactTime: "Weekend",
      priority: "Medium"
    },
    {
      product: "Personal Loan",
      score: 58,
      confidence: "Low",
      reason: "Wedding-related shopping pattern detected.",
      suggestedAction: "Monitor for 2 more weeks.",
      bestContactTime: "Afternoon",
      priority: "Low"
    }
  ],
  timeline: [
    { month: "Jan", event: "Salary Increased", detail: "+22% net credit detected for 3 consecutive months", type: "salary" },
    { month: "Feb", event: "Started browsing Housing.com", detail: "14 property portal visits, 3 MagicBricks searches", type: "browse" },
    { month: "Mar", event: "Large Savings Deposit", detail: "₹1,80,000 transferred to savings account", type: "savings" },
    { month: "Apr", event: "Visited Builder Website", detail: "3 EMI calculators used, 2 site visits in Pune", type: "browse" },
    { month: "May", event: "Closed Education Loan", detail: "₹45,000/mo EMI freed up — repayment capacity increased", type: "loan" },
    { month: "Today", event: "Intent Score 92%", detail: "Home Loan Recommendation — Pre-approve ₹1.5Cr", type: "loan" },
  ],
  behavioralHeatmap: [
    { label: "UPI Payments", value: 85, change: 5, highlight: false },
    { label: "Salary Credits", value: 100, change: 22, highlight: true },
    { label: "Fuel & Travel", value: 40, change: -15, highlight: false },
    { label: "Real Estate", value: 95, change: 95, highlight: true },
    { label: "Shopping", value: 25, change: -30, highlight: false },
    { label: "Healthcare", value: 18, change: 2, highlight: false },
    { label: "Investment", value: 78, change: 18, highlight: true },
    { label: "EMI Payments", value: 30, change: -45, highlight: true },
  ],
  nextBestActions: [
    { action: "Call Customer", icon: "📞", confidence: 91, label: "Call Today — highest conversion" },
    { action: "Send Offer Email", icon: "📧", confidence: 82, label: "Pre-approved ₹1.5Cr Home Loan" },
    { action: "Recommend Home Loan", icon: "🏠", confidence: 92, label: "Primary match — strong signals" },
    { action: "Recommend Auto Loan", icon: "🚗", confidence: 74, label: "Secondary — insurance renewal due" },
    { action: "Wait 14 Days", icon: "📅", confidence: 15, label: "Only if no response to call/email" },
  ],
  pipelineStage: "High Intent",
  recommendedProduct: {
    product: "Home Loan",
    reason: "Identified strong intent signals combined with excellent repayment capacity."
  }
};
