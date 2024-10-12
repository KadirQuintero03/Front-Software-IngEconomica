import { apiUrl } from "../../stores/useApi";
import { setTransaction } from "../../stores/useUser";

export const userTransaction = async (transaction) => {
  try {
    const response = await fetch(`${apiUrl}/transfer`, {
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

    setTransaction(res.message)

    return res.message;
  } catch (e) {
    console.log(e)
    return { error: "Verifique sus datos e intente de nuevo." };
  }
};
