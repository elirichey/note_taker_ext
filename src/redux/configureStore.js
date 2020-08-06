import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/index";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["nav", "resources"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  let store = createStore(persistedReducer, composeWithDevTools());
  let persistor = persistStore(store);
  return { store, persistor };
}

export default configureStore;
