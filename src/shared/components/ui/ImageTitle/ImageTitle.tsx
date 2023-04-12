import { Arrow } from "../Arrow/Arrow";
import styles from "./ImageTitle.module.scss";

type ImageTitleProps = {
	title: string;
	subTitle: string;
};
export const ImageTitle: React.FC<ImageTitleProps> = ({ title, subTitle }) => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<h4>{title}</h4>
				<h5>{subTitle}</h5>
			</div>
			<a href="/project-detail">
				<Arrow className={styles.arrow}></Arrow>
			</a>
		</div>
	);
};
