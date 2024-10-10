import { apiUrl } from "../stores/useApi";

export const userTransaction = async (transaction) => {
  try {
    console.log(transaction);
    const response = await fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });

    const res = JSON.parse(await response.text());

    if ("errors" in res) {
      return { error: res.errors.join(".\n") };
    }
    return res.message;
  } catch (_) {
    return { error: "Verifique sus datos e intente de nuevo." };
  }
};