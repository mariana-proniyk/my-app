import styles from "./ArticleCard.module.scss";

export const ArticleCard = () => {
	return (
		<div className={styles.article}>
			<h2>Let’s Get Solution for Building Construction Work</h2>
			<img src="images/banner.jpg" alt="" />
			<div className={styles.info}>
				<div className={styles.date}>26 December,2022</div>
				<div className={styles.filter}>Interior / Design / Home / Decore</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
				turpmaximus.posuere in.Contrary to popular belief.There are many
				variations of passages of Lorem Ipsum available, but the majority have
				suffered alteration in some form, by injecthumour, or randomised words
				which don't look even slightly believable.
			</p>
			<p>
				Embarrassing hidden in the middle of text. All the Lorem Ipsum
				generators on the Internet tend to repeat predefined chunks as
				necessary.
			</p>
		</div>
	);
};
