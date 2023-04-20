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
			<ReplyForm
				title="Leave a Reply"
				website="Website"
				checkBox="Save my name, email, and website in this browser for the next time I comment."
			></ReplyForm>
		</div>
		<SideBar></SideBar>
	</section>
);
