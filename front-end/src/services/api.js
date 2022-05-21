import axios from "axios";

const baseAPI = axios.create({
	baseURL: "http://localhost:5000/",
});

function getConfig(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

function makeBody(email, password) {
	return (
	 	{
			email: email,
			password: password,
		}
	);
}

async function signUp({ email, password }) {
	const body = makeBody(email, password)
	await baseAPI.post("/sign-up", body);
}

async function signIn({ email, password }) {
	const body = makeBody(email, password)
	return baseAPI.post("/sign-in", body);
}

async function getProgress(token) {
	const config = getConfig(token);
	return baseAPI.get("/progress", config);
}
const api = {
	signUp,
	signIn,
	getProgress,
};

export default api;