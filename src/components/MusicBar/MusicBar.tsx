import React from "react";
import "./MusicBar.scss";
import { Controls } from "./Controls/Controls";
import { CurrentTrack } from "./CurrentTrack/CurrentTrack";
import { Volume } from "./Volume/Volume";
export const MusicBar = () => {
	return (
		<div className="bar">
			<div className="bar__content">
				<div className="bar__player-progress"></div>
				<div className="bar__player-block">
					<div className="bar__player player">
						<Controls />
						<CurrentTrack />
					</div>
					<Volume />
				</div>
			</div>
		</div>
	);
};
