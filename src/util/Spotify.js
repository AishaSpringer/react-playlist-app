let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]; // set access token value
            const expiresIn = Number(expiresInMatch[1]); // set variable for expiration time and set access token to expire at value for expiration time
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken; // clears parameters from URL and allows us to grab new access token after previous one expires
        }
    }
}

export default Spotify;