import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateExcuse = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Hãy viết một lý do thật hài hước, thảm thương và ngắn gọn (dưới 30 từ) bằng tiếng Việt để một Video Editor tên là Trần Đức xin tiền donate từ cộng đồng mạng. Lý do có thể liên quan đến deadline, máy tính hỏng, đói bụng, bị sếp Hunonic mắng, hoặc đau lưng.",
      config: {
        temperature: 1.2, // High creativity
      }
    });
    return response.text || "Máy chủ AI cũng đang đói, không nghĩ ra lý do...";
  } catch (error) {
    console.error("Gemini failed:", error);
    return "Lỗi kết nối vệ tinh. Nhưng Trần Đức vẫn đói.";
  }
};

export const generateThankYou = async (donorName: string, amount: number): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Viết một lời cảm ơn ngắn gọn, hài hước và "lầy lội" gửi tới ${donorName} vì đã donate ${amount} VNĐ cho Editor Trần Đức.`,
            config: {
                temperature: 1,
            }
        });
        return response.text || "Cảm ơn bạn hiền!";
    } catch (error) {
        console.error("Gemini failed:", error);
        return "Đã nhận được tiền. Đa tạ!";
    }
}