import React from "react";

import * as S from "./styles.js";

interface FilterDropdownProps {
	options: string[];
}
export const FilterDropdown: React.FC<FilterDropdownProps> = ({ options }) => {
	return (
		<S.Dropdown className="dropdown">
			<S.List className="dropdown__list">
				{options.map((item) => (
					<S.ListItem>{item}</S.ListItem>
				))}
			</S.List>
		</S.Dropdown>
	);
};
