# Geenie: The AstroSAT Visualizer Webtool

## Requirements
Geenie is built upon [React JS](https://reactjs.org), and [Material UI](https://material-ui.com/) library that was mainly used for components, templates and pages. Also, for sky mapping, [Aladin API](http://aladin.unistra.fr/AladinLite/)
was used. This API was successfully integrated in the frontend UI as a ReactJS component, despite of it being an archaic and purely HTML component.

## Installation
To get the project up and running, and view it in the browser, complete the following steps:

1. Download and install Node: <https://nodejs.org/>
2. Clone this repo: `git clone git@github.com:kartikcode/AstroSAT-Visualization-Tool.git` (SSH) or `git clone https://github.com/kartikcode/AstroSAT-Visualization-Tool.git` (HTTPS)
3. Install project dependancies: `npm install`
4. Start the development environment: `npm start`
5. Open your browser and visit <http://localhost:3000>

## Development
When developing components, you may want assets automatically compiled and the browser to refresh automatically. To do this, run the following task:

* `npm run dev`

## Creating a static build
To create a static instance of this project, run the following task:

* `npm run build`

This will create a folder called `www`, into which the required files will be created.

## Deployment
To make this project publicly accessible, you can deploy a static instance by running the following task:

* `npm run publish`

This will publish the contents of `public` to your `gh-pages` branch.

## Repo structure
Sometimes it’s helpful to know what all these different files are for…

```
/
├─ src/
│  ├─ components/    # Components
│  │  ├─ Aladin/     # …that render Aladin sky map
│  │  ├─ Cards/      # …that appears as the Sidebar
│  │  ├─ ModalCard/  # …that appear as a popup on first visit
│  │  ├─ Topbar/     # …that renders the Topbar
├─ .eslintrc         # Linting preferences for JavasScript
├─ LICENSE           # License information for this project
├─ package.json      # Project manifest
└─ README.md         # This file
```
