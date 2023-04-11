import clsx from "clsx";
import { ImageTitle } from "../ImageTitle/ImageTitle";
import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
	title: string;
	subTitle: string;
	className?: string;
};
export const ProjectCard: React.FC<ProjectCardProps> = ({
	className,
	title,
	subTitle,
}) => {
	return (
		<div className={clsx(styles.root, className)}>
			<div className={styles.image}>
				<img src="images/project-card.jpg" alt="" />
			</div>
			<ImageTitle title={title} subTitle={subTitle}></ImageTitle>
		</div>
	);
};
