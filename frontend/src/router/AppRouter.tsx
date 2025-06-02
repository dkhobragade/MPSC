import { Navigate, Route, Routes } from "react-router"
import Dashboard from "../pages/Dashboard"
import PYQ from "../pages/PYQ"
import { Test } from "../pages/Test"
import FreeInitiative from "../pages/FreeInitiative "
import Demo from "../pages/Demo"
import { Download } from "../pages/Download"

const AppRouter = () =>
{
    return (
        <Routes>
            <Route path="/" element={ <Dashboard /> } />
            <Route path="/pyq" element={ <PYQ /> } />
            <Route path="/test" element={ <Test /> } />
            <Route path="/freeinitiative" element={ <FreeInitiative /> } />
            <Route path="/demo" element={ <Demo /> } />
            <Route path="/download" element={ <Download /> } />
            <Route path="*" element={ <Navigate to="/" replace /> } />
        </Routes >
    )
}

export default AppRouter
