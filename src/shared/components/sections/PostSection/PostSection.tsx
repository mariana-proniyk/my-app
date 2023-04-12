import clsx from "clsx";
import { PostItem } from "../../ui/PostItem/PostItem";
import styles from "./PostSection.module.scss";

export const PostSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<h2>Latest Post</h2>
			<PostItem
				className={styles.item}
				title={"Low Cost Latest Invented Interior Designing Ideas"}
				text={
					"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief."
				}
				anotherText={
					"Lorem Ipsum is not simply random text. It has roots in a piece of classica."
				}
				date={"26 December,2022 "}
			></PostItem>
		</section>
	);
};
