import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styles.js";

export const Sidebar = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => setIsLoading(false), 5000);
		return () => clearInterval(interval);
	}, []);
	return (
		<S.Sidebar>
			<S.Personal>
				<S.PersonalName>Sergey.Ivanov</S.PersonalName>
				<S.SidebarIcon>
					<svg>
						<use xlinkHref="img/icon/sprite.svg#logout"></use>
					</svg>
				</S.SidebarIcon>
			</S.Personal>
			<S.SidebarBlock>
				<S.List>
					<S.ListItem>
						{isLoading ? (
							<Skeleton
								width="250px"
								height="150px"
								baseColor="#202020"
								highlightColor="#444"
							/>
						) : (
							<S.SidebarLink href="#1">
								<S.SidebarImg
									src="../img/playlist01.png"
									alt="day's playlist"
								/>
							</S.SidebarLink>
						)}
					</S.ListItem>
					<S.ListItem>
						{isLoading ? (
							<Skeleton
								width="250px"
								height="150px"
								baseColor="#202020"
								highlightColor="#444"
							/>
						) : (
							<S.SidebarLink href="#1">
								<S.SidebarImg
									src="../img/playlist02.png"
									alt="day's playlist"
								/>
							</S.SidebarLink>
						)}
					</S.ListItem>
					<S.ListItem>
						{isLoading ? (
							<Skeleton
								width="250px"
								height="150px"
								baseColor="#202020"
								highlightColor="#444"
							/>
						) : (
							<S.SidebarLink href="#1">
								<S.SidebarImg
									src="../img/playlist03.png"
									alt="day's playlist"
								/>
							</S.SidebarLink>
						)}
					</S.ListItem>
				</S.List>
			</S.SidebarBlock>
		</S.Sidebar>
	);
};
