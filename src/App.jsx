import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "/src/store";
import RoutesComponent from "/src/components/routes/RoutesComponent";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
