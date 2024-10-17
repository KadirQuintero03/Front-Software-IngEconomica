import { apiUrl } from "../stores/useApi";
import { setUser } from "../stores/useUser";

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
    console.log(res)
    
    if ("success" in res) {
      return { error: res.message };
    }

    if ("errors" in res) {
      return { error: res.errors.join(".\n") };
    }

    setUser(res.message);

    return res.message;
  } catch (e) {
    console.log(e);
    return { error: "Revise las credenciales e intente de nuevo." };
  }
};
