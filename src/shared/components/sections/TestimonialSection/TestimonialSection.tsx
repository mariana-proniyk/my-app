import clsx from "clsx";
import { TestimonialsItem } from "../../ui";
import styles from "./TestimonialSection.module.scss";

export const TestimonialSection = () => (
	<section className={clsx(styles.root, ["content-center"])}>
		<h2>What the People Thinks About Us</h2>
		<div className={styles.cards}>
			<TestimonialsItem
				name={"Nattasha Mith"}
				country={"Sydney, USA"}
				text={
					"Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
				}
			></TestimonialsItem>
			<TestimonialsItem
				name={"Raymond Galario"}
				country={"Sydney, Australia"}
				text={
					"Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book."
				}
			></TestimonialsItem>
			<TestimonialsItem
				name={"Benny Roll"}
				country={"Sydney, New York"}
				text={
					"Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
				}
			></TestimonialsItem>
		</div>
	</section>
);
