import React from "react";
import NavBar from "../card/NavBar";
import HeaderOfAllAccount from "./HeaderOfAllAccount";
import Footer from "../card/Footer";
import SideBar from "./SideBar";
const OrderHistory = () => {
  return (
    <div className="h-[1435px]   ">
      <NavBar />
      <div className="flex justify-center items-center">
        <HeaderOfAllAccount />
      </div>
      <div className="grid justify-center items-center">
        <div className="w-[1120px] h-[828px]  flex justify-between mb-16  ">
          <SideBar />
          {/**Order History Section */}
          <div className="w-[851px] h-[191px] p-[0px_72px] gap-[19px] grid ">
            <p className="font-inter text-[20px] font-semibold leading-[32px]  text-left">
              Order History
            </p>
            <table className="table  ">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}
                <tr className="hover">
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderHistory;
