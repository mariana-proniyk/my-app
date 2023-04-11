import { Button } from "../Button/Button";
import styles from "./PriceItem.module.scss";

type PriceItemProps = {
	list: string[];
	price: number;
	title: string;
};
export const PriceItem: React.FC<PriceItemProps> = ({ list, price, title }) => {
	return (
		<div className={styles.item}>
			<h5>{title}</h5>
			<div className={styles.price}>
				{price}
				<span>/month</span>
			</div>
			<div className={styles["sub-title"]}>Most Popular Plans</div>
			<ul>
				{list.map((item) => (
					<li>{item}</li>
				))}
			</ul>
			<Button className={styles.button} type={"is-brown"}>
				Get Started
			</Button>
		</div>
	);
};
