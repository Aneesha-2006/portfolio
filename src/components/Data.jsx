import React, { useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata";

function Data() {
  const [users, setUsers] = useState([]);

  async function fechUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    fechUsers();
  }, []);


  return (
    <Showdata users={users}/>
  );
}

export default Data;