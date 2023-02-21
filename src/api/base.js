export const API_END_POINT =
  " https://cnu1.notion.edu-api.programmers.co.kr/documents";

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-username": "narlo",
      },
    });

    if (res.ok) {
      return await res.json();
    }

    throw new Error("API Call Failed");
  } catch (e) {
    alert(e.message);
  }
};
