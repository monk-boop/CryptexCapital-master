import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        const path = eventKey === "" ? "/" : `/${eventKey}`;
        navigate(path)
    };

    return (
        <Nav className="flex-column" onSelect={handleSelect}>
            <Nav.Link eventKey="">Earnings</Nav.Link>
        </Nav>
    );
};


export default Sidebar;