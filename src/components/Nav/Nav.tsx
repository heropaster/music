import React, { useState } from "react";
import * as S from "./styles.ts";

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<S.Nav>
			<S.Logo>
				<S.LogoImage src="img/logo.png" alt="logo" />
			</S.Logo>
			<S.Burger className={`${isOpen ? "active" : ""}`} onClick={handleClick}>
				<S.Line__first $active={`${isOpen ? "active" : ""}`}></S.Line__first>
				<S.Line__second $active={`${isOpen ? "active" : ""}`}></S.Line__second>
				<S.Line__third $active={`${isOpen ? "active" : ""}`}></S.Line__third>
			</S.Burger>
			<S.Menu>
				<S.Menu__list className={`${isOpen ? "opened" : ""}`}>
					<S.Menu__item>
						<S.Menu__link href="#1">Главное</S.Menu__link>
					</S.Menu__item>
					<S.Menu__item>
						<S.Menu__link href="#1">Мой плейлист</S.Menu__link>
					</S.Menu__item>
					<S.Menu__item>
						<S.Menu__link href="../signin.html">Войти</S.Menu__link>
					</S.Menu__item>
				</S.Menu__list>
			</S.Menu>
		</S.Nav>
	);
};
