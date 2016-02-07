## Website Performance Optimization portfolio project

Challenge is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

Final project can be viewed anytime at my website:
http://omaralbeik.com/udacity/frontend/p4


### Getting started
#### 1. Download the entire project zipped file from the repository:
https://github.com/omaralbeik/frontend-nanodegree-website-performance-optimization


#### 2. install Node.js and npm if not installed in your device:
https://docs.npmjs.com/getting-started/installing-node


#### 3. move to project directory and install npm and gulp

  ``` bash
  $> cd /project_path (change this to project directory)
  $> npm install
  $> npm install gulp
  ```

#### 4. run project

  ``` bash
  $> gulp
  ```

### Changes has been made to optimize the website:

#### 1: Optimize index.html to pass 90% for both mobile and desktop on Page Speed Insights:
+ moved requeired styles in index.html to avaoid blocking the main rendering path.
+ changed google font to use javascript.
+ media="print" is added to avoid blocking the rendering proccess.
+ moved scripts to footer, and added "async" to google analytics script since it's not required to load the page.
+ minified HTML files using [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin).
+ minified CSS files using [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css).
+ minified JS files using [gulp-jsmin](https://www.npmjs.com/package/gulp-jsmin) and used [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) to map the files for easier debugging.
+ compressed and created thumbnails images using [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) and [gulp-image-resize](https://www.npmjs.com/package/gulp-image-resize).


#### 2: Optimize pizza.html to run at 60 FPS
+ capitalize methode is replaced by a CSS rule (main.js line 149)
+ added backfact-visibility:hidden to .mover selector in styles.css tp repaint only moving pixels
+ used getElementsByClassName and getElementsById instead of querySelectorAll and querySelector for [faster DOM element selection](https://www.nczonline.net/blog/2010/09/28/why-is-getelementsbytagname-faster-that-queryselectorall/).
+ limited use of document.getElementsByClassName() and getElementsById() where possible
+ moved DOM elements selection methods outside loops where possible
+ changed changePizzaSizes(size) function, that all calculations occures outside the for loop.
+ reduce pizzas count from addEventListener to actual number of pizzas.
+


