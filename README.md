# BusBusters
minimal bus route bookmark manager

## Motivation 
When I go to work , I had to tab at least 4 times to get the bus info. Now it only needs two tabs.


## How to use
there is two way to use it. 
1. Add route Address one by one
2. Upload yourbusroute.json


## JSON Schema
```js
{
    "data": [
        {
            "name": "toWork",
            "url": "https://www.google.com/maps/dir/%EB%8...(skip)"
        },
        {
            "name": "72번버스",
            "url": "https://m.map.naver.com/directions/#/publicTransit/detail/...(skip)"
        },
    ]
}
```

## Caution
Your bus route data will be saved in local storage. It will be removed if you clean your browser with some cleaner software. Before you clean your browser , make sure to back up your data by clicking download button.