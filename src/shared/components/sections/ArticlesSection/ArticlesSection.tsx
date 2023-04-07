import clsx from "clsx";
import { Title } from "../../ui";
import { ArticleItem } from "../../ui/ArticleItem/ArticleItem";
import styles from "./ArticlesSection.module.scss";

export const ArticlesSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<Title
				title={"Articles & News"}
				subTitle={
					"It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using."
				}
			></Title>
			<div className={styles.cards}>
				<ArticleItem
					title={"Let’s Get Solution For Building Construction Work"}
					date={"26 December,2022 "}
					subTitle={"Kitchan Design"}
				></ArticleItem>
				<ArticleItem
					title={"Low Cost Latest Invented Interior Designing Ideas."}
					date={"22 December,2022 "}
					subTitle={"Living Design"}
				></ArticleItem>
				<ArticleItem
					title={"Best For Any Office & Business Interior Solution"}
					date={"25 December,2022 "}
					subTitle={"Interior Design"}
				></ArticleItem>
			</div>
		</section>
	);
};
