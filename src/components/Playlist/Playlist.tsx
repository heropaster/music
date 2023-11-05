import * as S from "./styles.js";
import { Track } from "./Track/Track";

export const Playlist = () => {
	const trackList = [
		{
			title: "Guilt",
			author: "Nero",
			album: "Welcome Reality",
			duration: "4:44",
			additional: "",
		},
		{
			title: "Elektro",
			author: "Dynoro, Outwork, Mr. Gee",
			album: "Elektro",
			duration: "2:22",
			additional: "",
		},
		{
			title: "I’m Fire",
			author: "Ali Bakgor",
			album: "I’m Fire",
			duration: "2:22",
			additional: "",
		},
		{
			title: "Non Stop",
			author: "Стоункат, Psychopath",
			album: "Non Stop",
			duration: "4:12",
			additional: "(Remix)",
		},
		{
			title: "Run Run",
			author: "Jaded, Will Clarke, AR/CO",
			album: "Run Run",
			duration: "2:54",
			additional: "(feat. AR/CO)",
		},
		{
			title: "Eyes on Fire",
			author: "Blue Foundation, Zeds Dead",
			album: "Eyes on Fire",
			duration: "5:20",
			additional: "(Zeds Dead Remix)",
		},
		{
			title: "Mucho Bien",
			author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
			album: "Mucho Bien",
			duration: "3:41",
			additional: "(Hi Profile Remix)",
		},
		{
			title: "Knives n Cherries",
			author: "minthaze",
			album: "Captivating",
			duration: "1:48",
			additional: "",
		},
		{
			title: "Knives n Cherries",
			author: "minthaze",
			album: "Captivating",
			duration: "1:48",
			additional: "",
		},
		{
			title: "Knives n Cherries",
			author: "minthaze",
			album: "Captivating",
			duration: "1:48",
			additional: "",
		},
		{
			title: "Knives n Cherries",
			author: "minthaze",
			album: "Captivating",
			duration: "1:48",
			additional: "",
		},
		{
			title: "Knives n Cherries",
			author: "minthaze",
			album: "Captivating",
			duration: "1:48",
			additional: "",
		},
		{
			title: "Knives n Cherries",
			author: "minthaze",
			album: "Captivating",
			duration: "1:48",
		},
		{
			title: "Knives n Cherries",
			author: "minthaze",
			album: "Captivating",
			duration: "1:48",
			additional: "",
		},
		{
			title: "How Deep Is Your Love",
			author: "Calvin Harris, Disciples",
			album: "How Deep Is Your Love",
			duration: "3:32",
			additional: "",
		},
		{
			title: "Morena",
			author: "Tom Boxer",
			album: "Soundz Made in Romania",
			duration: "3:36",
			additional: "",
		},
	];
	return (
		<S.Playlist className="content__playlist playlist">
			{trackList.map((track, index) => (
				<Track
					key={index}
					title={track.title}
					author={track.author}
					album={track.album}
					duration={track.duration}
					additional={track?.additional}
				/>
			))}
		</S.Playlist>
	);
};
