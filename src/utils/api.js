let userStore;
import { user } from "../stores";
import envURL from "../env-url";
import { goto } from "@roxi/routify";
const userStoreUnsub = user.subscribe((value) => {
  userStore = value;
});
const request = (method) => async (endpoint, data) => {
  // const envURL = `https://unusuallyfocused-backend.herokuapp.com`;
  return fetch(`${envURL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: userStore.auth_token,
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return await response.json().catch((errors) => ({}));
    } else if (response.statusText === "Unprocessable Entity") {
      return {};
    } else {
      // localStorage.removeItem("user");
      // $goto("/login", {}, true);
      throw new Error(response.statusText);
    }
    userStoreUnsub();
  });
};

const Api = {
  get: request("GET"),
  post: request("POST"),
  patch: request("PATCH"),
  put: request("PUT"),
  delete: request("DELETE"),
};

export default Api;
