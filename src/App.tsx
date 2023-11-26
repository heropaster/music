import { GlobalStyle } from "./globalStyles.js";
import * as S from "./pages/main/style.js";
import { Nav } from "./components/Nav/Nav";
import { CenterBlock } from "./components/CenterBlock/CenterBlock";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { MusicBar } from "./components/MusicBar/MusicBar";
import { AppRoutes } from "./routes";
function App() {
	return (
		<>
			<AppRoutes />
			<GlobalStyle />
		</>
	);
}

export default App;
