import React from "react";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { CenterBlock } from "./components/CenterBlock/CenterBlock";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { MusicBar } from "./components/MusicBar/MusicBar";
function App() {
	return (
		<div className="wrapper">
			<div className="container">
				<main className="main">
					<Nav />
					<CenterBlock />
					<Sidebar />
				</main>
				<MusicBar />
				<footer className="footer"></footer>
			</div>
		</div>
	);
}

export default App;
