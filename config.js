const msalConfig = {
	auth: {
		clientId: '4587c5f5-e0cf-493d-bdba-71021b22bc5a',
		redirectUri: 'http://localhost:8080'
	},
	cache: {
		cacheLocation: "sessionStorage",
		storeAuthStateInCookie: false,
		forceRefresh: true
	}
};

const loginRequest = {
	scopes: [
		'openid',
		'profile',
		'user.read',
		'calendars.read'
	]
};