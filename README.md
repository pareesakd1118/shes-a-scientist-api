# She's a Scientist Api

This API is meant to be use with the She's a Scientist frontend repo linked [here](https://github.com/pareesakd1118/shes-a-scientist)
## Set Up
1. Clone down this repo.
2. `cd` into the repo.
3. Run`npm install` to install dependencies.
4. Run `node server.js` to run the server locally.
5. Navigate to `http://localhost:3000/api/v1/scientists` in your browser and you should see the data from the server. 


## Routes
The server should be running locally at `http://localhost:3000/api/v1`.

| **VERB** | **URL** | **REQUEST BODY** | **SAMPLE RESPONSE** |
| -------- | ------- | ---------------- | ------------------- |
| GET all scientists| /scientists | None | `[ { id: <Number>, name: <String>, dateOfBirth: <String>, dateOfDeath: <String>, accomplishment: <Text>, blurb: <Text>, field: <String>, wikipediaLink: <String>, image: <String>, backgroundImage: <String>}, ... ] }` |
| GET single scientist | /scientists/:id | None | `{ id: <Number>, name: <String>, dateOfBirth: <String>, dateOfDeath: <String>, accomplishment: <Text>, blurb: <Text>, field: <String>, wikipediaLink: <String>, image: <String>, backgroundImage: <String>}` |
