# Pilloe

This project, titled Dream Interpreter, uses AI to provide potential interpretations for your dreams. It is built using the React JavaScript library and makes use of the OpenAI GPT-3 model to generate interpretations.

## Project Structure
The main component in the project is the DreamInput component. This component contains a form that collects the user's dream description, sends the data to the OpenAI API for interpretation, and displays the result. It also includes a loading state to provide feedback while the interpretation is being processed.

## Getting Started
First, clone the repository to your local machine. Then, install the required dependencies with npm install.

You'll need to provide your OpenAI API key. Create a .env file in the root of your project, and add the following line, replacing your_api_key with your actual key:

REACT_APP_API_KEY=your_api_key

Now, you're ready to start the project with npm start.

## Available Scripts

In the project directory, you can run:

npm start
Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

npm test
Launches the test runner in the interactive watch mode. For now, no tests have been written for the application.

npm run build
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Using the App
Enter a detailed description of your dream into the provided text box, then click on the "Interpret Dream" button. After a few moments, the AI-generated interpretation of your dream will be displayed.

## Contributing
If you'd like to contribute, feel free to fork the repository and create a pull request with your changes. If you find any bugs, please create an issue in the GitHub repository.

## Learn More
To learn more about the technologies used in this project, you can refer to the following documentation:

Remember, this is an experimental project that uses AI to interpret dreams based on common dream symbolism. The interpretations provided by the AI should not be considered as professional advice. Always consult with a professional when necessary.

https://create-react-app.dev/docs/getting-started/

https://react.dev/

https://axios-http.com/docs/intro

https://platform.openai.com/docs/introduction
