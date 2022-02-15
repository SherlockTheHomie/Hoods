import React, { useState } from 'react';
import Menu from './Menu.js';
import Home from './pages/Home.js';
import Container from '@mui/material/Container';
import Street from './pages/Street.js';
import Paper from '@mui/material/Paper';
import useWindowDimensions from './GetWindow.js';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        return <Street />;
    };

    const handlePageChange = (page) => setCurrentPage(page);
    const { height, width } = useWindowDimensions();


    return (
        <>
            <Menu currentPage={currentPage} handlePageChange={handlePageChange} sx={{ maxWidth: width, height:height }} >
            </Menu>
            <Container>
            {renderPage()}
            </Container>
        </>
    );

}
