import { useState } from "react";

export const useFetch = () => {
  const url =
    "https://api-software-economico.up.railway.app/api/v1/auth/forgot-password";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const triggerFetch = async ({ input }) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        setError(
          resultResponse?.message ?? "Error desconocido, contacta a soporte",
        );
        return;
      }

      const data = await response.text();

      const resultResponse = JSON.parse(data);

      setData(resultResponse);
    } catch (error) {
      setError(error.message ?? "Error desconocido, contacta a soporte");
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, data, triggerFetch };
};
