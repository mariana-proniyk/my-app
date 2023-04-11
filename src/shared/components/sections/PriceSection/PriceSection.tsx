import clsx from "clsx";
import { PriceItem } from "../../ui";
import styles from "./PriceSection.module.scss";

export const PriceSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<PriceItem
				list={[
					"General living space advices",
					"Rennovation advices",
					"Interior design advices",
					"Furniture reorganization",
					"Up to 5 hours meetings",
				]}
				price={29}
				title={"Design advices"}
			></PriceItem>
			<PriceItem
				list={[
					"Complete home redesign",
					"Rennovation advices",
					"Interior design advices",
					"Kitchen design",
					"Garages organization",
				]}
				price={29}
				title={"Complete interior"}
			></PriceItem>
			<PriceItem
				list={[
					"Furniture for living room",
					"Furniture refurbishment",
					"Interior design advices",
					"Tables and chairs",
					"Kitchens",
				]}
				price={59}
				title={"Furniture design"}
			></PriceItem>
		</section>
	);
};
