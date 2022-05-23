import { Box } from "@mui/system";

const styles = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
};

export default function Form({ children, onSubmit }) {
	return (
		<Box sx={styles} component="form" onSubmit={onSubmit}>
			{children}
		</Box>
	);
}