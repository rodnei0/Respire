import * as React from 'react';
import { Typography, AppBar, Paper, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Widgets, Assessment } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

function BreathAnimation(breatheTime, holdTime, breatheOutTime, setAnimation, setStep, setStepTime) {
    setStep('Respire');
    setStepTime(breatheTime);
    setAnimation(grow);

    setTimeout(() => {
        setStep('Segure');
        setStepTime(holdTime);
        setAnimation(mantain);

        setTimeout(() => {
            setStep('Expire');
            setStepTime(breatheOutTime);
            setAnimation(shrink);
        }, holdTime)
    }, breatheTime)
}

export default function Methods() {
    const totalTime = 19000;
    const breatheInTime = (totalTime/19)*4;
    const holdTime = (totalTime/19)*7;
    const breatheOutTime = totalTime - breatheInTime - holdTime;
    const [animation, setAnimation] = React.useState(keyframes);
    const [step, setStep] = React.useState('');
    const [stepTime, setStepTime] = React.useState(breatheInTime)

    React.useEffect(() => {
        BreathAnimation(breatheInTime, holdTime, breatheOutTime, setAnimation, setStep, setStepTime);
        setInterval(() => {
            BreathAnimation(breatheInTime, holdTime, breatheOutTime, setAnimation, setStep, setStepTime);
        }, totalTime);
    },[]);
    
    return (
        <Container sx={{ height: '100vh', pt: 5, pb: 5}} disableGutters={true}>
            <CssBaseline />
            <AppBar sx={{ position: 'fixed', top: 0, left: 0, right: 0, bgcolor: '#ffffff'}}>
                <Typography variant='h6' color='black'>
                    botao de voltar
                </Typography>
            </AppBar>
            <Container sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <InnerCircle>{step}</InnerCircle>
                <BreathCircle animation={animation} stepTime={stepTime}></BreathCircle>
                <OuterCircle></OuterCircle>
            </Container>
        </Container>
    );
}

const mantain = keyframes`
    from {
        width: 75vw;
        height: 75vw;
        max-height: 75vh;
        max-width: 75vh;
    }
    to {
        width: 75vw;
        height: 75vw;
        max-height: 75vh;
        max-width: 75vh;
    }
`;
const grow = keyframes`
    from {
        width: 30vw;
        height: 30vw;
        max-height: 30vh;
        max-width: 30vh;
    }
    to {
        width: 75vw;
        height: 75vw;
        max-height: 75vh;
        max-width: 75vh;
    }
`;

const shrink = keyframes`
    from {
        width: 75vw;
        height: 75vw;
        max-height: 75vh;
        max-width: 75vh;
    }
    to {
        width: 30vw;
        height: 30vw;
        max-height: 30vh;
        max-width: 30vh;
    }
`;

const BreathCircle = styled(Box)`
    width: 30vw;
    height: 30vw;
    max-height: 75vh;
    max-width: 75vh;
    background: #8F85AD;
    border-radius: 50%;
    animation: ${props => props.animation && props.animation} ${props => props.stepTime && props.stepTime+'ms'} linear;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2;
`;

const InnerCircle = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;

    color: #ffffff;

    width: 30vw;
    height: 30vw;
    max-height: 30vh;
    max-width: 30vh;
    background: #645986;
    border-radius: 50%;

    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 3;
`;

const OuterCircle = styled(Box)`
    width: 75vw;
    height: 75vw;
    max-height: 75vh;
    max-width: 75vh;
    background: #C7C2D6;
    border-radius: 50%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
`;