import clsx from "clsx";
import { useState } from "react";
import styles from "./RangeSlider.module.scss";

type RangeSliderProps = {
	title: string;
	className?: string;
};
export const RangeSlider: React.FC<RangeSliderProps> = ({
	title,
	className,
}) => {
	return (
		<div className={clsx(styles.slider, className)}>
			<h5>{title}</h5>
			{/* <span>{state.x} % </span>
			<Slider axis="x" x={state.x} onChange={useState} /> */}
			{/* <Slider
				axis="x"
				x={state.x}
				onChange={({ x }) => setState((state) => ({ ...state, x }))}
			/> */}
		</div>
	);
};
