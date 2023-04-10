import { SmallTitle } from "../../ui";
import styles from "./SmallHeroSection.module.scss";

type SmallHeroSectionProps = {
	title: string;
	subTitle: string;
};
export const SmallHeroSection: React.FC<SmallHeroSectionProps> = ({
	title,
	subTitle,
}) => {
	return (
		<section className={styles.root}>
			<img src="images/hero.jpg" alt="" />
			<SmallTitle
				className={styles.title}
				title={title}
				subTitle={subTitle}
			></SmallTitle>
		</section>
	);
};
