import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { registerLicense } from "@syncfusion/ej2-base";

import { Navbar, ThemeSettings, Footer, Sidebar } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  ColorPicker,
  Editor,
  Line,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NGaF5cXmVCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXlceXVWQ2FdVkZzWEQ="
);
const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                  style={{ backgroundColor: "blue", borderRadius: "50%" }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">Side bar w-0</div>
            )}

            <div
              className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? "md:ml-72" : "flex-2"
              }`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full max hidden">
                <Navbar />
              </div>
            </div>
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
