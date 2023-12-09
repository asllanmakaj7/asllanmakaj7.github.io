import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (

    <div className="flex h-full overflow-hidden">
      {/* Sidebar */}
      <Sidebar

        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header
           sidebarOpen={sidebarOpen}
           setSidebarOpen={setSidebarOpen}
        />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-600">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
};

export default Layout;