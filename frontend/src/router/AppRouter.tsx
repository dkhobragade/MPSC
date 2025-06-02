import { Navigate, Route, Routes } from "react-router"
import Dashboard from "../pages/Dashboard"
import PYQ from "../pages/PYQ"
import { Test } from "../pages/Test"
import FreeInitiative from "../pages/FreeInitiative "
import Demo from "../pages/Demo"
import { Download } from "../pages/Download"
import Pre from "../pages/Course/Pre"
import Mains from "../pages/Course/Mains"

const AppRouter = () =>
{
    return (
        <Routes>
            <Route path="/" element={ <Dashboard /> } />
            <Route path="/course/pre" element={ <Pre /> } />
            <Route path="/course/mains" element={ <Mains /> } />
            <Route path="/pyq/test" element={ <Test /> } />
            <Route path="/pyq/download" element={ <Download /> } />
            <Route path="/freeinitiative" element={ <FreeInitiative /> } />
            <Route path="/demo" element={ <Demo /> } />
            <Route path="*" element={ <Navigate to="/" replace /> } />
        </Routes >
    )
}

export default AppRouter
