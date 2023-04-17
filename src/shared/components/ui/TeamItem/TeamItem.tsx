import { Social } from "../Social/Social";
import styles from "./TeamItem.module.scss";

type TeamItemProps = {
	title: string;
	work: string;
};

export const TeamItem: React.FC<TeamItemProps> = ({ title, work }) => {
	return (
		<a href="/team-detail" className={styles.root}>
			<img src="images/client.jpg" alt="" />
			<div className={styles.body}>
				<h4>{title}</h4>
				<span>{work}</span>
				<Social className={styles.social}></Social>
			</div>
		</a>
	);
};
