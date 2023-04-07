import clsx from "clsx";
import { CounterItem } from "../../ui/CounterItem/CounterItem";
import styles from "./CounterSection.module.scss";

export const CounterSection = () => {
	return (
		<section className={styles.root}>
			<div className={clsx(styles.cards, ["content-center"])}>
				<CounterItem number={12} title={"Years Of Experiance"}></CounterItem>
				<CounterItem number={85} title={"Success Project"}></CounterItem>
				<CounterItem number={15} title={"Active Project"}></CounterItem>
				<CounterItem number={95} title={"Happy CUstomers"}></CounterItem>
			</div>
		</section>
	);
};
