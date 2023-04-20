import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import { Social } from "../Social/Social";
import styles from "./InfoItem.module.scss";

type InfoItemProps = {
	email: string;
	tel: string;
	web: string;
	variant?: "with-background" | "without-background";
	className?: string;
};

export const InfoItem: React.FC<InfoItemProps> = ({
	email,
	tel,
	web,
	variant = "without-background",
	className,
}) => {
	return (
		<div className={clsx(styles.info, className)}>
			{variant === "without-background" && (
				<>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Icon name={"email"}></Icon>
						</div>
						<a href="mail to:{email}">{email}</a>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Icon name={"phone"}></Icon>
						</div>
						<a href="tel:{tel}">{tel}</a>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Icon name={"earth"}></Icon>
						</div>
						<a>{web}</a>
					</div>
					<Social className={styles.social}></Social>
				</>
			)}
			{variant === "with-background" && (
				<>
					<div className={styles["item-background"]}>
						<div className={styles.icon}>
							<Icon name={"email"}></Icon>
						</div>
						<a href="mail to:{email}">{email}</a>
					</div>
					<div className={styles["item-background"]}>
						<div className={styles.icon}>
							<Icon name={"phone"}></Icon>
						</div>
						<a href="tel:{tel}">{tel}</a>
					</div>
					<div className={styles["item-background"]}>
						<div className={styles.icon}>
							<Icon name={"earth"}></Icon>
						</div>
						<a>{web}</a>
					</div>
					<Social className={styles.social}></Social>
				</>
			)}
		</div>
	);
};
