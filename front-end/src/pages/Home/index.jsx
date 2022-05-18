import * as React from 'react';
import { Typography, AppBar, Paper, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Widgets, Assessment } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from "react-router-dom";

export default function Home() {
    const [value, setValue] = React.useState(0);
	const navigate = useNavigate();

    return (
        <Container sx={{ height: '100vh', pt: 5, pb: 8}} disableGutters={true}>
            <CssBaseline />
            <AppBar sx={{ position: 'fixed', top: 0, left: 0, right: 0, bgcolor: '#ffffff'}}>
                <Typography variant='h6' align='center' color='black'>
                    Respire
                </Typography>
            </AppBar>
            <Container sx={{ height: '100%'}}>
                <Grid container sx={{ height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item sx={{ height: '48%', width: '100%'}}>
                        <Card 
                            onClick={() => navigate('/methods')} 
                            sx={{ bgcolor: 'primary.light', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': {cursor: 'pointer'}}}
                        > 
                            <CardContent>
                                <Typography variant='h5' align='center'>
                                    Método 4-7-8
                               </Typography>
                                <Typography variant='body1' align='center'>
                                    Um tranquilizante natural para o sisterma nervoso, auxiliando em um sono de melhor qualidade
                               </Typography>
                            </CardContent>
                        </ Card>
                    </Grid>
                    <Grid item sx={{ height: '48%', width: '100%'}}>
                        <Card 
                            onClick={() => navigate('/methods')} 
                            sx={{ bgcolor: 'secondary.light', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': {cursor: 'pointer'}}}
                        > 
                            <CardContent>
                                <Typography variant='h5' align='center'>
                                    Método Caixa
                                </Typography>
                                <Typography variant='body1' align='center'>
                                    Um exercício muito simples porém muito efetivo para aliviar o stress
                                </Typography>
                            </CardContent>
                        </ Card>
                    </Grid>
                </Grid>
            </Container>
            <footer>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                    }}>
                        <BottomNavigationAction label="Métodos" icon={<Widgets />} />
                        <BottomNavigationAction label="Progresso" icon={<Assessment />} />
                    </BottomNavigation>
                </Paper>
            </footer>
        </Container>
    );
}