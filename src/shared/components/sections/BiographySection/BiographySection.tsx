import clsx from "clsx";
import styles from "./BiographySection.module.scss";

export const BiographySection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<h2>Short Biography​</h2>
			<p>
				Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
				turpmaximus.posuere in.Contrary to popular belief.There are many
				variations of passages of Lorem Ipsum available, but the majority have
				suffered alteration in some form, njecthumour randomised words which
				don't look even slightly believable.
			</p>
			<p>
				Embarrassing hidden in the middle of text. All the Lorem Ipsum
				generators on the Internet tend to repeat predefined but the majority
				have suffered alteration in some form chunks as necessary.
			</p>
		</section>
	);
};
