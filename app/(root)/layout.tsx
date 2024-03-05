import Sidebar from "@/components/shared/Sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root-container">
      <Sidebar />
      <div className="wrapper">{children}</div>
    </div>
  );
}

export default Layout;
