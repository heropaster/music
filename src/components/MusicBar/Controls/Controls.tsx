import React from "react";
import "./Controls.scss";
export const Controls = () => {
	return (
		<div className="player__controls">
			<div className="player__btn-prev">
				<svg className="player__btn-prev-svg">
					<use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
				</svg>
			</div>
			<div className="player__btn-play _btn">
				<svg className="player__btn-play-svg">
					<use xlinkHref="img/icon/sprite.svg#icon-play"></use>
				</svg>
			</div>
			<div className="player__btn-next">
				<svg className="player__btn-next-svg">
					<use xlinkHref="img/icon/sprite.svg#icon-next"></use>
				</svg>
			</div>
			<div className="player__btn-repeat _btn-icon">
				<svg className="player__btn-repeat-svg">
					<use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
				</svg>
			</div>
			<div className="player__btn-shuffle _btn-icon">
				<svg className="player__btn-shuffle-svg">
					<use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
				</svg>
			</div>
		</div>
	);
};
