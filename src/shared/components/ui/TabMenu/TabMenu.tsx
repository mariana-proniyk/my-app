import clsx from "clsx";
import styles from "./TabMenu.module.scss";

export type TabMenuData = {
	name: string;
	key: string;
};

type TabMenuProps = {
	className?: string;
	activeTab: string;
	list: TabMenuData[];
	onSelect: (key: string) => void;
};

export const TabMenu: React.FC<TabMenuProps> = ({
	list,
	activeTab,
	onSelect,
	className,
}) => {
	return (
		<div className={clsx(styles["tab-menu"], className)}>
			<ul>
				{list.map((item) => (
					<li
						onClick={() => onSelect(item.key)}
						className={clsx({ [styles["is-active"]]: item.key === activeTab })}
					>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};
