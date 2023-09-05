import Sidebar from "@/components/dashboard/SideBar";
import Link from "next/link";

function DashBoard() {
  return (
    // <!-- component -->
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800 pt-16">
      <aside class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500">
        <div class="sidebar-header flex items-center justify-center py-4">
          <div class="inline-flex">
            <a href="#" class="inline-flex flex-row items-center">
              <img src="/img/logo.png" className="h-12" />
            </a>
          </div>
        </div>
        <Sidebar />
      </aside>
      <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <div class="main-content flex flex-col flex-grow p-4">
          <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1>
        </div>
      </main>
    </div>
  );
}

export default DashBoard;
