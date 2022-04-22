import React from "react";
import {Dropdown, Option} from "./Dropdown";

function Roles({role, setRole}) {
  return (
    <div>
      <Dropdown role={role} setRole={setRole}>
        <Option selected value="Please Select Role" />
        <Option value="Superadmin" />
        <Option value="Businessdeveloper" />
      </Dropdown>
    </div>
  );
}

export default Roles;
