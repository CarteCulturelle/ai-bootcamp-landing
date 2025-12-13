import { GoogleGenAI } from "@google/genai";
import { COURSE_CONTEXT } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePersonalizedInsight = async (jobTitle: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are an expert career strategist for an AI Bootcamp.
      
      Course Context:
      ${COURSE_CONTEXT}

      User's Job Title: ${jobTitle}

      Task: Write a short, powerful, single-paragraph statement (max 40 words) explaining exactly why this specific 3-month bootcamp is a game-changer for a person with this specific job title. Focus on the specific value add for their role. Speak directly to them using "You".
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Enhance your career with AI skills tailored to your profession.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "This bootcamp is designed to transform your workflow and position you as a leader in the AI era.";
  }
};