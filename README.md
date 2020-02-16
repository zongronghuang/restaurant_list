# Mini Restaurant Finder
---
Mini Restaurant Finder web app project for Alpha Camp Semester 3

![Demo](/Demo.png)

## Getting Started
---
This mini web project is a website for searching restaurants in Taipei, Taiwan and displaying relevant details.[<sup>1</sup>](#1)

This project is established on Node.js, Express, and Handlebars.

+ **[Node.js](https://nodejs.org/en/)**: For creating a local server and a script designing server actions
+ **[Express](https://expressjs.com/)**: For setting up routing rules for directing users to specific webpages
+ **[Handlebars](https://www.npmjs.com/package/express-handlebars)**: For creating reusable webpage templates

# Installing
---
To run this project, take the steps using the console:

1. Download this project from GitHub:
```
git clone https://github.com/zongronghuang/restaurant_list.git restaurant_list
``` 
2. Go to the **restaurant_list** folder.

3. Install Express using the console:
```
npm install express
```

4. Install Handlebars
```
npm -i express-handlebars
```

5. Launch the local server:
```
node app.js
```

6. Open a web browser and enter the URL:
```
localhost:3000
```

7. Now you can use the web app to view and search restaurants.

# Features
---
### Overview
1. The homepage lists all recorded restaurants and provides the restaurants' names, categories, and user ratings.

### Search by keyword:
1. Enter a keyword (English or Chinese) in the top search field.
2. Press Enter or click the magnifying glass to find matched restaurants.   

### View details:
1. Click on a desired restaurant to show its defailed information (e.g., telephone, address, and description).
---
<a class="anchor" id="1">1</a>: The restaurant profiles and the project as well as the screenshot are only for educational purpose, with no intention of copyright infringement.