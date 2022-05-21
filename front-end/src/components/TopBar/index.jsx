import * as React from 'react';
import { Typography, AppBar } from '@mui/material';

export default function TopBar() {
    return (
        <AppBar sx={{ position: 'fixed', top: 0, left: 0, right: 0, bgcolor: '#CDE2F4'}}>
            <Typography variant='h6' align='center' color='black'>
                Respire
            </Typography>
        </AppBar>
    );
}