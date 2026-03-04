import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.AI_API_KEY
});

const buildPrompt = (input, mode) => {

  if (mode === "explain") {
    return `
You are an experienced university instructor.

Explain the concept clearly for a beginner.

Rules:
- Use simple language
- Maximum 150 words
- Use headings and bullet points

Format:

### Concept Explanation
Short explanation.

### Key Points
• Point 1
• Point 2
• Point 3

Concept:
${input}
`;
  }

  if (mode === "mcq") {
    return `
You are an academic question generator.

Generate 3 multiple-choice questions.

Format clearly like:

Question 1:
A.
B.
C.
D.
Answer:

Topic:
${input}
`;
  }

  if (mode === "summarize") {
    return `
Summarize the following text.

Format:

### Summary
• Bullet point
• Bullet point
• Bullet point

Text:
${input}
`;
  }

  if (mode === "improve") {
    return `
Improve the writing quality of this text.

Make it:
- Clear
- Professional
- Grammatically correct

Text:
${input}
`;
  }
};

export const generateFromGemini = async (prompt, mode) => {

  const structuredPrompt = buildPrompt(prompt, mode);

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: structuredPrompt
  });

  return response.text;
};  