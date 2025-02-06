# web-app-from-scratch-2425
CMDA Minor Web Dev

https://fdnd.directus.app/items/person/?fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={%20%20%20"_and":%20[%20%20%20%20%20{%20%20%20%20%20%20%20"squads":%20{%20%20%20%20%20%20%20%20%20"squad_id":%20{%20"tribe":%20{%20"name":%20"CMD%20Minor%20Web%20Dev"%20}%20}%20%20%20%20%20%20%20}%20%20%20%20%20},%20%20%20%20%20{%20"squads":%20{%20"squad_id":%20{%20"cohort":%20"2425"%20}%20}%20},%20%20%20%20%20{"custom":%20{"_contains":%20"haarkleur"%20}}%20%20%20]%20}



https://fdnd.directus.app/items/person/?fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={%20%20%20%22_and%22:%20[%20%20%20%20%20{%20%20%20%20%20%20%20%22squads%22:%20{%20%20%20%20%20%20%20%20%20%22squad_id%22:%20{%20%22tribe%22:%20{%20%22name%22:%20%22CMD%20Minor%20Web%20Dev%22%20}%20}%20%20%20%20%20%20%20}%20%20%20%20%20},%20%20%20%20%20{%20%22squads%22:%20{%20%22squad_id%22:%20{%20%22cohort%22:%20%222425%22%20}%20}%20},%20%20%20%20%20{%22custom%22:%20{%22_contains%22:%20%22haarkleur%22%20}}%20%20%20]%20}



`https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD%20Minor%20Web%20Dev"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}&sort=-birthdate`


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



Sorteren Op Leefttijd


```
&sort=-birthdate
```



