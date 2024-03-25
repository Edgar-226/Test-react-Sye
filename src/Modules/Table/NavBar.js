import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

export default function NavbarComponent({ title = "Characters", }) {
    const app = useSelector((state) => state.app);

    var { user } = app;

    const [pages, setPages] = useState(<></>);

    useEffect(() => {
        if (Array.isArray(user?.permissions)) {
            setPages(user.permissions.map(item => {
                return (<Nav.Link href={item}>{item.replace("/", "")}</Nav.Link>)
            }
            ))
        }
    }, [user])

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">{user.user}</Navbar.Brand>
                    <Nav className="me-auto">
                        {pages}
                        <Nav.Link href="/logout">Salir</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

