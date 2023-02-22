# Exercise 1

## Install
```sh
$ cd exercise-1
$ yarn

```

## Run
```sh
$ yarn dev
```

## Requirements
Http Method: `GET`
Endpoint: `/exercise-1/:firstName/message`

### A.
Should return _Hello world_ message

Sample response
```js
{
  "status": "ok",
  "message": "Hello world"
}
```

### B.
Should return the path variable (`firstName`) value in the response body
Sample response
```js
{
  "status": "ok",
  "message": "Hello {:firstName}"
}
```

### C.
Continuation of **B**. It should return the age in the response body based on the query parameter `age`

GET /exercise-1/:firstName/message?age=20

Sample response
```js
{
  "status": "ok",
  "message": "Hello {:firstName}",
  "age": 20
}
```