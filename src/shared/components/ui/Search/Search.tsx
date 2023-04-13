import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";
import styles from "./Search.module.scss";

type SearchProps = {
	className?: string;
	placeholder: string;
};
export const Search: React.FC<SearchProps> = ({ className, placeholder }) => {
	return (
		<label className={clsx(styles.search, className)}>
			<Input placeholder={placeholder}></Input>
			<Icon name={"search"}></Icon>
		</label>
	);
};
