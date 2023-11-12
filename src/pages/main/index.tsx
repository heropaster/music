import { Link } from "react-router-dom";
import * as S from "./style.js";
import {Nav} from "../../components/Nav/Nav";
import {CenterBlock} from "../../components/CenterBlock/CenterBlock";
import {Sidebar} from "../../components/Sidebar/Sidebar";
import {MusicBar} from "../../components/MusicBar/MusicBar";

export const Main = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Main>
					<Nav />
					<CenterBlock />
					<Sidebar />
				</S.Main>
				<MusicBar />
				<footer></footer>
			</S.Container>
		</S.Wrapper>
	);
};
