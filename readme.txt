1: Please put the files on a server or local host to preview. 
eg: put the "/src" files under a localhost "src" folder

looks like:
"src/css"
"src/fonts"
"src/js"
"src/index.html"

then preview:  http://localhost/src/index.html  in your browser.


2: Use Grunt to minify css and JavaScript

install node.js

go to the app root

>npm install -g grunt-cli
>npm install
>grunt build:angular
>npm start

then preview:  http://localhost/angular/index.html  in your browser to view minify version.