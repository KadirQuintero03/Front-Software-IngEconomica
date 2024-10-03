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
  } catch (error) {
    console.log("Error al iniciar sesion:", error);
    return { error: "Revise las credenciales e intente de nuevo." };
  }
};
