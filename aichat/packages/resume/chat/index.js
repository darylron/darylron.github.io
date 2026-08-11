// Embedded directly to prevent any module-loading crashes on DigitalOcean
const RESUME_DATA = `
DARYL M. RONQUILLO
Fullstack Software Engineer
Location: San Fernando, Pampanga, Philippines
Contact: darylron@gmail.com | +63 926 658 4446 | LinkedIn: https://www.google.com/search?q=https%3A%2F%2Flinkedin.com%2Fin%2Fdarylron

PROFILE
13+ years of experience building scalable web applications, data pipelines, and cloud infrastructure spanning the full product lifecycle — from ideation and proof-of-concepts to sprint planning, test documentation, and post-launch support. Specialized in systems handling millions of data points: extraction across heterogeneous sources, transformation via Pandas and BigQuery, and delivery through custom GCP-hosted dashboards and APIs. Proven experience setting up cloud infrastructure as code via Terraform.

QUICK STATS

- Experience: 13+ Years
- Companies: 7
- Awards: 5+
- Technologies: 20+

TECHNOLOGIES
Gemini AI, Claude, Replit, JavaScript, Go, Python, PHP, TypeScript, BigQuery, MySQL, PostgreSQL, Redis, Pandas, AngularJS, Django, CakePHP, Odoo, GCP, Docker, Terraform, Github Actions, AppEngine, Protobufs

WORK EXPERIENCE

7. Technical Lead — Hexaware Technologies, Jan 2022 — Present

- Review system requirements and business processes; code, test, debug, and implement software solutions.
- Operate as a generalist across UX/design, DevOps, and programming within the IT Development Function.
Tech: Python, Go, Angular, TypeScript, GCP

6. Sr. Software Engineer L4 — FPT Software Philippines, Inc., Sept 2021 — Jan 2022

- Research and design, software development and maintenance.
- Full-stack generalist role within the IT Development Function.
Tech: Python, Jira, Android, New Relic

5. Sr. Software Engineer — Concentrix, Jan 2020 — July 2021

- Developed reporting system for Google's internal network failure notifications.
- Created system computing NetEng SLO/KPI and GFiber network availability.
- Built BorgJobs (Kubernetes) to collate and expose data to clients.
- Designed chatbot predicting user input and surfacing contextual GFiber data.
Tech: BigQuery, AppEngine, MySQL, Protobufs, Go, Python, Pandas, RPC

4. Software Engineer — Willis Towers Watson, June 2019 — Dec 2019

- Designed, developed, and implemented short- and long-term IT solutions across systems architecture, network infrastructure, and application development.
- Full ownership from requirements through to deployment.
Tech: Django, Docker, Jenkins

3. Software Engineer — Concentrix, Dec 2016 — May 2019

- Developed network failure notification reporting system for Google.
- Built forecasting system for Google network utilization and YouTube watchtime.
- Created employee–manager org-chart dashboard on Google Maps canvas.
- Built proactive monitoring alerting developers to Google AppEngine errors.
- Designed system for automated website testing.
Awards: 2018 Originator's Award, 2017 Duck Tape Award
Tech: BigQuery, AppEngine, MySQL, Protobufs, Go, Python, Pandas, RPC

2. ERP Developer — Auberon Solutions, Inc., Feb 2016 — Dec 2016

- Merged centralized ERP with standalone ERP systems by unifying transactions.
- Conducted 2-day seminar on building an ERP system from scratch with OpenERP.
Tech: Odoo, OpenERP, Python

1. System Developer — Eastvantage, May 2012 — Dec 2015

- Built dynamic web apps as user-friendly frontends for complex OpenERP system.
- Created a technician dispatchment dashboard.
Awards: 3x Employee of the Month, 2014 Performance Awardee
Tech: OpenERP, Web Development

EDUCATION
B.S. Information Technology
Don Mariano Marcos Memorial State University — Institute of Information Technology
San Fernando, La Union
`;

export async function main(args) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  // 1. Handle CORS Preflight
  if (args.http?.method === "OPTIONS") {
    return { statusCode: 204, headers };
  }

  try {
    // 2. Validate API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "GEMINI_API_KEY environment variable missing." })
      };
    }

    // 3. Extract Message Payload Safely
    let userMessage = "";
    let userHistory = "";
    if (typeof args.http?.body === "string") {
      try {
        const thisArgs = JSON.parse(args.http.body);
        userMessage = thisArgs.message;
        userHistory = thisArgs.history;
      } catch (e) {
        userMessage = args.http.body;
      }
    } else if (args.message) {
      userMessage = args.message;
    } else if (args.http?.body?.message) {
      userMessage = args.http.body.message;
    }

    if (!userMessage) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing 'message' field in body." })
      };
    }

    // 4. Set a 25-second timeout safeguard
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    // 5. Call Gemini directly via REST API using the stable gemini-3.5-flash model
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
    
    const requestPayload = {
      contents: [{
        role: "user",
        parts: [{ 
          text: `You are an AI assistant representing a candidate's resume. Answer accurately based ONLY on this context:\n\nResume Data:\n${RESUME_DATA}\n\nHistory: ${userHistory}\n\nQuestion: ${userMessage}` 
        }]
      }]
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestPayload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: "Gemini API rejected the request.", details: data })
      };
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply: replyText })
    };

  } catch (error) {
    if (error.name === 'AbortError') {
      return {
        statusCode: 504,
        headers,
        body: JSON.stringify({ error: "The Gemini API took too long to respond." })
      };
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal execution error.", details: error.message })
    };
  }
}