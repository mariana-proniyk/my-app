import clsx from "clsx";
import { Arrow } from "../Arrow/Arrow";
import { Icon } from "../Icon/Icon";
import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
	title: string;
	subTitle: string;
	className?: string;
};
export const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	subTitle,
	className,
}) => {
	return (
		<div className={clsx(styles.root, className)}>
			<img src="images/project-card.jpg" alt="" />
			<div className={styles.body}>
				<div className={styles.title}>
					<h4>{title}</h4>
					<h5>{subTitle}</h5>
				</div>
				<Arrow className={styles.arrow}></Arrow>
			</div>
		</div>
	);
};
