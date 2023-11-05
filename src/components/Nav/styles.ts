import styled from "styled-components";
interface BurgerLineProps {
	$active: string; // Определите тип для $active
}
export const Nav = styled.nav`
	width: 244px;
	background-color: #181818;
	padding: 20px 0 20px 36px;
`;
export const Logo = styled.div`
	width: 113.33px;
	height: 43px;
	padding: 13px 0 13px 0;
	background-color: transparent;
	margin-bottom: 20px;
`;
export const LogoImage = styled.img`
	width: 113.33px;
	height: 17px;
	color: #181818;
`;
export const Burger = styled.div`
	width: 20px;
	height: 36px;
	padding: 13px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&.active {
		position: relative;
		}
	}
`;
export const Burger__line = styled.span<BurgerLineProps>`
	display: inline-block;
	width: 100%;
	height: 1px;
	background-color: #d3d3d3;
	transition: all 0.3s ease;
`;
export const Line__first = styled(Burger__line)`
	${(props) =>
		props.$active &&
		`
		position:absolute;
        top: 50%;
        transform: rotate(45deg);
    `}
`;
export const Line__second = styled(Burger__line)`
	${(props) =>
		props.$active &&
		`
       opacity: 0
    `}
`;
export const Line__third = styled(Burger__line)`
	${(props) =>
		props.$active &&
		`
			position:absolute;
			bottom: 47%;
			transform: rotate(135deg);
		`}
`;
export const Menu = styled.div`
	display: block;
	visibility: visible;
`;
export const Menu__list = styled.ul`
	padding: 18px 0 10px 0;
	opacity: 0;
	transition: opacity 0.3s ease;
	&.opened {
		opacity: 1;
	}
`;
export const Menu__item = styled.li`
	padding: 5px 0;
	margin-bottom: 16px;
`;
export const Menu__link = styled.a`
	color: #ffffff;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
`;
