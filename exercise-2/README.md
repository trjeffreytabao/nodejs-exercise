# Exercise 2

## Install

```sh
$ cd exercise-2
$ yarn

```

## Run

```sh
$ yarn dev
```

## Requirements

### Validations

- Request body should not be empty

`name`

- should not be empty
- should be a String and greater than 3

`age`

- should not be empty
- should be a positive integer

`birthdate`

- should not be empty
- should be a String. BONUS: Validate if it's a valid date.

**BONUS**:
`contact.mobile` - should not be more than 11 digits
`contact.home` - should not be less than 7 digits

`address.line1` - should not be empty
`address.line2` - should not be empty
`address.city` - should not be empty
`address.province` - should not be empty
`address.country`

- should not be empty
- allowed countries should only be _Philippines_, _India_, _New Zealand_, and _Australia_

If there are invalid fields or did not pass the criteria, return the corresponding HTTP status code and message in the response body.

Sample response:
Status: **400**

```js
{
  "message": "'name' should be a String"
}
```

Sample request

**POST** `/exercise-2/:firstName/details`
Body:

```js
{
  "name": "Jimi Hendrix",
  "age": 20,
  "birthdate": "January 1, 2003",
  "contact": {
    "mobile": "09123456789",
    "home": "02 1234"
  },
  "address": {
    "line1", "123 XYZ Sesame Street",
    "line2": "Whatever",
    "city": "Angeles City",
    "province": "Pampanga",
    "country": "Philippines"
  }
}
```

Sample response

```js
{
  "status": "ok"
}
```
