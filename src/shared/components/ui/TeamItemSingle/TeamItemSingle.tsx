import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import { Social } from "../Social/Social";
import styles from "./TeamItemSingle.module.scss";

type TeamItemSingleProps = {
	email: string;
	tel: string;
	web: string;
	name: string;
	work: string;
	text: string;
};
export const TeamItemSingle: React.FC<TeamItemSingleProps> = ({
	email,
	tel,
	web,
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
				<div className={styles.info}>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Icon name={"email"}></Icon>
						</div>
						<span>{email}</span>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Icon name={"phone"}></Icon>
						</div>
						<span>{tel}</span>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Icon name={"earth"}></Icon>
						</div>
						<span>{web}</span>
					</div>
				</div>
				<Social className={styles.social}></Social>
			</div>
		</div>
	);
};
