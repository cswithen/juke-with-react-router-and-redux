import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSong } from '../redux/currentSong';
import { isPaused } from '../redux/isPaused';
import { handlePlayerBtnClick } from '../AUDIO';

const playIcon = 'fa fa-play-circle';
const pauseIcon = 'fa fa-pause-circle';

class PlayPauseBtn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			btnIcon: playIcon,
		};
	}

	render() {
		const { song, currentSong, setCurrentSong, isPaused, setPaused } =
			this.props;

		const handleClick = () => {
			setCurrentSong(song);
			const status = handlePlayerBtnClick(song.audioUrl);
			setPaused(status);
		};

		return (
			<i
				className={
					song.id === currentSong.id && !isPaused ? pauseIcon : playIcon
				}
				onClick={handleClick}
			/>
		);
	}
}

const mapState = state => ({
	currentSong: state.currentSong,
	isPaused: state.isPaused,
});

const mapDispatch = dispatch => ({
	setCurrentSong: song => dispatch(setCurrentSong(song)),
	setPaused: status => dispatch(isPaused(status)),
});

export default connect(mapState, mapDispatch)(PlayPauseBtn);
