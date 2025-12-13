import React from 'react';

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

export interface Outcome {
  icon: React.ReactNode;
  text: string;
}

export const COURSE_CONTEXT = `
Title: AI Confidence & Automation Bootcamp (3-Month Professional Accelerator)
Promise: From “I’m falling behind” to “I’m confidently building real AI solutions at work.”
Target Audience: Professionals who want to build AI confidence, reduce workload, future-proof skills, and become the go-to AI person.
Outcomes: Use ChatGPT/Claude/Nebius precisely, prompt professionally, process multimodal data, build automations (Make.com, n8n), create custom GPTs, integrate AI ethically, and present business cases.
Modules: 
1. AI Foundations & Safety (Privacy, how it works)
2. Intermediate AI Skills (Prompting, Research, Mini-Assistants)
3. AI Automation (Workflows, Decision Trees, Agents)
4. Systems Thinking, Governance & Integration (ROI, SOPs)
5. Innovation Lab / Capstone (Build a real solution)
Details: 12 Weeks, Weekly live sessions + assignments.
`;