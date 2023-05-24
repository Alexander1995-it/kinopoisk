import React from 'react';
import Pagination from '@mui/material/Pagination';
import {createTheme, ThemeProvider} from '@mui/material/styles';


const CustomPagination = () => {
    const theme = createTheme({
        palette: {
            text: {
                primary: '#fff'
            },
            primary: {
                main: '#FF6939',
                contrastText: '#fff',
            }
        },
    });
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Pagination color="primary" count={10} size="large"/>
            </ThemeProvider>
        </div>
    );
};

export default CustomPagination;