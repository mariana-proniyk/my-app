import clsx from "clsx";
import styles from "./ContactForm.module.scss";
import { InfoItem, ReplyForm } from "../../ui";

export const ContactForm = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<h2>We love meeting new people and helping them.</h2>
			<div className={styles.body}>
				<InfoItem
					className={styles.info}
					variant="with-background"
					email={"info@yourdomain.com"}
					tel={"+1 (378) 400-1234"}
					web={"www.yourdomain.com"}
				></InfoItem>
				<ReplyForm className={styles.form} subject={"Subject"}></ReplyForm>
			</div>
		</section>
	);
};
