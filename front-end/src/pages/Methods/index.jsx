import * as React from 'react';
import { Typography, AppBar, Paper, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Widgets, Assessment } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

const teste = keyframes`
    0% { transform: scale(1) }
    33% { transform: scale(1.5) }
    66% { transform: scale(1.5) }
    100% { transform: scale(1) }
`;

const BreathCircle = styled(Box)`
    width: 150px;
    height: 150px;
    background: red;
    border-radius: 50%;
    animation: ${teste} 9000ms infinite;
`;

export default function Methods() {
    return (
        <Container sx={{ height: '100vh', pt: 5, pb: 5}} disableGutters={true}>
            <CssBaseline />
            <AppBar sx={{ position: 'fixed', top: 0, left: 0, right: 0, bgcolor: '#ffffff'}}>
                <Typography variant='h6' color='black'>
                    botao de voltar
                </Typography>
            </AppBar>
            <Container sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <BreathCircle></BreathCircle>
            </Container>
        </Container>
    );
}