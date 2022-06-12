import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

type BasicCardProps = {
	children: JSX.Element;
};

const BasicCard: React.FC<BasicCardProps> = ({ children }) => {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>{children}</CardContent>
		</Card>
	);
};

export default BasicCard;
