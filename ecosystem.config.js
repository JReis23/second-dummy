module.exports = {
	apps: [
		{
			script: 'index.js',
			watch: '.'
		}
	],

	deploy: {
		production: {
			user: 'root',
			host: '212.227.73.229',
			ref: 'origin/master',
			repo: 'git@github.com:JReis23/second-dummy.git',
			path: '/var/www/html',
			'pre-deploy-local': '',
			'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
			'pre-setup': ''
		}
	}
};
