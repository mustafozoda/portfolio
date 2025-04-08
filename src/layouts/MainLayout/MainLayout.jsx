import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LineNumbers from "../../components/ui/LineNumbers";
import useSidebarStore from "../../store/useSidebarStore";
import SocialMediaIcons from "../../components/ui/SocialMediaIcons";
import useTabStore from "../../store/useTabStore";
import SortableTab from "../../components/ui/layout/SortableTab";
import {
  formatPath,
  getBreadcrumb,
} from "../../components/logic/layout/tabUtils";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";

const MainLayout = () => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const { tabs, activeTab, setActiveTab, closeTab, openTab, reorderTabs } =
    useTabStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);

  const breadcrumb = getBreadcrumb(location.pathname);

  useEffect(() => {
    const pathname = location.pathname;
    const displayName = formatPath(pathname);

    if (!tabs.find((tab) => tab.path === pathname)) {
      openTab(displayName, pathname);
    } else {
      setActiveTab(pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (activeTab !== null) {
      navigate(activeTab);
    }
  }, [activeTab]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = tabs.findIndex((t) => t.path === active.id);
      const newIndex = tabs.findIndex((t) => t.path === over?.id);
      reorderTabs(arrayMove(tabs, oldIndex, newIndex));
    }
  };

  return (
    <div className="w-full h-screen bg-dark2 flex flex-col">
      <div className="w-full text-white border-b border-border bg-dark h-[5%]">
        <Header />
      </div>

      <div className="middle-box flex flex-1 flex-row">
        <div className="left-side-box-for-sidebar border-border flex border-r h-full text-white bg-dark shadow-lg">
          <div className="social-media-icons border-border border-r">
            <SocialMediaIcons />
          </div>
          <div className="h-full flex flex-col">
            <div className=""></div>
            <div
              className={`transition-all duration-300 top-0 left-0 ${
                isSidebarOpen ? "w-44" : "w-0 overflow-hidden"
              }`}
            >
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="right-side-box-for-outlet bg-dark2 flex-col flex justify-center items-center flex-grow h-full">
          <div className="nav-path flex-col w-full h-[8%] flex text-xs text-gray-400 font-code">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              modifiers={[restrictToHorizontalAxis]}
            >
              <SortableContext
                items={tabs.map((t) => t.path)}
                strategy={horizontalListSortingStrategy}
              >
                <div className="h-[60%] border-border font-code  border-b px-4 flex items-center gap-1 overflow-x-auto">
                  {tabs.map((tab) => (
                    <SortableTab
                      key={tab.path}
                      tab={tab}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                      closeTab={closeTab}
                      navigate={navigate}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
            <div className="h-[40%] flex justify-start items-center px-4">
              mustafozoda {">"} {breadcrumb}
            </div>
          </div>
          <div className="under-nav-path w-full flex flex-row h-[92%]">
            <div className="numbers border-border border-r w-[45px]">
              <LineNumbers count={25} />
            </div>
            <div className="w-full h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-dark h-[4%]">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
