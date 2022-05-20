import * as React from 'react';
import { Typography, AppBar, Box, Paper, Slider, Card, CardActions, CardContent, Grid, Container } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Widgets, Assessment } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import MethodContext from '../../contexts/MethodContext';

export default function Home() {
    const {setPalette, setMethod, setCycle} = React.useContext(MethodContext);
    const [value, setValue] = React.useState(0);
	const navigate = useNavigate();
    setCycle(1);

    function handleMethod(method) {
        const totalTime =  method === 'primary' ? 19000 : 12000;
        const breatheTime =  method === 'primary' ? 4000 : 4000;
        const holdTime =  method === 'primary' ? 7000 : 4000;
        
        setPalette(method)        
        setMethod({
            totalTime: totalTime,
            breatheInTime: breatheTime,
            holdTime: holdTime,
        });
    
        navigate('/methods');
    }

    return (
        <Container sx={{ height: '100vh', pt: 5, pb: 8}} disableGutters={true}>
            <AppBar sx={{ position: 'fixed', top: 0, left: 0, right: 0, bgcolor: '#CDE2F4'}}>
                <Typography variant='h6' align='center' color='black'>
                    Respire
                </Typography>
            </AppBar>
            <Container sx={{ height: '100%'}}>
                <Grid container sx={{ height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item sx={{ height: '48%', width: '100%'}}>
                        <Card 
                            onClick={() => {handleMethod('primary')}} 
                            sx={{ bgcolor: 'primary.main', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', '&:hover': {cursor: 'pointer'}}}
                        > 
                            <CardContent>
                                <Typography variant='h5' align='center'>
                                    Método 4-7-8
                               </Typography>
                                <Typography variant='body1' align='center'>
                                    Um tranquilizante natural para o sisterma nervoso, auxiliando em um sono de melhor qualidade
                               </Typography>
                            </CardContent>
                            <CardActions sx={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                                <Slider onChange={(e) => setCycle(e.target.value)} defaultValue={1} step={1} marks min={1} max={10} valueLabelDisplay="auto" color='tertiary'/>
                                <Typography variant='body1' align='center'>
                                    Escolha quantos ciclos você deseja fazer
                                </Typography>
                            </CardActions>
                        </ Card>
                    </Grid>
                    <Grid item sx={{ height: '48%', width: '100%'}}>
                        <Card 
                            onClick={() => {handleMethod('secondary')}}    
                            sx={{ bgcolor: 'secondary.main', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', '&:hover': {cursor: 'pointer'}}}
                        > 
                            <CardContent>
                                <Typography variant='h5' align='center'>
                                    Método Caixa
                                </Typography>
                                <Typography variant='body1' align='center'>
                                    Um exercício muito simples porém muito efetivo para aliviar o stress
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                                <Slider onChange={(e) => setCycle(e.target.value)} defaultValue={1} step={1} marks min={1} max={10} valueLabelDisplay="auto" color='tertiary'/>
                                <Typography variant='body1' align='center'>
                                    Escolha quantos ciclos você deseja fazer
                                </Typography>
                            </CardActions>
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

