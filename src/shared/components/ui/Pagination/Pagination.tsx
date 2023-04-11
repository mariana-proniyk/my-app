import { Arrow } from "../Arrow/Arrow";
import styles from "./Pagination.module.scss";

type PaginationProps = {
	number: number[];
};
export const Pagination: React.FC<PaginationProps> = ({ number }) => {
	return (
		<div className={styles.root}>
			{number.map((item) => (
				<div className={styles.number}>{item}</div>
			))}
			<Arrow className={styles.arrow}></Arrow>
		</div>
	);
};
