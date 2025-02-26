import React from "react";
import LoginLeftDiv from "../component/Login/LoginLeftDiv";
import LoginRightDiv from "../component/Login/LoginRightDiv";
import LogSignNav from "../component/LogSignNav";

const Login = () => {
  return (
    <div className="bg-gradient-to-b from-[#FF406E] to-[#FFFFFF] min-h-screen">
      {/* Logo */}
      <LogSignNav />

      {/* Main container with left and right divs */}
      <main className="flex flex-col lg:flex-row items-center justify-center w-full pt-[100px]">
        {/* Left Div */}
        <LoginLeftDiv />

        {/* Right Div */}
        <LoginRightDiv />
      </main>
    </div>
  );
};

export default Login;