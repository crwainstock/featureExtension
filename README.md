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
  - Action "/look"
    - This page renders the `FilterNavigation` and `ImageSlider` components.
  - About "/about"
  - Error "/\*"

- This project uses a `Layout` route to allow the `Header` and `Footer` to be rendered on each page.

## App Demo

- [A video demo of the app can be viewed here.](https://drive.google.com/file/d/1KMF1_emOH6ttxVfjs7v5hmWwxFp8F9AJ/view?usp=share_link)
- [Slides from a demo presentation are available here.](https://docs.google.com/presentation/d/1kX6VLbRHNCLnboFzngUIYEdDYTfXfTsqO73Mgf9BR58/edit?usp=share_link)

## Next features

Add more filters

On the back-end front:

- Create an 'images' DB with two tables: NH and human images
- Tables will contain pairs of images that have already been processed to compare human and NH vision
- Elaborate on that DB

## Resources

[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
[React Router](https://reactrouter.com/en/main)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
