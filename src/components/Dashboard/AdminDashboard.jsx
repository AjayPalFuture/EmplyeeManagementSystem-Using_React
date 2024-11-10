import React from "react";
import Header from "../others/Header";
import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} />
     <CreateTask/>
     <AllTask/>
    </div>
  );
};

export default AdminDashboard;
