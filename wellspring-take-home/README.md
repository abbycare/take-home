# Wellspring Electronic Health Record System

### Introduction
At Wellspring, we’re building tools to supercharge our families’ ability to provide care throughout their journey with us. Whether it’s through training or care, we’re here to tackle the bottlenecks that affect our families’ experience.

This project aims to build a front-end web experience for our electronic health record system. The interface will help our clinical team to easily access patient data and track how to best support our families.

<img width="960" alt="image" src="https://user-images.githubusercontent.com/24286181/233230581-738175b3-b2aa-4cfe-ad46-f942a743b461.png">

### Features
* Side nav panel
* Recent patients table
* Upcoming visits table

### Getting Started
1. Run `npm install` to install the necessary dependencies
2. Run `npm start` to start the application
3. Open your web browser and navigate to http://localhost:3000 to view the application

### API Endpoints
This project comes with two API endpoints that you can use to fetch data for your front-end application:

* GET `/api/patients`
Returns an array of patients.

* GET `/api/appointments`
Returns an array of appointments.

### Typescript

This project was originally built using JavaScript, but candidates are free to add TypeScript to the existing codebase. To do so, simply run the following command in your terminal:

```npm install --save-dev typescript```

After installing TypeScript, create a tsconfig.json file in the root directory of your project with the following configuration:

```json{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true,
    "jsx": "react",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "declaration": true,
    "outDir": "./dist",
    "sourceMap": true
  },
  "include": ["./src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### Technologies
* React.js
* HTML/CSS

### Design Assets
Link to Figma design: (https://www.figma.com/file/oUQ510tObMV24neUboZKuD/Take-home-Design-V2.0?node-id=0-1&t=RT5tZiHAUQTip1rw-0)
Link to download the assets is here (optional): https://drive.google.com/file/d/1-Gi7yLZMxclh_ld8M3LTSQkfExkzKBLl/view?usp=sharing
