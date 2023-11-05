import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Sidebar.scss";

export const Sidebar = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => setIsLoading(false), 5000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="main__sidebar sidebar">
			<div className="sidebar__personal">
				<p className="sidebar__personal-name">Sergey.Ivanov</p>
				<div className="sidebar__icon">
					<svg>
						<use xlinkHref="img/icon/sprite.svg#logout"></use>
					</svg>
				</div>
			</div>
			<div className="sidebar__block">
				<div className="sidebar__list">
					<div className="sidebar__item">
						{isLoading ? (
							<Skeleton
								width="250px"
								height="150px"
								baseColor="#202020"
								highlightColor="#444"
							/>
						) : (
							<a className="sidebar__link" href="#1">
								<img
									className="sidebar__img"
									src="../img/playlist01.png"
									alt="day's playlist"
								/>
							</a>
						)}
					</div>
					<div className="sidebar__item">
						{isLoading ? (
							<Skeleton
								width="250px"
								height="150px"
								baseColor="#202020"
								highlightColor="#444"
							/>
						) : (
							<a className="sidebar__link" href="#1">
								<img
									className="sidebar__img"
									src="../img/playlist02.png"
									alt="day's playlist"
								/>
							</a>
						)}
					</div>
					<div className="sidebar__item">
						{isLoading ? (
							<Skeleton
								width="250px"
								height="150px"
								baseColor="#202020"
								highlightColor="#444"
							/>
						) : (
							<a className="sidebar__link" href="#1">
								<img
									className="sidebar__img"
									src="../img/playlist03.png"
									alt="day's playlist"
								/>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
