import React, { useReducer } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import { Outlet } from "react-router-dom";
import DarkFooter from "components/Footers/DarkFooter";

import { reducer as MainReducer } from "store/reducer"

export { TitleContext }

const initState = MainReducer()

const TitleContext = React.createContext([initState, () => { }])

function Index() {


  const [reducer, dispatch] = useReducer(MainReducer, initState)

  return (

    <div id="topSection">
      <TitleContext.Provider value={[reducer, dispatch]}>
        <IndexNavbar />
        <Outlet />
        <DarkFooter />
      </TitleContext.Provider>
      {/* <ScrollTopButton /> */}
    </div>
  );
}

export default Index;
