import clsx from "clsx";
import styles from "./QuestionSection.module.scss";
import { QuestionAnswer } from "../../ui/QuestionAnswer/QuestionAnswer";

type QuestionSectionProps = {
	title: string;
	className?: string;
	isImageRight: boolean;
};
export const QuestionSection: React.FC<QuestionSectionProps> = ({
	title,
	className,
	isImageRight = false,
}) => {
	return (
		<section className={clsx(styles.root, ["content-center"], className)}>
			<h2>{title}</h2>
			<div
				className={clsx(styles.body, { [styles["image-right"]]: isImageRight })}
			>
				<img src="images/banner.jpg" alt="photo" />
				<div className={styles.questions}>
					<QuestionAnswer
						title={"What is the Hipcouch Interior Design Service?"}
					></QuestionAnswer>
					<QuestionAnswer
						title={"So, how exactly does this work?"}
					></QuestionAnswer>
					<QuestionAnswer
						title={"What cities do you currently operate in?"}
					></QuestionAnswer>
					<QuestionAnswer
						title={"Hipcouch Interior Design Service?"}
					></QuestionAnswer>
					<QuestionAnswer
						title={"What kind of interior designers do you have?"}
					></QuestionAnswer>
				</div>
			</div>
		</section>
	);
};
