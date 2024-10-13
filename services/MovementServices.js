import { apiUrl } from "../stores/useApi";

export default async function movements(userId) {
  try {
    const response = await fetch(`${apiUrl}/getMovements/${userId}`, {
      method: "POST",
    });

    const res = JSON.parse(await response.text());

    console.log(res);
    if ("errors" in res) {
      return { error: res.errors.join(".\n") };
    }

    return res.message;
  } catch (e) {
    console.log(e);
    return { error: "Revise las credenciales e intente de nuevo." };
  }
}
