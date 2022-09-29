import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Home,
  Calendar,
  Inventory,
  Suppliers,
  Accounting,
  Model,
  Sales,
  Customers,
  PartSpecifications,
  Operations,
  Purchasing,
  Reference,
  OpenOrders,
  ColorPicker,
  ColorMapping,
  Area,
  Bar,
  Line,
  Pie,
  Financial,
  Pyramid,
  Stacked,
} from "./pages";

import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";


const App = () => {

 const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div  className={currentMode === 'Dark' ? 'dark' : ''}>

      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" postion="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              {" "}
              <Sidebar />{" "}
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full"
                : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2"
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>

            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/calendar" element={<Calendar />} />

                {/* Pages */}
                <Route path="/customers" element={<Customers />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route
                  path="/part-specifications"
                  element={<PartSpecifications />}
                />
                <Route path="/open-orders" element={<OpenOrders />} />
                <Route path="/model" element={<Model />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/reference" element={<Reference />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/purchasing" element={<Purchasing />} />
                <Route path="/operations" element={<Operations />} />
                <Route path="/accounting" element={<Accounting />} />

                {/* Charts */}
                <Route path="line" element={<Line />} />
                <Route path="bar" element={<Bar />} />
                <Route path="area" element={<Area />} />
                <Route path="pie" element={<Pie />} />
                <Route path="pyramid" element={<Pyramid />} />
                <Route path="stacked" element={<Stacked />} />
                <Route path="financial" element={<Financial />} />
                <Route path="color-picker" element={<ColorPicker />} />
                <Route path="color-mapping" element={<ColorMapping />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
