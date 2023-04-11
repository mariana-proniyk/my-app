import styles from "./PointItem.module.scss";

type PointItemProps = {
	title: string;
};
export const PointItem: React.FC<PointItemProps> = ({ title }) => {
	return (
		<div className={styles.item}>
			<h2>{title}</h2>
			<ol>
				<li>We provide high quality design services.</li>
				<li>Project on time and Latest Design.</li>
				<li>Scientific Skills For getting a better result.</li>
				<li>Renovations Benefit of Service</li>
				<li>We are confident about our projects.</li>
			</ol>
		</div>
	);
};
