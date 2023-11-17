import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Nav from "../component/Nav/Nav";

export default function Root() {
    return (
      <>
        <Nav></Nav>

        <Header></Header>
        
        <Outlet></Outlet>
  
        <Footer></Footer>
      </>
    );
  }