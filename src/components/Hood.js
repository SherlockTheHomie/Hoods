import React, { useState } from 'react';
import Menu from './Menu.js';
import Home from './pages/Home.js';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useWindowDimensions from './GetWindow.js';
import MapsUgcTwoToneIcon from '@mui/icons-material/MapsUgcTwoTone';



export default function Hood() {
    // const [currentPage, setCurrentPage] = useState('Home');




    // // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    // const renderPage = () => {
    //     if (currentPage === 'Home') {
    //         return <Home />;
    //     }
    //     return <Home />;
    // };

    // const handlePageChange = (page) => setCurrentPage(page);
    const { height, width } = useWindowDimensions();


    return (
            <Container sx={{ maxWidth: width, maxHeight: height}} >
            <Menu sx={{ maxWidth: 'inherit', height:'inherit' }} >
            </Menu>
            <Home>
                
            </Home>
        
            </Container>
    );

}
