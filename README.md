# AniColors App

## Introduction

The original aim of this App is to provide the user an easy way to see how other animals see the world. The app was originally built by a classmate using React and React-Bootstrap for styling, and I worked with the app as a part of a feature extension project for the CodeOp bootcamp.

The project includes file structure to integrate Node, Express, and MySQL database, but the current version of the project is a front-end app only. These directions are to use the app as it is in the current form, but further development could be made to include the backend elements.

## Setup

### Dependencies

- `cd anicolors` then `cd client` and run npm install. This will install client dependencies (React).
- Run `npm start` to run the development server.
- **Note:** The client folder holds everything to do with the front end of the app.

## Code & Functionality Overview

- This project includes pages and components.
- `App.js` is where the routes (pages) are defined.
- Pages include:

  - Home "/"
  - Look "/look"
    - This page renders the `FilterNavigation` and `ImageSlider` components.
  - About "/about"
  - Error "/\*"

- This project uses a `Layout` route to allow the `Header` and `Footer` to be rendered on each page.

## How it works

The SPA has four routes: Home, Action, About, and ErrorPage (for wrong URLs).
Home, Action and About will be seen by the user as three actual different pages. They can be accessed through their links in the navbar (Action 'LOOK' in the navbar).

[Important](Home, About and ErrorPage CSS are inside App.css. Action.js has its own dedicated .css file.)

The whole action happens (not surprisingly) in the Action route.
When the page loads, the user will see a default image (Pablita the jumpong spider) with an instruction message and a box containing four non-human animal choices and a reset button.

By clicking on the image, fetchImage function is activated and random images are uploaded by fetching an API from Pixabay. The API queries includes specific categories ('nature', 'animals') and an image type ('photos').

By clicking on each animal choice:

- handleFilter function assigns the NHA value and calls changeColor function
- changeColor function sets a specific CSS class
- each CSS class contains a combination of filters which imitates that specific NHA vision and will modify the image accordingly

Reset button ('Come back Pablita!') recalls the starting default image with its instruction message.

## Problems and blockers

The first huge blocker, which I have not overcome yet, was building the back end.

I had to spend some time and ask for help to make some event handlers work.

The last big blocker was ensuring a responsive frontend behaviour for different devices. I would say it's still a work-in-progress.

## Need to do and improve

Accessibility.

Front end styling, particularly responsive design.

Make box appear together with random images.

Normalize .css files (all CSS in just one App.css or a .css for each .js)

Maybe find a better title for the project.

## Next features

Add more filters

On the back-end front:

- Create an 'images' DB with two tables: NH and human images
- Tables will contain pairs of images that have already been processed to compare human and NH vision
- Elaborate on that DB

## Resources

[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
[React Bootstrap](https://react-bootstrap.netlify.app/)
[React Router](https://reactrouter.com/en/main)
[Pixabay API](https://pixabay.com/service/about/api/)
[Speechbubble - original code](https://codingislove.com/css-speech-bubbles/)
[Inspiration for filters](https://linuxhint.com/change-color-image-blue-css/)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
