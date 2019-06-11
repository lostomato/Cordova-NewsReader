# NewsReader
This is an mobile App which created by HTML5/CSS, Jquery, JQuery Mobile and also could be also targeted to cross platform by Cordova. You can download and install it [here](/android-debug.apk)

## Screenshot

![Alt text](/img/main.png)
![Alt text](/img/calender.png)
![Alt text](/img/set.png)
![Alt text](/img/fav.png)

## Structure
It has a Client-Server model.
Client: Web App by HTML5/CSS, JQuery/JQeury Mobile, Cordova
Server: Mysql database, Python Crawler and Server API by php 

## UI Plugins
* [Iscroller 4](http://cubiq.org/iscroll-4)
* [glDatePicker] (http://glad.github.io/glDatePicker/)

## Feature List

* read latest news from database
This is the main page.

* pull up the scroller and read more old news
At most 10 times pullling up

* pull down the scroller and update the latest news
when there is new news in database, it will show a notice. User can pull down the scroller and update.

* read news through calender
It shows a calender page. When a certain date is clicked, the calender disappears and the news on this date shows.
User can pull up the scroller and read more news from this date on.

* save news
User can mark a certain news and save them on favorite page.
Saved news can be deleted from favorite page by user.

* delete the saved news
User can slide on the saved news to delete.

* chose different news resource
User can chose different resource in setting.

* check app installation data in database
As admin you can see how many user have installed this app.

* check version and update
User can check if there is a newer version and update this app.

* login and comment (still in development)
User can register and login, also leave a comment to certain news.




add a new branch for reactnative
