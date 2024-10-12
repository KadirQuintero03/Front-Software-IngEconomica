import { apiUrl } from "../stores/useApi";

export const request = async (credit) => {
  try {
    const response = await fetch(`${apiUrl}/credit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credit),
    });

    const res = JSON.parse(await response.text());

    if ("errors" in res) {
      return { error: res.errors.join(".\n") };
    }
    return res;
  } catch (e) {
    console.log(e);
    return { error: "Revise los campos e intente de nuevo." };
  }
};
