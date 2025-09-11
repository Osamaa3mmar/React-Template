import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* موجود ناف بار جاهزه اذا بدك شيل الكومنت عنها  */}
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
}
