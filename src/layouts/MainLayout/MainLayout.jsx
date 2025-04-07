import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import LineNumbers from "../../components/ui/LineNumbers";
import { useLocation } from "react-router-dom";
import useSidebarStore from "../../store/useSidebarStore";
import SocialMediaIcons from "../../components/ui/SocialMediaIcons";
import useTabStore from "../../store/useTabStore";
import { useNavigate } from "react-router-dom";
import { LuX } from "react-icons/lu";
import Home from "../../pages/Home/Home";
const MainLayout = () => {
  const { tabs, activeTab, setActiveTab, closeTab } = useTabStore();
  const navigate = useNavigate();

  const location = useLocation();
  const path = location.pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" > ");

  const breadcrumb = `Portfolio > ${path || "Home"}`;

  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  return (
    <div className="w-full container h-screen bg-dark2 flex flex-col ">
      <div className="w-full  text-white border-b border-border bg-dark h-[5%]">
        <Header />
      </div>
      <div className="middle-box  flex flex-1 flex-row">
        <div className="left-side-box-for-sidebar border-border flex border-r h-full  text-white bg-dark   shadow-lg ">
          <div className="social-media-icons border-border border-r ">
            <SocialMediaIcons />
          </div>
          <div className="h-full flex flex-col ">
            <div className=""></div>
            <div
              className={`transition-all duration-300 top-0 left-0 ${
                isSidebarOpen ? "w-48" : "w-0  overflow-hidden"
              }`}
            >
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="right-side-box-for-outlet bg-dark2 flex-col flex justify-center items-center flex-grow h-full">
          <div className="nav-path flex-col w-full h-[8%] flex  text-xs text-gray-400 font-mono">
            <div className="h-[60%] border-border  border-b  px-4 flex items-center gap-1">
              {
                tabs.map((tab) => (
                  <div
                    key={tab.path}
                    onClick={() => {
                      setActiveTab(tab.path);
                      navigate(tab.path);
                    }}
                    className={`flex justify-center min-w-12 items-center gap-2 text-xs px-3 py-1 border rounded-[8px] cursor-pointer
                    ${
                      activeTab === tab.path
                        ? "bg-dark2 hover:bg-dark   border-0 font-bold"
                        : "bg-dark border-none hover:bg-dark2 text-gray-400"
                    }`}
                  >
                    {tab.name}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTab(tab.path);
                      }}
                      className=" rounded-[5px] hover:bg-dark p-1"
                    >
                      <LuX
                      // style={{
                      //   ...(activeTab === tab.path
                      //     ? { display: "block" }
                      //     : { display: "none" }),
                      // }}
                      />
                    </button>
                  </div>
                ))
                // )
              }
            </div>
            <div className=" h-[40%] flex justify-start items-center px-4">
              mustafozoda {">"} {breadcrumb}
            </div>
          </div>

          <div className="under-nav-path w-full flex flex-row h-[92%]">
            <div className="numbers  border-border border-r w-[45px]">
              <LineNumbers count={25} />
            </div>
            {tabs.length > 0 ? (
              <div className="p-5 w-full h-full">
                <Outlet />
              </div>
            ) : (
              <div className="w-full  bg-dark2 h-full">
                <Home />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full bg-dark h-[5%]">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
