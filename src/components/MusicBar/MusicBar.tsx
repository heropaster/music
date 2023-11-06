import { Controls } from "./Controls/Controls";
import { CurrentTrack } from "./CurrentTrack/CurrentTrack";
import { Volume } from "./Volume/Volume";
import * as S from "./styles.js";
export const MusicBar = () => {
	return (
		<S.Bar>
			<S.Bar__content>
				<S.Bar__progress />
				<S.Bar__playerContainer>
					<S.Bar__player>
						<Controls />
						<CurrentTrack />
					</S.Bar__player>
					<Volume />
				</S.Bar__playerContainer>
			</S.Bar__content>
		</S.Bar>
	);
};
