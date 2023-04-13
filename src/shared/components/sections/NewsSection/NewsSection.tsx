import clsx from "clsx";
import { ArticleItem, Pagination } from "../../ui";
import styles from "./NewsSection.module.scss";

export const NewsSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<h2>Articles & News</h2>
			<div className={styles.body}>
				<div className={styles.cards}>
					<ArticleItem
						className={styles.item}
						title={"Let’s Get Solution For Building Construction Work"}
						date={"26 December,2022 "}
						subTitle={"Kitchan Design"}
					></ArticleItem>
					<ArticleItem
						className={styles.item}
						title={"Low Cost Latest Invented Interior Designing Ideas."}
						date={"22 December,2022 "}
						subTitle={"Living Design"}
					></ArticleItem>
					<ArticleItem
						className={styles.item}
						title={"Best For Any Office & Business Interior Solution"}
						date={"25 December,2022 "}
						subTitle={"Interior Design"}
					></ArticleItem>
					<ArticleItem
						className={styles.item}
						title={"Let’s Get Solution For Building Construction Work"}
						date={"26 December,2022 "}
						subTitle={"Kitchan Design"}
					></ArticleItem>
					<ArticleItem
						className={styles.item}
						title={"Low Cost Latest Invented Interior Designing Ideas."}
						date={"22 December,2022 "}
						subTitle={"Living Design"}
					></ArticleItem>
					<ArticleItem
						className={styles.item}
						title={"Best For Any Office & Business Interior Solution"}
						date={"24 December,2022 "}
						subTitle={"Interior Design"}
					></ArticleItem>
				</div>
				<Pagination number={[1, 2, 3]}></Pagination>
			</div>
		</section>
	);
};
