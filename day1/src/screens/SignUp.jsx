import React from "react";
import LogSignNav from "../component/LogSignNav";
import SignupLeftDiv from "../component/SignUp/SignupLeftDiv";
import SignupRightDiv from "../component/SignUp/SignupRightDiv";

const Signup = () => {
  return (
    <div className="bg-gradient-to-b from-[#FF406E] to-[#FFFFFF] min-h-screen">
      <LogSignNav />
      <main className="flex flex-col lg:flex-row items-center justify-center w-full pt-[100px]">
        <SignupLeftDiv />
        <SignupRightDiv />
      </main>
    </div>
  );
};

export default Signup;
