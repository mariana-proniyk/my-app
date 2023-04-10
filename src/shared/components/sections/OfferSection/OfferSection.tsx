import clsx from "clsx";
import { OfferItem } from "../../ui/OfferItem/OfferItem";
import styles from "./OfferSection.module.scss";

export const OfferSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<OfferItem
				title={"Project Plan"}
				text={
					"There are many variations of the passages of lorem Ipsum from available, majority."
				}
			></OfferItem>
			<OfferItem
				title={"Retail Design"}
				text={
					"There are many variations of the passages of lorem Ipsum from available, majority."
				}
			></OfferItem>
			<OfferItem
				title={"2d/3d Art Work"}
				text={
					"There are many variations of the passages of lorem Ipsum from available, majority."
				}
			></OfferItem>
			<OfferItem
				title={"Interior Work"}
				text={
					"There are many variations of the passages of lorem Ipsum from available, majority."
				}
			></OfferItem>
			<OfferItem
				title={"Project Plan"}
				text={
					"There are many variations of the passages of lorem Ipsum from available, majority."
				}
			></OfferItem>
			<OfferItem
				title={"Decoration Work"}
				text={
					"There are many variations of the passages of lorem Ipsum from available, majority."
				}
			></OfferItem>
		</section>
	);
};
