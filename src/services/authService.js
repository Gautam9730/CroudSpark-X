import { apiRequest } from "./api";

export function login(data) {
  return apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function register(data) {
  return apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getMe() {
  return apiRequest("/auth/me");
}

export function logout() {
  return apiRequest("/auth/logout", { method: "POST" });
}
