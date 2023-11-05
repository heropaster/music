import { Search } from "./Search/Search";
import { Filter } from "./Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import * as S from "./styles.js";
export const CenterBlock = () => {
	return (
		<S.Centerblock>
			<Search />
			<S.H2 className="centerblock__h2">Треки</S.H2>
			<Filter />
			<S.Content className="centerblock__content">
				<S.PlayListTtile className="content__title playlist-title">
					<S.Col1 className="playlist-title__col col01">Трек</S.Col1>
					<S.Col2 className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</S.Col2>
					<S.Col3 className="playlist-title__col col03">АЛЬБОМ</S.Col3>
					<S.Col4 className="playlist-title__col col04">
						<S.Col4Svg className="playlist-title__svg">
							<use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
						</S.Col4Svg>
					</S.Col4>
				</S.PlayListTtile>
				<Playlist />
			</S.Content>
		</S.Centerblock>
	);
};
