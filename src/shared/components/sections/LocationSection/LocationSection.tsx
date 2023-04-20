import clsx from "clsx";
import styles from "./LocationSection.module.scss";
import { Icon } from "../../ui";

export const LocationSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<img src="images/map.jpg" alt="" />
			<Icon name={"locator"}></Icon>
		</section>
	);
};
