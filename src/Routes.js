import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Calendar from "./Pages/Calendar";
import TaskPage from "./Pages/TaskPage";
import Profile from "./Pages/Profile";

function RouteList() {
    return (

        <>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/tasklist" element={<TaskPage />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

        </>
    )
}

export default RouteList