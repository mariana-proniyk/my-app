import clsx from "clsx";
import { RangeSlider } from "../../ui";
import { QuestionItem } from "../../ui/QuestionItem/QuestionItem";
import styles from "./SubBiographySection.module.scss";

export const SubBiographySection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<div className={styles["left-content"]}>
				<h4>Simplicity and Functionality</h4>
				<p>
					Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
					turpmaximus.posuere in belief.
				</p>
				<p>
					There are many variations of passages of Lorem Ipsum from available,
					but the majority have suffered alteration in some form, njecthumour
				</p>
				<div className={styles.items}>
					<RangeSlider
						className={styles.slider}
						title={"Project Design"}
					></RangeSlider>
					<RangeSlider
						className={styles.slider}
						title={"Team Management"}
					></RangeSlider>
					<RangeSlider
						className={styles.slider}
						title={"Client Satisfaction"}
					></RangeSlider>
				</div>
			</div>
			<div className={styles["right-content"]}>
				<h4>Qustion And Answer</h4>
				<p>
					Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
					turpmaximus.posuere in.
				</p>
				<div className={styles.cards}>
					<QuestionItem title={"Website & Mobile App Design?"}></QuestionItem>
					<QuestionItem
						title={"How to Easy Successful Projects?"}
					></QuestionItem>
					<QuestionItem
						title={"International Trade Experience?"}
					></QuestionItem>
				</div>
			</div>
		</section>
	);
};
