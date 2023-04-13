import styles from "./LatestNews.module.scss";

export const LatestNews = () => {
	return (
		<div className={styles.root}>
			<h4>Latest News</h4>
			<ul>
				<li>
					<a href="#">We Focus On Comfort And Gorgeous</a>
					<span>06/02/2020</span>
				</li>
				<li>
					<a href="#">We Focus On Comfort And Gorgeous</a>
					<span>06/02/2020</span>
				</li>
				<li>
					<a href="#">We Focus On Comfort And Gorgeous</a>
					<span>06/02/2020</span>
				</li>
			</ul>
		</div>
	);
};
