import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import styles from "./OfferItem.module.scss";

type OfferItemProps = {
	title: string;
	text: string;
};
export const OfferItem: React.FC<OfferItemProps> = ({ title, text }) => {
	return (
		<div className={styles.root}>
			<h4>{title}</h4>
			<p>{text}</p>
			<Link to="/service-single">
				Read More
				<Icon name={"arrow-right"}></Icon>
			</Link>
		</div>
	);
};
