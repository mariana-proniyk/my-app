import clsx from "clsx";
import styles from "./SmallTitle.module.scss";

type SmallTitleProps = {
	title: string;
	subTitle: string;
	className?: string;
};
export const SmallTitle: React.FC<SmallTitleProps> = ({
	title,
	subTitle,
	className,
}) => {
	return (
		<div className={clsx(styles.title, className)}>
			<h2>{title}</h2>
			<div className={styles["sub-title"]}>{subTitle}</div>
		</div>
	);
};
