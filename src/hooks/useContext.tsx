import axios from "axios";
import { useEffect, useState } from "react";
import { BackendURL } from "../config";

export function useContext() {
  const [contents, setContents] = useState([]);

  function fetch(){
    axios
      .get(`${BackendURL}/api/v1/content`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setContents(response.data.contents);
      });
  }

  useEffect(() => {
    fetch();
    let interval = setInterval(()=> {
        fetch()
    }, 10*5000);

    return () => {
        clearInterval(interval);
    }
  }, []);

  return contents;
}
