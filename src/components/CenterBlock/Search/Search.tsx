import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styles.js";

export const Search = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => setIsLoading(false), 5000);
		return () => clearInterval(interval);
	}, []);
	return isLoading ? (
		<Skeleton baseColor="#202020" highlightColor="#444" height={"52px"} />
	) : (
		<S.Search className="centerblock__search search">
			<S.SearchSvg className="search__svg">
				<use xlinkHref="img/icon/sprite.svg#icon-search"></use>
			</S.SearchSvg>
			<S.SearchText type="search" placeholder="Поиск" name="search" />
		</S.Search>
	);
};
