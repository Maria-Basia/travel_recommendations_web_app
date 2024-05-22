# Furyroam React and Python Flask project

## STRUCTURE

This repo contains two applications:

- A frontend React App
- A backend server built with the Python Flask framework

These two applications will communicate through HTTP requests, and need to be
run separately.

## SETUP - FRONTEND

### Install dependencies for the frontend

```
cd frontend
npm install
```

### Install an ESLint plugin for your editor, for example
[ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Running in Development Mode

```zsh
npm run dev
```

### Running Tests

```zsh
npm run test
```

### Linting

```zsh
npm run lint
```

### Building for Production

```zsh
npm run build
```


## SETUP BACKEND

### Install dependencies and set up the virtual environment
`cd api`
` pipenv install `

### Activate the virtual environment
` pipenv shell `

# Run the tests (with extra logging)
` pytest -sv `

# Run the app
` python app.py `


# WEB APP DESCRIPTION

## FuryRoam | Travel Recommendations web app | April 2024 | 2-week project
** Tech Python | Flask | Pytest |  React  | Vite | Vitetest | HTML | CSS | Render (deployment) **
** Deployed site URL: https://travel-recommendation-ocw2.onrender.com/ **
** Group project **

FuryRoam is a personalised travel recommendations web app designed to assist users in planning their next adventure. Leveraging user preferences and historical weather data, our platform generates tailored recommendations for destinations. The integration of multiple APIs allows us to fetch relevant data, including city details and weather forecasts, to refine our recommendations. A map API allows visual exploration of recommended cities. 

React allowed the creation of a dynamic and responsive user interface. Through React, we crafted reusable UI components and managed state efficiently. Utilising useContext, we seamlessly passed user input data across pages, optimising API requests at various stages of the user journey.

A Python Flask framework was used at the bakcend to allow for scalabiliyty of data processing for future app expansion - e.g. more sophisticated calculations, allow users to provide more preferences in temrs of their travels to get more accurate and tailored travel recoomendations.

Integration of multiple APIs: Our project also focused on enhancing performance by refactoring logic and optimising API request timing. These efforts resulted in reduced response times, ensuring a seamless and swift user experience.

## Landing page

![Screenshot of the landing page](../screenshots/landing_page.png)

## Continet preference question page

![Screenshot of the continent preference question page ](../screenshots/continent_question_page.png)

## Preferred travel dates page

![Preferred travel dates page](../screenshots/dates_question_page.png)

## Weather preference question page

![Weather preference question page](../screenshots/weather_question_page.png)

## Loading page

![Screenshot of a loading page](../screenshots/loading_page.png)

## Recommendations page

![Recommendations page](../screenshots/recommendation_page.png)


