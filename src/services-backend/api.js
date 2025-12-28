const API_URL = "https://script.google.com/macros/s/AKfycbwEjOSwDQfHz3yEik4RMLkZj0NPbJ24ow6DZR-UoND5ZWKboYVuFFmoSQ3H8-1HSjPDnA/exec";

export const login = (password) =>
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ action: "login", password })
  }).then(r => r.json());

export const addEntry = (data, token) =>
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ action: "add", token, ...data })
  });

export const searchEntry = (query, token) =>
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ action: "search", token, query })
  }).then(r => r.json());

export const updateEntry = (data, token) =>
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ action: "update", token, ...data })
  });

export const deleteEntry = (id, token) =>
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ action: "delete", token, id })
  });
