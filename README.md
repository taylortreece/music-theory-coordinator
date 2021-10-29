<h1>♩ ♪ ♬ Music Theory Coordinator ♬ ♪ ♩</h1>

This project is dedicated to helping people learn music theory that may not yet have the skills to play an instrument.
If you cannot hear disonace and resolve, learning why we play music might be a little harder (unless you just REALLY like math for the sake of math).

In the song-building sandbox, or <a href="https://music-theory-coordinator.netlify.app/"><strong>Song Workshop</strong></a>, you can hear
what you learn after reading the "Learn Theory" section.

The music theory gathered to build the sandbox was coded by yours truly in this Rails <a href="https://github.com/taylortreece/music-theory-coordinator-api">Music Theory API</a>

The API was built with the intent to add more keys, scales, and chords in the future, so the backend is built on algorithms that can take in formulas for chords and scales. Please feel free to contact me with any questions you may have.

This API is not queried by the infront in by calling on a server. The data has been organized in the ./src/data folder. There are currently thirty two JSON files in this directory. These are gathered by having the API create the JSON file containing information on a single key, then moving the file to the frontend. This way, the frontend does not have to query an api with every chord, scale, or key change. 

Redux is used to persist the state, and the keys are imported into ./src/actions/rootReducer.js. To add a key, simply create the key in the API, query it to get your JSON file, add it to ./src/data, then import it into ./src/actions/rootReducer.js. This is the flow of data to keep the chord changes quick.

To run this project in your local environment, clone the repo and run ```npm i && npm s```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


