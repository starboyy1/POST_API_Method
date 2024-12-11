import { useEffect, useState } from "react";
import instance from "../axios/Axios";
import Endpoints from "../axios/Endpoints";
import Env from "../config/Env";

const useFetch = (endpoint) => {
  const [isData, setIsData] = useState(null); 
  const [isError, setIsError] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 

  const fetchData = async (input) => { // Accept input as a parameter
    setIsLoading(true);
    try {
      const res = await instance.post(endpoint, input); // Send input in POST request
      console.log("API Response Data:", res.data);
      if (res.status === 200) {
        setIsData(res.data); // Update isData with response data
      }
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isData, isError, isLoading, fetchData };
};

export default useFetch;
