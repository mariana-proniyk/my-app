import clsx from "clsx";
import styles from "./CounterItem.module.scss";

type CounterItemProps = {
	number: number;
	title: string;
	className?: string;
};
export const CounterItem: React.FC<CounterItemProps> = ({
	number,
	title,
	className,
}) => {
	return (
		<div className={clsx(styles.item, className)}>
			<span>{number}</span>
			<p>{title}</p>
		</div>
	);
};
