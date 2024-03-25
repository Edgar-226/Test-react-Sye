import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { logout } from "../../App/Appslice";



export default function Logout() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        navigate("/login")
    }, [dispatch, navigate])
    return (<></>)
}