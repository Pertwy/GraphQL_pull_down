import React from "react";

import CreateCustomerButton from "../CreateCustomerButton/CreateCustomerButton";
import "./User.css"
  
export default function User(props){
  const {name, role, permissions} = props.user
    return (

      <section data-testid={name} className="user-container">
        
        <div className="name-container">
          <h3 className="name-container-text">{name}</h3>

          {permissions.createCustomer&& 
            <CreateCustomerButton/>
          }
        </div>  

        <div className="role-container">
          {role.map((role, index) =>{
            return(
              <h5 key={index} className="role-container-text">{role}</h5>
            )
          })}
        </div>
      </section>);
}