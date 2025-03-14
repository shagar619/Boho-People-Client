import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
    return (
        <div>

            <ToastContainer></ToastContainer>
            
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>


        </div>
    );
};

export default MainLayout;