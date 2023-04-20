import { Button } from "../../ui";
import styles from "./ErrorSection.module.scss";

export const ErrorSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.body}>
				<span>404</span>
				<h3>We are sorry, but the page you requested was not found</h3>
				<Button className={styles.button} type={"is-default"}>
					Back To Home
				</Button>
			</div>
			<img src="images/banner.jpg" alt="" />
		</section>
	);
};
