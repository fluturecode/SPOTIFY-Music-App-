export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	spotify: null,
	discover_weekly: null,
	top_artists: null,
	token: null,
};

const reducer = (state, action) => {
	console.log(action);

	//Action -> type "set user", payload "user"
	switch (action.type) {
		case "SET_USER":
			return {
				//keep what was in current state, but update with the action to set new state
				...state,
				user: action.user,
			};

		case "SET_PLAYING":
			return {
				...state,
				playing: action.playing,
			};

		case "SET_ITEM":
			return {
				...state,
				item: action.item,
			};

		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		case "SET_TOP_ARTISTS":
			return {
				...state,
				top_artists: action.top_artists,
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};

		case "SET_SPOTIFY":
			return {
				...state,
				spotify: action.spotify,
			};

		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};

		// Default if there is no action
		default:
			return state;
	}
};

export default reducer;
