import { API_BASE_URL, DEBUG_MODE } from "@/utils/Constants";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("env>>>>", DEBUG_MODE, API_BASE_URL);
  }, [])

  return (
    <>
      Hello World!
    </>
  );
};

export default Home;
