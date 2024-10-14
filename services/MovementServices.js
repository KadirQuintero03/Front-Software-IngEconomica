import { apiUrl } from "../stores/useApi";

export default async function movements(userId) {
  try {
    const response = await fetch(`${apiUrl}/getMovements/${userId}`, {
      method: "GET",
    });

    const res = JSON.parse(await response.text());

    if ("errors" in res) {
      return { error: res.errors.join(".\n") };
    }

    return res.message;
  } catch (e) {
    return { error: e };
  }
}
