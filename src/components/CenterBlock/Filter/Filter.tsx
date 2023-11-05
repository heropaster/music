import { useState } from "react";
import * as S from "./styles.js";
import { FilterItem } from "./FilterItem/FilterItem";
const options = {
	performer: [
		"Nero",
		"Dynoro",
		"Outwork",
		"Mr. Gee",
		"Ali Bakgor",
		"Стоункат",
		"Psychopath",
		"Jaded",
		"Will Clarke",
		"AR/CO",
		"Blue Foundation",
		"Zeds Dead",
		"HYBIT",
		"Mr. Black",
		"Offer Nissim",
		"Hi Profile",
		"minthaze",
		"Calvin Harris",
		"Disciples",
		"Tom Boxer",
	],
	year: ["По умолчанию", "Сначала новые", "Сначала старые"],
	genre: ["Хип-хоп", "Рэп", "Поп-музыка", "Рок", "Техно", "Инди", "Джаз"],
};
export const Filter = () => {
	const [activeFilter, setActiveFilter] = useState("");

	const handleFilterClick = (filter: string) => {
		if (activeFilter === filter) {
			setActiveFilter("");
		} else {
			setActiveFilter(filter);
		}
	};

	return (
		<S.Filter>
			<S.FilterTitle>Искать по:</S.FilterTitle>
			<FilterItem
				text="исполнителю"
				title="performer"
				isOpen={activeFilter === "performer"}
				onFilterClick={handleFilterClick}
				options={options.performer}
			/>
			<FilterItem
				text="году выпуска"
				title="year"
				isOpen={activeFilter === "year"}
				onFilterClick={handleFilterClick}
				options={options.year}
			/>
			<FilterItem
				text="жанру"
				title="genre"
				isOpen={activeFilter === "genre"}
				onFilterClick={handleFilterClick}
				options={options.genre}
			/>
		</S.Filter>
	);
};
