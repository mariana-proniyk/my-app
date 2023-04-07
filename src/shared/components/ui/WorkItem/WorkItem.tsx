import { Icon } from "../Icon/Icon";
import styles from "./WorkItem.module.scss";

type WorkItemProps = {
	title: string;
	text: string;
};
export const WorkItem: React.FC<WorkItemProps> = ({ title, text }) => {
	return (
		<div className={styles.item}>
			<h4>{title}</h4>
			<div className={styles.text}>{text}</div>
			<a href="#">
				Read More
				<Icon name={"arrow-right"}></Icon>
			</a>
		</div>
	);
};
