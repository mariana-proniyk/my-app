import clsx from "clsx";
import { Title } from "../../ui";
import { WorkOfferItem } from "../../ui/WorkOfferItem/WorkOfferItem";
import styles from "./HowWeWork.module.scss";

export const HowWeWork = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<Title
				title={"How We Work"}
				subTitle={
					"It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				}
			></Title>
			<div className={styles.cards}>
				<WorkOfferItem
					className={styles.reverse}
					number={0}
					title={"Concept & Details"}
					text={
						"It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry."
					}
				></WorkOfferItem>
				<WorkOfferItem
					number={1}
					title={"Idea for Work"}
					text={
						"It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry."
					}
				></WorkOfferItem>
				<WorkOfferItem
					className={styles.reverse}
					number={2}
					title={"Design"}
					text={
						"It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry."
					}
				></WorkOfferItem>
				<WorkOfferItem
					number={3}
					title={"Perfection"}
					text={
						"It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry."
					}
				></WorkOfferItem>
			</div>
		</section>
	);
};
