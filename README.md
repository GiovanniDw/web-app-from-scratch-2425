# web-app-from-scratch-2425
CMDA Minor Web Dev


## Data Used

minor data url: `https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD%20Minor%20Web%20Dev"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}`

data bday sort : `https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD%20Minor%20Web%20Dev"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}&sort=-birthdate`


### Filter op haarkleur   
```js
{
  "_and": [
    {
      "squads": {
        "squad_id": { "tribe": { "name": "CMD%20Minor%20Web%20Dev" } }
      }
    },
    { "squads": { "squad_id": { "cohort": "2425" } } },
    {"custom": {"_contains": "haarkleur" }}
  ]
}

```








## Resources

* `https://cydstumpel.nl/css-scroll-driven-animations-for-creative-developers/`
* `https://scroll-driven-animations.style`
* icons: `https://github.com/simple-icons/simple-icons`
