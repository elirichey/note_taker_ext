import React from "react";
import { render } from "react-dom";
import RouterContainer from "./router/RouterContainer";
import "./assets/sass/main.sass";
// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./redux/configureStore";
const { store, persistor } = configureStore();

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterContainer />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
