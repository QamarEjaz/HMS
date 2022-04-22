import React, {useState} from "react";
import {
  BurgerMenu,
  LogOut,
  Searchbar,
  SearchIcon,
  Topbar,
  TopbarItems,
} from "./TopbarStyles";

const TopBar = ({sidebarOpen, sidebartoggle}) => {
  const [text, setText] = useState("");
  const clearInput = () => {
    setText("");
  };
  const Search = (evt) => {
    if (evt.key === "Enter") setText("");
  };
  return (
    <Topbar>
      <BurgerMenu isOpen="true" onClick={sidebartoggle} />
      <TopbarItems isOpen={sidebarOpen}>
        <Searchbar>
          <SearchIcon />
          <input
            type="text"
            placeholder="Global Search..."
            onChange={(e) => setText(e.target.value)}
            value={text}
            onKeyPress={Search}
          />
        </Searchbar>
      </TopbarItems>
    </Topbar>
  );
};

export default TopBar;
