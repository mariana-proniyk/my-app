import clsx from "clsx";
import styles from "./Title.module.scss";

type TitleProps = {
	title: string;
	subTitle: string;
	className?: string;
};

export const Title: React.FC<TitleProps> = ({ title, subTitle, className }) => {
	return (
		<div className={clsx(styles.title, className)}>
			<h2>{title}</h2>
			<p>{subTitle}</p>
		</div>
	);
};
