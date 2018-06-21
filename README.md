## Installation<a name="installation"></a>
### Running Locally
Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1. Clone or Download the repository

	```
	$ git clone https://github.com/SaurabhAgarwal1243/node-cellar.git
	
	```
2. Install Dependencies

	```
	$ npm install
	```
3. Start the application

	```
	$ npm start 
      or
  	 node app.js
	```
Your app should now be running on [localhost:2345](http://localhost:2345/).

### Deploying to Heroku
Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

1. Create a new Heroku application, and push your chat application to a Git remote repository

	```
	$ heroku create
	$ git push heroku master
	```
	
	or
	
	[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


2. Open your chat application in the browser

	```
	$ heroku open
	```


