import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';

export default function Home() {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Typography variant='h6'>
                    Respire
                </Typography>
                {/* <Toolbar>
                    <WidgetsIcon />
                </Toolbar> */}
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm' bgco>
                        <Typography variant='h2'>
                            Respire
                        </Typography>
                    </Container>
                </div>
            </main>
        </>

    );
}