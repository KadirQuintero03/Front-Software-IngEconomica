import { apiUrl } from "../stores/useApi";

export const createUser = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const res = JSON.parse(await response.text());

    if ("errors" in res) {
      return { error: res.errors.join(".\n") };
    }

    return res.message;
  } catch (e) {
    console.log(e);
    return { error: "Error, verifique los datos ingresados." };
  }
};
