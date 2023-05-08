import React, { useReducer } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import { Outlet } from "react-router-dom";
import DarkFooter from "components/Footers/DarkFooter";

import { reducer as MainReducer } from "store/reducer"

const TitleContext = React.createContext()
export { TitleContext }

const initState = MainReducer()
console.log("🚀 ~ file: Index.jsx:12 ~ initialState:", initState)

function Index() {

  const reducer = useReducer(MainReducer, initState)

  return (

    <div id="topSection">
      <TitleContext.Provider value={reducer}>
        <IndexNavbar />
        <Outlet />
        <DarkFooter />
      </TitleContext.Provider>
      {/* <ScrollTopButton /> */}
    </div>
  );
}

export default Index;
