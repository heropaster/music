import React from "react";
import { FilterDropdown } from "./FilterDropdown/FilterDropdown";
import * as S from "./styles.ts";
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
		<S.FilterItem>
			<S.FilterButton
				$active={isOpen ? "acitve" : ""}
				onClick={() => onFilterClick(title)}
			>
				{text}
			</S.FilterButton>
			{isOpen && <FilterDropdown options={options} />}
		</S.FilterItem>
	);
};
