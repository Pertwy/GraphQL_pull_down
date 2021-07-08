import React, {useState} from "react";
import "./App.css";
import GetUsers from "./components/AllUsers/AllUsers"


export default function App(){
  const [role, setRole] = useState("")

  return (
    <div className="app">
      <header className="app-header">
        <img src="https://uploads-ssl.webflow.com/60b0ad3e3cf853012e3248a9/60b7a83b73932220634775db_gradient%20peach%20straight.svg" loading="lazy" alt="" className="header-gradient"/>
      </header>

      <body>

        <div className="user-title-and-select-container">
          <h2 className="acre-font">Search all users</h2>

          <select
          onChange={e => setRole(e.target.value)}
          className="user-selector">
            <option value="">Select Role</option>
            <option value="ADMIN">Admin</option>
            <option value="BROKER">Broker</option>
            <option value="ADVISOR">Advisor</option>
          </select>
        </div>


        <GetUsers className="above" role={role}/>
      </body>

    </div>
  );
}



