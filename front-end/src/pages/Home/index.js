import * as React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';

export default function Home() {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Typography variant='h6'>
                    Respire
                </Typography>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Typography variant='h2'>
                            Respire
                        </Typography>
                    </Container>
                </div>
            </main>
        </>

    );
}