# Tiger_DB-js

JavaScript driver for Tiger_DB

`npm i tiger_db-js`

## EXAMPLE INSERT



```js
const {Instance} = require("tiger_db-js")

const my_databse_uri = "127.0.0.1" //Your database uri, 127.0.0.1 in your own pc

const db = new Instance("127.0.0.1")

const body = {
  last_name = "Wick",
  profession = "You Know",
  status = "Waiting for the next movie"
}

db.insert("John", body);
```

### THE MAIN INSTRUCTIONS ARE :

- insert(key, value) -> OK
- get(key) -> JSON
- update(key, property, new_value) -> OK
- delete(key) -> OK
- dfs(key) -> String[]
- bfs(key) -> String[]
