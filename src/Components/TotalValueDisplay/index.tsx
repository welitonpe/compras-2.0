import classNames from "classnames";
import BasicCard from "../Card/Card";

const TotalValueDisplay = () => {
	function formatConverter(value: number): string {
		const dollarUS = Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			useGrouping: false,
		});
		return dollarUS.format(value);
	}

	return (
		<BasicCard>
			<div className={classNames("")}>
				<div className="">{formatConverter(1250.0)}</div>
				<div className="">{formatConverter(850.0)}</div>
				<div className="">{formatConverter(220.0)}</div>
			</div>
		</BasicCard>
	);
};

export default TotalValueDisplay;
