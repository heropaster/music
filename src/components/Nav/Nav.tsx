import React, { useState } from "react";
import "./Nav.scss";
export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="main__nav nav">
			<div className="nav__logo logo">
				<img className="logo__image" src="img/logo.png" alt="logo" />
			</div>
			<div
				className={`nav__burger burger ${isOpen ? "active" : ""}`}
				onClick={handleClick}
			>
				<span className="burger__line burger__line--first"></span>
				<span className="burger__line burger__line--second"></span>
				<span className="burger__line burger__line--third"></span>
			</div>
			<div className="nav__menu menu">
				<ul className={`menu__list ${isOpen ? "opened" : ""}`}>
					<li className="menu__item">
						<a href="#1" className="menu__link">
							Главное
						</a>
					</li>
					<li className="menu__item">
						<a href="#1" className="menu__link">
							Мой плейлист
						</a>
					</li>
					<li className="menu__item">
						<a href="../signin.html" className="menu__link">
							Войти
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
