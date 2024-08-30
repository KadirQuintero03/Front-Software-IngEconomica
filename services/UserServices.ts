import { User } from "../interfaces/User";

const API_URL = "https://lmnxjzrh-3001.use2.devtunnels.ms/api/v1/auth/register";

export const createUser = async (user: User): Promise<User> => {
  try {
    console.log("Entro al try del services: ", user);
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Error creando la cuenta.");
    }

    const createdUser: User = await response.json();
    return createdUser;
  } catch (error) {
    console.log("El error al crear la cuenta es:", error);
  }
};
