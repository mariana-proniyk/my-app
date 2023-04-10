import clsx from "clsx";
import { ClientItem } from "../../ui/ClientItem/ClientItem";
import styles from "./RewievsSection.module.scss";

export const RewievsSection = () => {
	return (
		<section className={styles.root}>
			<h2>What the People Thinks About Us</h2>
			<div className={clsx(styles.cards, ["content-center"])}>
				<ClientItem
					title={"Nattasha Julie"}
					work={"Design, Australia"}
					tel={"+1(378)400-1234"}
					href={"julie@email.com"}
				></ClientItem>
				<ClientItem
					title={"Nattasha Julie"}
					work={"Design, Australia"}
					tel={"+1(378)400-1234"}
					href={"julie@email.com"}
				></ClientItem>
				<ClientItem
					title={"Nattasha Julie"}
					work={"Design, Australia"}
					tel={"+1(378)400-1234"}
					href={"julie@email.com"}
				></ClientItem>
				<ClientItem
					title={"Nattasha Julie"}
					work={"Design, Australia"}
					tel={"+1(378)400-1234"}
					href={"julie@email.com"}
				></ClientItem>
			</div>
		</section>
	);
};
