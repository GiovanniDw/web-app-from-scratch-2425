# web-app-from-scratch-2425
CMDA Minor Web Dev


## API

* Base URL:   `https://fdnd.directus.app/items/person/`

### API Endpoints

* Filter My Data:  
     `?filter={"id":237}`
* Filter Tribe/Squad:  
     `?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD Minor Web Dev"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}`
* Filter op haarkleur: 
```js
{"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD%20Minor%20Web%20Dev"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"custom": {"_contains":"haarkleur"}}]}
```


### My Data

```js
{
  "id": 237,
  "date_updated": "2025-02-13T07:01:38.616Z",
  "name": "Giovanni Dwidjosewojo",
  "nickname": "Giovanni",
  "github_handle": "GiovanniDw",
  "website": "https://github.com/giovannidw",
  "bio": "I'm a Communication & Multimedia-Design Student <br/>\r\nat Amsterdam University of Applied Sciences",
  "role": [
    "member"
  ],
  "avatar": "https://avatars.githubusercontent.com/u/10939082",
  "custom": {
    "music_service": "https://music.apple.com/profile/giovannid_",
    "tech_stack": [
      "figma",
      "sketch",
      "notion",
      "vscodium",
      "arc",
      "html5",
      "css",
      "javascript",
      "github"
    ]
  },
  "birthdate": "1995-09-11",
  "team": null,
  "fav_color": "#b3c2ac",
  "fav_property": "transform",
  "fav_tag": "<div>",
  "fav_attribute": "disabled",
  "fav_feature": "WebSockets",
  "fav_kitchen": "Pizza",
  "fav_book_genre": null,
  "fav_country": "IDN",
  "most_energy": "evening",
  "fav_coffee": "Irish coffee",
  "fav_emoji": "💸",
  "squads": [
    262
  ]
}
```

### Data Cleaning
#### Replace not working avatars with empty avatar image   

```js
const emptyAvatarURL = './src/assets/empty_avatar.png';
export const fixGroupData = (data) => {
  const fixData = data;
  if (fixData) {
    fixData.forEach((obj) => {
      if (
        !obj.avatar ||
        obj.avatar === null ||
        obj.avatar === '' ||
        obj.avatar ==
          'https://media.discordapp.net/attachments/852834890566991874/1336985656303423498/images_2.jpeg?ex=67a5cc6c&is=67a47aec&hm=4d816a9913fd74a7d8b700dc475d44b457f2aee619b209be685cab60f6b352ec&=&format=webp&width=450&height=450'
      ) {
        obj.avatar = emptyAvatarURL;
      }
    });
  }
  return fixData;
};
```

#### Parse Custom JSON from `String` to `Object`   

```js
export const fixCustomData = (data) => {
  const fixData = data;
  if (fixData) {
    fixData.forEach((obj) => {
    if (obj.custom) {
        obj.custom = JSON.parse(obj.custom);
      }
    });
  }
  return fixData;
};
```

## CSS Scroll Transitions

```css
header {
  animation-name: stickyHeader;
  animation-fill-mode: forwards;
  animation-timeline: scroll();
  animation-range: 0 120vh;
  }

@keyframes stickyHeader {
  20% {
    border-radius: 0;
    background-color: initial;
  }
  100% {
    transform: scale(1);
    background-color: var(--c-bg-glass);
    border-radius: 25em;
    backdrop-filter: blur(10px);
    font-size: 1em;
    transform: scale(1) translate(0, 1em);
  }
}

```

## Resources
* Scroll Animations:   
    * `https://scroll-driven-animations.style`
    * `https://cydstumpel.nl/css-scroll-driven-animations-for-creative-developers/`
* `https://scroll-driven-animations.style`
* icons: `https://github.com/simple-icons/simple-icons`
* colors: `https://www.colors.tools/color-theme/?currentColor=b3c1ac`
