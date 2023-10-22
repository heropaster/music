import React from "react";

import "./Track.scss";
interface TrackProps {
	title: string;
	author: string;
	album: string;
	duration: string;
	additional?: string;
}
export const Track: React.FC<TrackProps> = ({
	title,
	author,
	album,
	duration,
	additional,
}) => {
	return (
		<div className="playlist__item">
			<div className="playlist__track track">
				<div className="track__title">
					<div className="track__title-image">
						<svg className="track__title-svg">
							<use xlinkHref="img/icon/sprite.svg#icon-note"></use>
						</svg>
					</div>
					<div className="track__title-text">
						<a className="track__title-link" href="http://">
							{title} <span className="track__title-span">{additional}</span>
						</a>
					</div>
				</div>
				<div className="track__author">
					<a className="track__author-link" href="http://">
						{author}
					</a>
				</div>
				<div className="track__album">
					<a className="track__album-link" href="http://">
						{album}
					</a>
				</div>
				<div className="track__time">
					<svg className="track__time-svg">
						<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
					</svg>
					<span className="track__time-text">{duration}</span>
				</div>
			</div>
		</div>
	);
};
