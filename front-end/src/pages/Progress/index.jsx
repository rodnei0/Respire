import * as React from 'react';
// import { Box } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Progress() {
	const { token } = useAuth();
    const navigate = useNavigate();
    const [value, onChange] = React.useState(new Date());
    console.log(token)

    React.useEffect(() => {
        if (!token) {
            console.log("Você precisa estar logado para finalizar sua compra, estamos redirecionando você para a página de login...");
            navigate('/sign-up');
        }
    })

    return (
        <Calendar onChange={onChange} value={value} />
    );
}