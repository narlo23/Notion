import { request } from "./base.js";
import { API_END_POINT } from "./base.js";
export const getDocuments = async () => {
  return await request("", { method: "GET" });
};

export const getDocument = async (id) => {
  return await request(`/${id}`, { method: "GET" });
};

export const createDocument = async (id) => {
  return await fetch(API_END_POINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-username": "narlo",
    },
    body: JSON.stringify({
      title: "test",
      parent: id,
    }),
  });
};

export const modifyDocument = async (id) => {
  return await fetch(`${API_END_POINT}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-username": "narlo",
    },
    body: JSON.stringify({
      title: "test",
      content: "modify test",
    }),
  });
};

export const deleteDocument = async (id) => {
  return await request(`/${id}`, {
    method: "DELETE",
  });
};
