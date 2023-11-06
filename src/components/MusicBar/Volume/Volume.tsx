import * as S from "./styles.js";

export const Volume = () => {
	return (
		<S.Volume>
			<S.Volume__content>
				<S.Volume__image>
					<S.Volume__svg>
						<use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
					</S.Volume__svg>
				</S.Volume__image>
				<S.Volume__progress>
					<S.Progress__line type="range" name="range" />
				</S.Volume__progress>
			</S.Volume__content>
		</S.Volume>
	);
};
