import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import { Social } from "../Social/Social";
import styles from "./TeamItemSingle.module.scss";
import { InfoItem } from "../InfoItem/InfoItem";

type TeamItemSingleProps = {
	name: string;
	work: string;
	text: string;
};
export const TeamItemSingle: React.FC<TeamItemSingleProps> = ({
	name,
	work,
	text,
}) => {
	return (
		<div className={clsx(styles.root, ["content-center"])}>
			<div className={styles.image}>
				<img src="images/item.jpg" alt="" />
			</div>
			<div className={styles.body}>
				<h2>{name}</h2>
				<span>{work}</span>
				<p>{text}</p>
				<InfoItem
					email={"info@yourdomain.com"}
					tel={"+1 (378) 400-1234"}
					web={"www.yourdomain.com"}
				></InfoItem>
			</div>
		</div>
	);
};
