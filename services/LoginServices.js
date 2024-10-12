import { apiUrl } from "../stores/useApi";

export const login = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const res = JSON.parse(await response.text());

    console.log(res);

    if ("errors" in res) {
      return { error: res.errors.join(".\n") };
    }
    return res.message;
  } catch (_) {
    return { error: "Revise las credenciales e intente de nuevo." };
  }
};
