# dashboard-demo
Dashboard demo in a node js

##Data from reddit database for September 2015
Data was collected from reddit for september 2015
Data was converted into an api with aggregate functions

#API Routes
api/v1/comments
Retrieves the last 100 comments

api/v1/comments/?&user=[username goes here]&page=[Page number goes here]
Retrieves the last 100 comments made by that user according to the page set

api/v1/subredditAggregate
Retrieves an aggregate for subreddits and gives us the top 5

...More to come


#Built in node js using express, mongodb, and angular

Leonardo Quintero
leoqz.me
