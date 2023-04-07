import clsx from "clsx";
import { Arrow } from "../Arrow/Arrow";
import styles from "./ArticleItem.module.scss";

type ArticleItemProps = {
	title: string;
	date: string;
	subTitle: string;
	className?: string;
};
export const ArticleItem: React.FC<ArticleItemProps> = ({
	title,
	subTitle,
	date,
	className,
}) => {
	return (
		<div className={clsx(styles.root, className)}>
			<img src="images/project-card.jpg" alt="" />
			<div className={styles.body}>
				<h4>{title}</h4>
				<div className={styles["bottom-content"]}>
					<div className={styles.date}>{date}</div>
					<Arrow className={styles.arrow}></Arrow>
				</div>
				<span>{subTitle}</span>
			</div>
		</div>
	);
};
