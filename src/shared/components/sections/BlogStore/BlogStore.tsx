import clsx from "clsx";
import { ArticleCard, BlogQuotes, SideBar } from "../../ui";
import { BlogSubContent } from "../../ui/BlogSubContent/BlogSubContent";
import { ReplyForm } from "../../ui/ReplyForm/ReplyForm";
import { ArticleBlog } from "../ArticleBlog/ArticleBlog";
import styles from "./BlogStore.module.scss";

export const BlogStore = () => (
	<section className={clsx(styles.root, ["content-center"])}>
		<div className={styles.body}>
			<ArticleCard></ArticleCard>
			<BlogQuotes></BlogQuotes>
			<ArticleBlog></ArticleBlog>
			<BlogSubContent></BlogSubContent>
			<ReplyForm></ReplyForm>
		</div>
		<SideBar></SideBar>
	</section>
);
