import React, {useState, createContext} from "react";
import SideBar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import ContactsPage from "./Pages/ContactsPage";
import LeadsPage from "./Pages//LeadPage";
import SubscribersPage from "./Pages/SubscribersPage";
import SchedulePage from "./Pages/SchedulePage";
import SignIn from "./Pages/SignIn";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {
  BurgerMenu,
  Searchbar,
  SearchIcon,
  Topbar,
  TopbarItems
} from "./components/Topbar/TopbarStyles";
import Select from "./components/Select/Select";

const SearchContext = createContext();

function App() {
  const [newSearch, setNewSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebartoggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleChange = (e) => {
    setNewSearch(e.target.value);
  };
  const deleteCookie = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <Router>
        <SideBar sidebarOpen={sidebarOpen} sidebartoggle={sidebartoggle} />
        <Topbar>
          <BurgerMenu isOpen="true" onClick={sidebartoggle} />
          <TopbarItems isOpen={sidebarOpen}>
            <Searchbar>
              <SearchIcon />
              <input
                type="text"
                placeholder="Global Search..."
                onChange={handleChange}
              />
            </Searchbar>
            <Select props = {deleteCookie} />
          </TopbarItems>
        </Topbar>
        <SearchContext.Provider value={newSearch}>
          <Routes>
            <Route
              path="/"
              exact
              element={<Home sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/contacts"
              exact
              element={<ContactsPage sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/leads"
              exact
              element={<LeadsPage sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/subscribers"
              exact
              element={<SubscribersPage sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/schedule"
              exact
              element={<SchedulePage sidebarOpen={sidebarOpen} />}
            />
            <Route path="/signin" exact element={<SignIn />} />
          </Routes>
        </SearchContext.Provider>
      </Router>
    </>
  );
}

export default App;
export {SearchContext};
