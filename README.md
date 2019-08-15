# Project-2

## Hosted on Heroku: https://meey-project2.herokuapp.com or http://guestlisterapp.com

## GuestLister

### Have you ever wanted a simple way to plan an event, check people in, and automatically send notifications, even when they've arrived? Well, now you have GuestLister!

### This application allows you to:
#### * create events
#### * track attendance
#### * allow updates/notifications to members attending the group

#### Upon check-in, members can know where they need to go, or to get to know each other better!

### In this group project, we focused on the issue of collecting a guest list and easily using it to check people into your event. We also wanted to utilize email notifications that automatically are sent once a user signs up, as well as soon as they check in. 

### To solve these issues, we created 3 separate tables with Sequelize and created API routes to them. We had to join the tables (Admins, Events, and Guests) so an Admin could easily see their own events and the guests attached to that event. Learning to use associate correctly in Sequelize while also learning Handlebars and collaborating was a fun challenge. Using mailgun, we also found a way to individually send emails to guests. 

### See it in action!
![guestlister gif demo](./public/images/guestlister-demo.gif)

## Technology Used
#### * HTML and Bootstrap
#### * Handlebars
#### * CSS
#### * Sequelize
#### * Mailgun
#### * Express
#### * Node.js
#### * Mocha and Chai for testing

### There are four contributors to this project
