<h1>♩ ♪ ♬ Music Theory Coordinator ♬ ♪ ♩</h1>

This project is dedicated to helping people learn music theory that may not yet have the skills to play an instrument.
If you cannot hear disonace and resolve, learning why we play music might be a little harder. 
In the song-building sandbox, or <a href="https://music-theory-coordinator.netlify.app/"><strong>Song Workshop</strong></a>, you can hear
what you learn after reading the "Learn Theory" section.

The music theory gathered to build the sandbox was coded by yours truly in this Rails <a href="https://github.com/taylortreece/music-theory-coordinator-api">Music Theory API</a>

The API was built with the intent to add more keys, scales, and chords in the future, so the backend is built on algorithms that can take in formulas for chords and scales. Please feel free to contact me with any questions you may have.

This API is not queried by the infront in by calling on a server. The data has been organized in the ./src/data folder. There are currently thirty two JSON files in this directory. These are gathered by having the API create the JSON file containing information on a single key, then moving the file to the frontend. This way, the frontend does not have to query an api with every chord, scale, or key change. 

Redux is used to persist the state, and the keys are imported into ./src/actions/rootReducer.js. To add a key, simply create the key in the API, query it to get your JSON file, add it to ./src/data, then import it into ./src/actions/rootReducer.js. This is the flow of data to keep the chord changes quick.

To run this project in your local environment, clone the repo and run ```npm i && npm s```
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# mtc-production
