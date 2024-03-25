import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Login from "../Login/Login";
import Logout from "../Login/Logout";
import TablePage from "../Table/TablePage";
import ErrorPage from "./Error-page";



export const AppRouter = () => {

    const app = useSelector((state) => state.app);




    const AuthenticatedRoute = ({ element, path, ...rest }) => {
        if (!app?.user) {
            return <Navigate to="/login" replace />;
        }

        var hasPermission = app?.user?.permissions?.find(s => s === path);
        if(!hasPermission){
            return <Navigate to="/error" replace />;  
        }

        return element;
    };

    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<AuthenticatedRoute element={<TablePage />} path="/" />}
                />
                <Route
                    path="/location"
                    element={<AuthenticatedRoute element={<TablePage />} path="/location" />}
                />
                <Route
                    path="/episode"
                    element={<AuthenticatedRoute element={<TablePage />} path="/episode" />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/character" element={<Navigate to="/" replace />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};