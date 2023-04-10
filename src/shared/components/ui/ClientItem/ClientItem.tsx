import clsx from "clsx";
import { Social } from "../Social/Social";
import styles from "./ClientItem.module.scss";

type ClientItemProps = {
	title: string;
	work: string;
	tel: string;
	href: string;
};
export const ClientItem: React.FC<ClientItemProps> = ({
	title,
	work,
	tel,
	href,
}) => {
	return (
		<div className={styles.item}>
			<img src="images/client.jpg" alt="" />
			<div className={styles.info}>
				<div className={styles.body}>
					<h4>{title}</h4>
					<span>{work}</span>
					<Social className={styles.social}></Social>
					<a href={`tel: ${tel}`}>{tel}</a>
					<a href={`mailto: ${href}`}>{href}</a>
				</div>
			</div>
		</div>
	);
};
