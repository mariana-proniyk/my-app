import styles from "./TestimonialsItem.module.scss";

type TestimonialsItemProps = {
	name: string;
	country: string;
	text: string;
};
export const TestimonialsItem: React.FC<TestimonialsItemProps> = ({
	name,
	country,
	text,
}) => {
	return (
		<div className={styles.root}>
			<div className={styles.user}>
				<img src="images/user.jpg" alt="" />
				<div className={styles.name}>
					<h5>{name}</h5>
					<span>{country}</span>
				</div>
			</div>
			<p>{text}</p>
		</div>
	);
};
