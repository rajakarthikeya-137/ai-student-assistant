import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const generateAI = async (prompt, mode) => {

  const res = await API.post("/ai/generate", {
    prompt,
    mode
  });

  return res.data.result;
};