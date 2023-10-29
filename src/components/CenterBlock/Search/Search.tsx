import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Search.scss";

export const Search = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => setIsLoading(false), 5000);
		return () => clearInterval(interval);
	}, []);
	return isLoading ? (
		<Skeleton baseColor="#202020" highlightColor="#444" height={"52px"} />
	) : (
		<div className="centerblock__search search">
			<svg className="search__svg">
				<use xlinkHref="img/icon/sprite.svg#icon-search"></use>
			</svg>
			<input
				className="search__text"
				type="search"
				placeholder="Поиск"
				name="search"
			/>
		</div>
	);
};
