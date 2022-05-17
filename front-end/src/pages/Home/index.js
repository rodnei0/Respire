import * as React from 'react';
import { Typography, AppBar, Paper, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import {Restore, Archive, Favorite} from '@mui/icons-material';

export default function Home() {
    const [value, setValue] = React.useState(0);

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
                    <Container maxWidth='sm' sx={{
                        padding: '50px'
                    }}>
                        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                            <Grid item>
                                <Card sx={{
                                    width: 150,
                                    height: 150,
                                    backgroundColor: 'red'
                                }}>
                                    <CardContent>
                                        <Typography variant='body1' align='center'>
                                            Técnica 1
                                        </Typography>
                                    </CardContent>
                                </ Card>
                            </Grid>
                            <Grid item>
                                <Card sx={{
                                    width: 150,
                                    height: 150,
                                    backgroundColor: 'red'
                                }}>
                                    <CardContent>
                                        <Typography variant='body1' align='center'>
                                            Técnica 2
                                        </Typography>
                                    </CardContent>
                                </ Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
            <footer>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    >
                    <BottomNavigationAction label="Recents" icon={<Restore />} />
                    <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                    <BottomNavigationAction label="Archive" icon={<Archive />} />
                    </BottomNavigation>
                </Paper>
            </footer>
        </>
    );
}