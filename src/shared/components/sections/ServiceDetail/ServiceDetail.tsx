import clsx from "clsx";
import styles from "./ServiceDetail.module.scss";

export const ServiceDetail = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<h2>We set the trends of modern living Services.</h2>
			<div className={styles.information}>
				<div className={styles["sub-title"]}>
					It is a long established fact that a reader will be distracted by the
					of readable content of a page
				</div>
				<p>
					when lookings at its layouts the points spriof using that it has a
					more less normal.A wonderful serenity has taken pgossession of my
					entire soul, like thesce sweet morndsings of sphring which I enjoy
					with my forwhole heart. I am alone, and feel the charm of excgistence
					in this spot, which was created for the bliss of souls like mine.
				</p>
				<p>
					when lookings at its layouts the points spriof using that it has a
					more less normal.A wonderful serenity has taken pgossession of my
					entire soul, like thesce sweet morndsings of sphring which I enjoy
					with my forwhole heart. I am alone, and feel the charm of excgistence
					in this spot, which was created for the bliss of souls like mine.
				</p>
			</div>
		</section>
	);
};
