## Website Performance Optimization portfolio project

Challenge is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

You can see the final project anytime at my website:
http://omaralbeik.com/udacity/frontend/p4


### Getting started
#### 1. Download the entire project zipped file from the repository: https://github.com/omaralbeik/frontend-nanodegree-website-performance-optimization

#### 2. install Node.js and npm if not installed in your device: https://docs.npmjs.com/getting-started/installing-node

#### 3. move to project directory and install npm and gulp

  ``` bash
  $> cd /path/to/your-project-folder (change this to project directory)
  $> npm install
  $> npm install gulp
  ```

#### 4. run project

  ``` bash
  $> gulp
  ```

### Changes has been made to optimize the website:
#### 1: Optimize Page Speed Insights score for index.html to pass 90% for both mobile and desktop
- capitalize methode is replaced by a CSS rule // main.js line 149
- limited use of document.querySelector() where possible
- moved DOM elements selection methods out of loops where possible
