import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Shared/Header/Header";
import Home from "./component/Pages/Home/Home/Home";
import Footer from "./component/Shared/Footer/Footer";
import AboutMe from "./component/Pages/AboutMe/AboutMe";
import Login from "./component/Pages/Login/Login/Login";
import Register from "./component/Pages/Login/Register/Register";
import NotFoundPage from "./component/Shared/NotFoundPage/NotFoundPage";
import Blogs from "./component/Pages/Blogs/Blogs";
import Checkout from "./component/Pages/Checkout/Checkout";
import RequireAuth from "./component/Pages/Login/RequireAuth/RequireAuth";
import Services from "./component/Pages/Home/Services/Services";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/checkout" element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;


