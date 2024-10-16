import { apiUrl } from "../stores/useApi";
import { getPhoneNumber } from "../stores/useUser";

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
    return { error: e };
  }
};

export const getPrestamo = async () => {
  try {
    const response = await fetch(`${apiUrl}/credit/${getPhoneNumber()}`, {
      method: "GET",
    });

    const res = JSON.parse(await response.text());

    if ("errors" in res) {
      return { error: res.errors.join(".\n") };
    }
    return res.message;
  } catch (e) {
    return { error: e };
  }
};
