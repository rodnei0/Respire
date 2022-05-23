import * as React from "react";
import { AppBar, Box, Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import MethodContext from "../../contexts/MethodContext";

function BreathAnimation(breatheTime, holdTime, breatheOutTime, setAnimation, setStep, setStepTime) {
	setStep("Inspire");
	setStepTime(breatheTime);
	setAnimation(grow);

	setTimeout(() => {
		setStep("Segure");
		setStepTime(holdTime);
		setAnimation(mantain);

		setTimeout(() => {
			setStep("Expire");
			setStepTime(breatheOutTime);
			setAnimation(shrink);
		}, holdTime);
	}, breatheTime);
}

export default function Methods() {
	const {palette, method, cycle} = React.useContext(MethodContext);
	const totalTime = method.totalTime;
	const breatheInTime = method.breatheInTime;
	const holdTime = method.holdTime;
	const breatheOutTime = totalTime - breatheInTime - holdTime;
	const [animation, setAnimation] = React.useState(keyframes);
	const [step, setStep] = React.useState("");
	const [stepTime, setStepTime] = React.useState(breatheInTime);
	const navigate = useNavigate();

	React.useEffect(() => {
		BreathAnimation(breatheInTime, holdTime, breatheOutTime, setAnimation, setStep, setStepTime);

		if (cycle > 1) {
			let counter = 0;
			let looper = setInterval(() => {
				counter++;
				BreathAnimation(breatheInTime, holdTime, breatheOutTime, setAnimation, setStep, setStepTime);
                
				if (counter >= cycle - 1) {
					clearInterval(looper);
				}
			}, totalTime);
		}
	},[breatheInTime, holdTime, breatheOutTime, totalTime, cycle, setAnimation, setStep, setStepTime]);
    
	return (
		<Container sx={{ height: "100vh", pt: 5, pb: 5}} disableGutters={true}>
			<AppBar sx={{ position: "fixed", top: 0, left: 0, right: 0, bgcolor: "#ffffff"}}>
				<ArrowBack onClick={() => {navigate(-1);}} sx={{color: "black"}}></ArrowBack>
			</AppBar>
			<Container sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
				<InnerCircle sx={{bgcolor: `${palette}.main`}}>{step}</InnerCircle>
				<BreathCircle sx={{bgcolor: `${palette}.lighter`}} animation={animation} stepTime={stepTime}></BreathCircle>
				<OuterCircle sx={{bgcolor: `${palette}.xlighter`}}></OuterCircle>
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
    border-radius: 50%;
    animation: ${props => props.animation && props.animation} ${props => props.stepTime && props.stepTime+"ms"} linear;
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
    font-size: clamp(1rem, 5vw, 3rem);

    width: 30vw;
    height: 30vw;
    max-height: 30vh;
    max-width: 30vh;
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
    border-radius: 50%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
`;