import * as React from 'react';
import { Container } from '@mui/material';
import BottomNav from '../../components/BottomNav';
import TopBar from '../../components/TopBar';
import MethodsMenu from '../../components/MethodsMenu';
import Progress from '../Progress';
import PageContext from '../../contexts/PageContext';

export default function Home() {
    const {page} = React.useContext(PageContext);
    
    return (
        <Container sx={{ height: '100vh', pt: 5, pb: 8}} disableGutters={true}>
            <TopBar></TopBar>
            <Container component={'main'} sx={{ height: '100%'}}>
                {page === 'methodsMenu' ? <MethodsMenu /> : <Progress />}
            </Container>
            <BottomNav></BottomNav>
        </Container>
    );
}