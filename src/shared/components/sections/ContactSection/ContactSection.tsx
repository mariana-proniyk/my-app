import clsx from "clsx";
import { Button, Title } from "../../ui";
import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<Title
				className={styles.title}
				title={"Wanna join the interno?"}
				subTitle={"It is a long established fact  will be distracted."}
			></Title>
			<Button className={styles.button} type={"is-brown"}>
				Contact With Us
			</Button>
		</section>
	);
};
