import React from "react";
import NavBar from "../Shared/NavBar";
import Footer from "./../Shared/Footer";
import HeaderOfAllAccount from "./HeaderOfAllAccount";
import SideBar from "./SideBar";
import Input from "../card/Input";
import AddCart from "../Expand/AddCart";
const MyAccountPage = () => {
  return (
    <div className="h-[1435px]   ">
      <NavBar />
      <div className="flex justify-center items-center">
        <HeaderOfAllAccount />
      </div>
      {/**Account Section */}
      <div className="grid justify-center items-center">
        <div className="w-full max-w-[1120px] h-auto flex flex-col md:flex-row items-center justify-between mb-16">
          <SideBar />
          <div className="w-full md:w-[851px] h-auto p-4 md:p-[0px_72px] gap-[40px] grid">
            {/**Form 1 */}
            <div className="w-full h-auto gap-[10px] grid">
              <div className="font-bold">Account Details</div>
              <Input labelText={"FIRST NAME *"} placeholder={"First name"} />
              <Input labelText={"LAST NAME *"} placeholder={"Last name"} />
              <Input
                labelText={"DISPLAY NAME *"}
                placeholder={"Display name"}
              />
              <p className="text-blackButton_50 text-[12px]">
                This will be how your name will be displayed in the account
                section and in reviews
              </p>
              <Input labelText={"EMAIL *"} placeholder={"Email"} />
            </div>
            {/**Form 2 */}
            <div className="w-full h-auto gap-[10px] grid">
              <p className="font-bold">Password</p>
              <Input labelText={"OLD PASSWORD"} placeholder={"Old password"} />
              <Input labelText={"NEW PASSWORD"} placeholder={"New password"} />
              <Input
                labelText={"REPEAT NEW PASSWORD"}
                placeholder={"Repeat new password"}
              />
              <AddCart label={"Save Changes"} width={"183px"} height={"52px"} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyAccountPage;
