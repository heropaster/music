import * as S from "./styles.js";
export const Controls = () => {
	return (
		<S.Controls>
			<S.Prev>
				<S.PrevSvg>
					<use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
				</S.PrevSvg>
			</S.Prev>
			<S.Play>
				<S.PlaySvg>
					<use xlinkHref="img/icon/sprite.svg#icon-play"></use>
				</S.PlaySvg>
			</S.Play>
			<S.Next>
				<S.NextSvg>
					<use xlinkHref="img/icon/sprite.svg#icon-next"></use>
				</S.NextSvg>
			</S.Next>
			<S.Repeat>
				<S.RepeatSvg>
					<use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
				</S.RepeatSvg>
			</S.Repeat>
			<S.Shuffle>
				<S.ShuffleSvg>
					<use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
				</S.ShuffleSvg>
			</S.Shuffle>
		</S.Controls>
	);
};
