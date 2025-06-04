import { Navigate, Route, Routes } from "react-router"
import Dashboard from "../pages/Dashboard"
import { Test } from "../pages/PYQ/Test"
import FreeInitiative from "../pages/FreeInitiative "
import Demo from "../pages/Demo"
import { Download } from "../pages/PYQ/Download"
import Pre from "../pages/Course/Pre"
import Mains from "../pages/Course/Mains"
import Profile from "../pages/Profile"
import MyCourses from "../pages/MyCourses"

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
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/mycourse" element={ <MyCourses /> } />
            <Route path="*" element={ <Navigate to="/" replace /> } />
        </Routes >
    )
}

export default AppRouter
