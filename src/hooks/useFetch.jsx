import { useEffect, useState } from "react";

const DEFAULT_HEADER = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};

const useFetch = ({ url = "", method = "GET", header = {} }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
        method: method,
        headers: {
          ...DEFAULT_HEADER,
          ...header,
        },
      });

      const data = await res.json();
      if (data) {
        setData(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method]);
  return { isLoading, data };
};
export default useFetch;
