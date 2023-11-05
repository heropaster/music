import React from "react";

import "./FilterDropdown.scss";
interface FilterDropdownProps {
	options: string[];
}
export const FilterDropdown: React.FC<FilterDropdownProps> = ({ options }) => {
	return (
		<div className="dropdown">
			<div className="dropdown__list">
                {options.map((item) => (
                    <span>{item}</span>
                ))}
            </div>
		</div>
	);
};
