var credentials ={

	credentials: {
		client_id: '6d5BfXjUkJz4oY34wYpL9iJT8MUMg1BY',
		client_secret: 'BS7vsdmeNYbx8VmC',
		grant_type: 'client_credentials',
		scope: 'viewables:read',

	},
	
	//Autodesk Forge base url
	BaseUrl: 'https://developer.api.autodesk.com',
	Version: 'v1'
} ;

credentials.Authentication = credentials.BaseUrl + '/authentication/' + credentials.Version + '/authenticate'


module.exports = credentials;