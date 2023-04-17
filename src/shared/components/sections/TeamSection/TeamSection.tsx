import clsx from "clsx";
import { TeamItem } from "../../ui/TeamItem/TeamItem";
import styles from "./TeamSection.module.scss";

export const TeamSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<TeamItem title={"Charlotte	Levi"} work={"Design, Australia"}></TeamItem>
			<TeamItem title={"Nattasha Julie"} work={"Design, Australia"}></TeamItem>
			<TeamItem title={"John Smith"} work={"Design, Australia"}></TeamItem>
			<TeamItem title={"Nora Owen"} work={"Design, Australia"}></TeamItem>
			<TeamItem title={"Sofia	Carter"} work={"Design, Australia"}></TeamItem>
			<TeamItem title={"Avery	Jackson"} work={"Design, Australia"}></TeamItem>
			<TeamItem title={"Luna	James"} work={"Design, Australia"}></TeamItem>
			<TeamItem title={"Gianna Mateo"} work={"Design, Australia"}></TeamItem>
		</section>
	);
};
