import { Link } from "react-router-dom";
import styles from "./ProductInfo.module.scss";

export const ProductInfo = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<h5>
					Client
					<span>Your client name</span>
				</h5>
				<h5>
					Category
					<span>Interiors</span>
				</h5>
				<h5>
					Tags
					<span>interior, Home</span>
				</h5>
				<h5>
					Date
					<span>Date 23,02, 2022</span>
				</h5>
				<h5>
					Link
					<Link to={"Link example.com"}>Link example.com</Link>
				</h5>
			</div>
		</div>
	);
};
