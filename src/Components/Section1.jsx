import React from "react";
import BackgroundImage from "../Images/Background.svg";
import Section from "../Images/Section1.svg";

export default function Section1() {
  return (
    <div
      className="bg-no-repeat bg-fit bg-center h-screen"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="h-screen flex items-center justify-center mx-[10%]">
        <div>
          <h1 className="text-[40px] font-[700] text-[#2E2E2E] w-[600px] mt-[-20%]">
            {" "}
            <span className="text-[#ECB65C]">
              Electronic Resources 
              and
            </span>{" "}
            Integrated Library System
          </h1>
          <p className="text-[18px] font-[400] w-[770px]">
            A comprehensive library management software that effectively manages
            all forms of electronic and physical resources. It provides seamless
            access to eBooks, published dissertations, research papers, and
            other valuable resources
          </p>
        </div>
        <img src={Section} alt="" className="mt-[-5%]" />
      </div>
    </div>
  );
}
