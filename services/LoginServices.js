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

    if (!response.ok) {
      return { error: response.value };
    }

    return response.value;
  } catch (_) {
    return { error: "Revise las credenciales e intente de nuevo." };
  }
};
