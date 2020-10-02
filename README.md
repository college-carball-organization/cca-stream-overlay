# cca-stream-overlay

The College Carball Association Stream Overlay Control Panel is a private website for CCA broadcasters. Its purpose is to automate and simplify stream overlay elements for livestream broadcasts. This includes processes such as:
  - Switching scoreboard images depending on the series score
  - Setting team rosters for the caster screen
  - Assigning team names and colors for the scoreboard
  - "Ticker" animation and text

These processes previously took up a majority of the time for the broadcasters when livestreaming. Likewise, website reduces the time for stream source management from ~5 minutes to <1 minute per match.

## Libraries Used:
  - jQuery
  - [KnockoutJS](https://knockoutjs.com/)

## Development
To start the development docker container run the following (docker-compose).
```
docker-compose -f docker-compose.dev.yml up -d
```

You can access the overlay-panel at `localhost:4000`

And to take it down type
```
docker-compose -f docker-compose.dev.yml down
```

## About
The [College Carball Association](http://collegecarball.net/) is a collegiate community centered around the video game [Rocket League](https://www.rocketleague.com/). The CCA currently has 148 registered chapters and over 2400 members. 
  
## Acknowledgements
 - All stream overlay elements are owned by the College Carball Association and their creators.
