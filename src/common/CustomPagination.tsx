import React from 'react';
import Pagination from '@mui/material/Pagination';
import {createTheme, ThemeProvider} from '@mui/material/styles';


type CustomPaginationType = {
    pages: number
    page: number
    onChange: (page: number) => void
}

const CustomPagination = ({pages, page, onChange}: CustomPaginationType): JSX.Element => {


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
                <Pagination color="primary" size="large"
                            onChange={(e, page: number) => onChange(page)}
                            count={pages}
                            page={page}/>
            </ThemeProvider>
        </div>
    );
};

export default CustomPagination;