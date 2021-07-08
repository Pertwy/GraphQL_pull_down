import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {  GET_USERS } from "../../GraphQL/Queries";
import User from "../User/User";

function GetUsers(props) {
  const { error, loading, data } = useQuery(GET_USERS);
  const [users, setUsers] = useState([]);
  const [usersResetData, setUsersResetData] = useState([]);


  useEffect(() => {
    if (data) {handleSetUserData(data.users.filter(user => user.name.length > 0))}
    if(props.role){setUsersResetData(users.filter(user => user.role.includes(props.role)))}
  }, [data, props]);


  function handleSetUserData(data){
    setUsers(data)
    setUsersResetData(data)
  }
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}</p>;

  return (
    <div>
      {usersResetData.map((user, index) => {
        return(
          <User key={index} user={user}/>
        )
      })}
    </div>
  );
}

export default GetUsers;

