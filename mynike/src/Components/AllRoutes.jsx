import {Routes,Route} from "react-router-dom"
import LandingPage from "./LandingPage";
import NewRelease from "./Men/NewRelease/NewRelease";
import ProductDetails from "./Men/NewRelease/ProductDetails";
import Cart from "./Men/NewRelease/Cart";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
function AllRoutes(){
    return (
        <>
        <Routes>
            <Route path={"/"} element={<LandingPage />} />
            <Route path={"/signup"} element={<SignUp />} />
            <Route path={"/signin"} element={<SignIn />} />
            <Route path={"/newrelease"} element={<NewRelease />} />
            <Route path={"/productdetails/:id"} element={<ProductDetails />} />
            <Route path={"/productdetails/:id/cart"} element={<Cart />} />
        </Routes>
        </>
    )
}
export default AllRoutes;