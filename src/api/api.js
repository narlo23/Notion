import { request } from "./base.js";

export const getDocuments = async () => {
  return await request("", { method: "GET" });
};

export const getDocument = async (id) => {
  return await request(`/${id}`, { method: "GET" });
};

export const createDocument = async (document) => {
  return await request("", { method: "POST", body: JSON.stringify(document) });
};

export const modifyDocument = async (document, id) => {
  return await request(`/${id}`, {
    method: "PUT",
    body: JSON.stringify(document),
  });
};

export const deleteDocument = async (id) => {
  return await request(`/${id}`, {
    method: "DELETE",
  });
};
