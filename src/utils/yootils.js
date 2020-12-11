// export const userAuthToken = () => {};
let userStore;
import { user } from "../stores";
// import envURL from "../env-url";
// import { goto } from "@roxi/routify";
const userStoreUnsub = user.subscribe((value) => {
  userStore = value;
});

export function updateUserStore(data) {
  let authToken = JSON.parse(localStorage.getItem("user")).auth_token;
  user.set(data);
  user.update((theStore) => {
    return Object.assign(theStore, {
      auth_token: authToken,
    });
  });
}
