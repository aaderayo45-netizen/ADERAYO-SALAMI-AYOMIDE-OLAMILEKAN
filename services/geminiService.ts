
import { GoogleGenAI } from "@google/genai";
import { CAR_INVENTORY } from "../constants";

export class GeminiAssistantService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getCarRecommendations(userMessage: string): Promise<string> {
    const inventoryContext = JSON.stringify(CAR_INVENTORY.map(car => ({
      id: car.id,
      make: car.make,
      model: car.model,
      price: car.price,
      type: car.type,
      description: car.description
    })));

    const prompt = `You are a professional sales assistant for "AO Premium Motors". 
    Here is our current inventory: ${inventoryContext}.
    
    A customer says: "${userMessage}"
    
    Rules:
    1. Be polite, professional, and enthusiastic.
    2. Recommend 1-3 specific cars from our inventory based on their needs.
    3. If no cars match perfectly, suggest the closest alternatives.
    4. Mention key features of the cars you recommend.
    5. Keep the response concise but helpful (max 200 words).
    6. Do not make up cars that are not in the list.`;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          temperature: 0.7,
          topP: 0.9,
          topK: 40
        }
      });

      return response.text || "I'm sorry, I couldn't find a perfect match. Could you tell me more about what you're looking for?";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having a bit of trouble connecting to our database. Please feel free to browse our inventory manually!";
    }
  }
}

export const geminiService = new GeminiAssistantService();
