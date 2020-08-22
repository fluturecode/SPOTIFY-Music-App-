require("dotenv").config();
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "08afe323576f41689284d24bf4c42363";
const redirectUri = "https://spotify-2b18e.web.app/";
const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const getTokenFromUrl = () => {
	// Pulls out the acccess token
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			//#accessToken=mysecretkey&name=...
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&client_secret=${
	process.env.CLIENT_SECRET
}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
