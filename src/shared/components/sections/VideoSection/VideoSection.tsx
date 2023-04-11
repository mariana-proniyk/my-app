import clsx from "clsx";
import { Player } from "../../ui";
import styles from "./VideoSection.module.scss";

export const VideoSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<Player></Player>
		</section>
	);
};
