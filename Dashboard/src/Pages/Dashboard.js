import React, {useState, createContext} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SideBar from "../components/Sidebar/Sidebar";
import Home from "./Home";
import ContactsPage from "./ContactsPage";
import LeadsPage from "./LeadPage";
import SubscribersPage from "./SubscribersPage";
import SchedulePage from "./SchedulePage";
import {
  BurgerMenu,
  Searchbar,
  SearchIcon,
  Topbar,
  TopbarItems,
  LogOut,
} from "../../src/components/Topbar/TopbarStyles";
const UserInfoContext = createContext();
function Dashboard({userToken, setUserToken}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newSearch, setNewSearch] = useState("");
  const handleChange = (e) => {
    setNewSearch(e.target.value);
  };
  const sidebartoggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const deleteCookie = () => {
    localStorage.removeItem("token");
    setUserToken("");
  };

  return (
    <>
      <UserInfoContext.Provider value={{userToken, newSearch}}>
        <Router>
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
              <LogOut onClick={deleteCookie} />
            </TopbarItems>
          </Topbar>
          <SideBar sidebarOpen={sidebarOpen} sidebartoggle={sidebartoggle} />
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
          </Routes>
        </Router>
      </UserInfoContext.Provider>
    </>
  );
}

export default Dashboard;
export {UserInfoContext};
