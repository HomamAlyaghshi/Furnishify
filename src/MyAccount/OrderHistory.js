import React from "react";
import NavBar from "../Shared/NavBar";
import HeaderOfAllAccount from "./HeaderOfAllAccount";
import Footer from "./../Shared/Footer";
import SideBar from "./SideBar";

const OrderHistory = () => {
  return (
    <div className="h-auto">
      <NavBar />
      <div className="flex justify-center items-center">
        <HeaderOfAllAccount />
      </div>
      <div className="grid justify-center items-center">
        <div className="w-full max-w-[1120px] h-auto flex flex-col items-center md:flex-row justify-between mb-16">
          <SideBar />
          {/** Order History Section */}
          <div className="w-full max-w-[851px] p-4 md:p-[0px_72px] gap-[19px] grid">
            <p className="font-inter text-[20px] font-semibold leading-[32px] text-left">
              Order History
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                {/* head */}
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2">#</th>
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Job</th>
                    <th className="border border-gray-300 p-2">
                      Favorite Color
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="hover">
                    <th className="border border-gray-300 p-2">1</th>
                    <td className="border border-gray-300 p-2">Cy Ganderton</td>
                    <td className="border border-gray-300 p-2">
                      Quality Control Specialist
                    </td>
                    <td className="border border-gray-300 p-2">Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover">
                    <th className="border border-gray-300 p-2">2</th>
                    <td className="border border-gray-300 p-2">Hart Hagerty</td>
                    <td className="border border-gray-300 p-2">
                      Desktop Support Technician
                    </td>
                    <td className="border border-gray-300 p-2">Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="hover">
                    <th className="border border-gray-300 p-2">3</th>
                    <td className="border border-gray-300 p-2">Brice Swyre</td>
                    <td className="border border-gray-300 p-2">
                      Tax Accountant
                    </td>
                    <td className="border border-gray-300 p-2">Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderHistory;
