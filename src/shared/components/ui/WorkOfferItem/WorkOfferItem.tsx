import clsx from "clsx";
import styles from "./WorkOfferItem.module.scss";

type WorkOfferItemProps = {
	number: number;
	title: string;
	text: string;
	className?: string;
};
export const WorkOfferItem: React.FC<WorkOfferItemProps> = ({
	number,
	title,
	text,
	className,
}) => {
	return (
		<div className={clsx(styles.item, className)}>
			<div className={styles.body}>
				<div className={styles["top-content"]}>
					<img src="images/image.png" alt="" />
					<div className={styles.number}>
						{number < 10 ? `0${number + 1}` : number}
					</div>
				</div>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
			<div className={styles.photo}>
				<img className={styles.image} src="images/designe.jpg" alt="" />
			</div>
		</div>
	);
};
