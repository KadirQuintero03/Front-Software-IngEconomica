import { apiUrl } from "../stores/useApi";
import { setUser } from "../stores/useUser";

export const getUser = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/users/phone/${userId}`, {
      method: "GET",
    });

    const res = JSON.parse(await response.text());

    if ("errors" in res) {
      return;
    }

    setUser(res.message);
    return;
  } catch (e) {
    console.log(e);
    return;
  }
};
