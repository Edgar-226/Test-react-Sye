import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

import TableComponent from "./TableComponent";
import NavbarComponent from "./NavBar";
import { useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";

import { actions } from "./TableActions";

export default function TablePage() {
    var dispatch = useDispatch();
    var location = useLocation();

    var actionsValues = actions.find(s => s.path === location.pathname);

    var {  getdata,  columns } = actionsValues;



    const [data, setData] = useState(null);
    useEffect(() => {
        if(!data)
            getdata()
                .then(response => {
                    setData(response.data.results)
                })

    }, [data,dispatch,getdata])

  
    return (
        <>
            <NavbarComponent />
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text></Card.Text>
                    <TableComponent data={data || []} columns={columns} />
                </Card.Body>
            </Card>

        </>
    )
}

