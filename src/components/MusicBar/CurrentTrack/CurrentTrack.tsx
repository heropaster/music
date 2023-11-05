import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CurrentTrack.scss";
export const CurrentTrack = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => setIsLoading(false), 5000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="player__track-play track-play">
			<div className="track-play__contain">
				<div className="track-play__image">
					{isLoading ? (
						<Skeleton
							width={"51px"}
							height={"51px"}
							baseColor="#202020"
							highlightColor="#444"
						/>
					) : (
						<svg className="track-play__svg">
							<use xlinkHref="img/icon/sprite.svg#icon-note"></use>
						</svg>
					)}
				</div>
				{isLoading ? (
					<Skeleton
						count={2}
						width={"49px"}
						baseColor="#202020"
						highlightColor="#444"
					/>
				) : (
					<>
						<div className="track-play__author">
							<a className="track-play__author-link" href="http://">
								Ты та...
							</a>
						</div>
						<div className="track-play__album">
							<a className="track-play__album-link" href="http://">
								Баста
							</a>
						</div>
					</>
				)}
			</div>

			<div className="track-play__like-dis">
				<div className="track-play__like _btn-icon">
					<svg className="track-play__like-svg">
						<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
					</svg>
				</div>
				<div className="track-play__dislike _btn-icon">
					<svg className="track-play__dislike-svg">
						<use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
					</svg>
				</div>
			</div>
		</div>
	);
};
