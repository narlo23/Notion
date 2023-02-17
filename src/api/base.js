const API_END_POINT =
  " https://cnu1.notion.edu-api.programmers.co.kr/documents";

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "x-username": "narlo",
      },
    });

    if (!res.ok) {
      throw new Error("API Call Failed");
    }

    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
