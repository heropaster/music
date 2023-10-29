import React, { useState } from "react";
import { FilterDropdown } from "./FilterDropdown/FilterDropdown";
import "./FilterItem.scss";

interface FilterItemProps {
	text: string;
	title: string;
	isOpen: boolean;
	onFilterClick: (filter: string) => void;
	options: string[];
}
export const FilterItem: React.FC<FilterItemProps> = ({
	text,
	title,
	isOpen,
	onFilterClick,
	options,
}) => {
	return (
		<div className={`filter__item ${isOpen ? "active" : ""}`}>
			<div
				className="filter__button _btn-text"
				onClick={() => onFilterClick(title)}
			>
				{text}
			</div>
			{isOpen && <FilterDropdown options={options} />}
		</div>
	);
};
