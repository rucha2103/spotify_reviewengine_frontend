const API_URL = "https://myself-tracked-compressed-london.trycloudflare.com";

export const fetchInsights = async () => {
  try {
    const response = await fetch(`${API_URL}/insights`);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching insights:", error);
    return [];
  }
};

export const refreshInsights = async () => {
  try {
    const response = await fetch(`${API_URL}/refresh-insights`, { method: "POST" });
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error refreshing insights:", error);
    return null;
  }
};

export const checkApiHealth = async () => {
  try {
    const response = await fetch(`${API_URL}/health`);
    return response.status === 200;
  } catch {
    return false;
  }
};