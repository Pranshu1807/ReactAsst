import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import store from "./redux/reducers";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { Navigate } from "react-router-dom";
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home></Home>
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
export function ProtectedRoutes(props) {
  if (localStorage.getItem("profile")) {
    return props.children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
}
export default App;
