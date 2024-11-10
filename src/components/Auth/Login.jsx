import React, { useState } from "react";

const Login = ({handleLogin}) => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")

  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl shadow-lg shadow-green-500">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2  outline-none bg-transparent placeholder:text-gray-400 border-emerald-600 py-3 
                 text-xl px-5 rounded-full"
            placeholder="Enter your Email"
          />
          <input type="password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required
            className="border-2  outline-none bg-transparent placeholder:text-gray-400 border-emerald-600 py-3 text-xl mt-4 px-5 rounded-full"
            placeholder="Enter your Password"
          />
          <button className=" mt-5 border-none outline-none  placeholder:text-white bg-emerald-600 py-3 text-xl px-5 rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  )
};

export default Login;
