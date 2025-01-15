import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Update from "./pages/Update";
import Search from "./pages/Search";
import EditBook from "./pages/EditBook";
import Registration from "./component/Registration";
import Login from "./component/Login";
import Dashbord from "./pages/Dashbord"; // Consider renaming this file to Dashboard for consistency
import ResetPass from "./pages/ResetPass";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="repass" element={<ResetPass />} />
            <Route path="product" element={<Product />} />
          </Route>

          {/* Dashboard Layout */}
          <Route path="dashboard" element={<Dashbord />}>

            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
            <Route path="search" element={<Search />} />
            <Route path="update" element={<Update />} />
            <Route path="editdata/:id" element={<EditBook />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
