import styles from "./QuotesSection.module.scss";

export const QuotesSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.decor}></div>
			<div className={styles.quotes}>
				<span>“</span>
				<h3>
					I like an interior that defies labeling. I don't really want someone
					to walk into a room and know that I did it
				</h3>
				<div className={styles.autor}>-BUNNY WILLIAMS</div>
			</div>
		</section>
	);
};
