# Football Database

## An Algolia Search Project

### Goals
As part of my application for the solutions engineer position at Algolia, my goal was to use Algolia's free trial to upload a dataset to my account, index it, configure basic relevance settings, and create a basic UI to display the search results.

### Process
I found a dataset of football players on [Kaggle](https://www.kaggle.com/zynicide/nfl-football-player-stats?select=profiles_1512362725.022629.json). In order to display the most relevant players (ideally the most successful and recent ones first), I set sorting preferences on the Algolia dashboard by Draft Round ascending, then by Birthdate descending, and finally by name to display alphabetically from there. I added filters for the players' position and current team on the front end to give users further specificity. There were a few issues:
- Many entries were missing data I wanted to display, such as draft position and current team.
- I wanted to display the age, but birth year was stored as part of a full birthdate string rather than an integer.

I solved these by conditionally rendering the inconsistent data vs. placeholder strings (app.js lines 80-82) and writing a function to extract the birth year and calculate the player's age (app.js lines 63-67, 82).

### Observations
I found Algolia's React bootstrap to be incredibly easy and intuitive to set up. Their install code builds most of the search interface for you, and leaves you only needing to add all the datapoints you want to display for each hit, add additional widgets, and change the styling. The dashboard documentation was mostly clear as well. The only thing I found confusing was that I was initially unable to select several parameters as custom ranking attributes (namely current team and position). Later, after building most of my app, I went back and saw they were available to choose. I'm not sure what I was missing at first that made them unavailable to select.