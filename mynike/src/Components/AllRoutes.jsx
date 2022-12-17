import {Routes,Route} from "react-router-dom"
import LandingPage from "./LandingPage";
import NewRelease from "./Men/NewRelease/NewRelease";

function AllRoutes(){
    return (
        <>
        <Routes>
            <Route path={"/"} element={<LandingPage />} />
            <Route path={"/newrelease"} element={<NewRelease />} />
        </Routes>
        </>
    )
}
export default AllRoutes;