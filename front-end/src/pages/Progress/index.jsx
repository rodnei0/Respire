import * as React from 'react';
import { Box } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Progress() {
	const { token } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!token) {
            console.log("Você precisa estar logado para finalizar sua compra, estamos redirecionando você para a página de login...");
            navigate('/sign-up');
        }
    })

    return (
        <Box>TESTE</Box>
    );
}