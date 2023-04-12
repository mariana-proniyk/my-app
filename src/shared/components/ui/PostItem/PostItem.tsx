import clsx from "clsx";
import { Arrow } from "../Arrow/Arrow";
import styles from "./PostItem.module.scss";

type PostItemProps = {
	className?: string;
	title: string;
	text: string;
	anotherText: string;
	date: string;
};
export const PostItem: React.FC<PostItemProps> = ({
	className,
	title,
	text,
	anotherText,
	date,
}) => {
	return (
		<div className={clsx(styles.item, className)}>
			<div className={styles.image}>
				<img src="images/project-card.jpg" alt="" />
			</div>
			<div className={styles.body}>
				<h4>{title}</h4>
				<p>{text}</p>
				<p>{anotherText}</p>
				<div className={styles.date}>
					{date}
					<Arrow className={styles.arrow}></Arrow>
				</div>
			</div>
		</div>
	);
};
