import React from "react";
import { Outlet } from "react-router-dom";
import ShoppingHeader from "./ShoppingHeader";

const ShoppingView = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <ShoppingHeader></ShoppingHeader>
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingView;
