import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styles.js";

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
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => setIsLoading(false), 5000);
		return () => clearInterval(interval);
	}, []);
	return isLoading ? (
		<Skeleton
			baseColor="#202020"
			highlightColor="#444"
			height={"51px"}
			style={{
				marginBottom: "12px",
			}}
		/>
	) : (
		<S.Item>
			<S.Track>
				<S.Track__title>
					<S.Track__image>
						<S.Track__svg>
							<use xlinkHref="img/icon/sprite.svg#icon-note"></use>
						</S.Track__svg>
					</S.Track__image>
					<div>
						<S.Track__link href="http://">
							{title} <S.Track__title__span>{additional}</S.Track__title__span>
						</S.Track__link>
					</div>
				</S.Track__title>
				<S.Author>
					<S.Author__link href="http://">{author}</S.Author__link>
				</S.Author>
				<S.Album>
					<S.Album__link href="http://">{album}</S.Album__link>
				</S.Album>
				<div>
					<S.TimeSvg>
						<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
					</S.TimeSvg>
					<S.TimeText>{duration}</S.TimeText>
				</div>
			</S.Track>
		</S.Item>
	);
};
