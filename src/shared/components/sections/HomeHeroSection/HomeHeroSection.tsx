import { Button } from "../../ui/Button/Button";
import styles from "./HomeHeroSection.module.scss";

export const HomeHeroSection = () => {
	return (
		<section className={styles.root}>
			<img src="images/banner.jpg" alt="" />
			<div className={styles.body}>
				<h1>Let Your Home Be Unique</h1>
				<p>
					There are many variations of the passages of lorem Ipsum
					fromavailable,variations of the passages.
				</p>
				<Button className={styles.button} type={"is-default"}>
					Get Started
				</Button>
			</div>
		</section>
	);
};
