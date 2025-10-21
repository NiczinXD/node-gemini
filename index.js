import { GoogleGenAI } from "@google/genai";
import { fazerPergunta } from "./pergunta.js";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCha11uVy0FfAMnTWQKn2hxSnndk8qSh1I",
});

async function main() {
  const user_input = await fazerPergunta("Qual o seu destino? ");
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction:
        "Você é um site de viagens e deve responder somente sobre esse assunto. " +
        "Caso a pergunta não seja sobre viagens, responda que só pode responder perguntas sobre viagens.",
    },
    contents: user_input,
  });

  console.log(response.text);
}

await main();