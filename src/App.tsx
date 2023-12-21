import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import store from "./store/storeConfig";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <AnimatePresence>
          <RouterProvider router={router} />
        </AnimatePresence>
      </Provider>
    </div>
  );
};

export default App;
