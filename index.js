const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    message: "What's the project title?",
    name: 'title',
    required: true,
    default: 'Title'
  },
  {
    type: 'input',
    message: "Provide the project description.",
    name: 'description',
    required: true,
    default: 'Description'
  },
  {
    type: 'input',
    message: "Provide the project installation.",
    name: 'installation',
    required: true,
    default: 'Installation'
  },
  {
    type: 'input',
    message: "Provide the project usage.",
    name: 'usage',
    required: true,
    default: 'Usage'
  },
  {
    type: 'input',
    message: "Provide the project contributing.",
    name: 'contributing',
    required: true,
    default: 'Contributing'
  },
  {
    type: 'input',
    message: "Provide the project tests.",
    name: 'tests',
    required: true,
    default: 'Tests'
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(file = path.join(process.cwd(), fileName),
    generateMarkdown(data), (err) => err ? console.error(err) : console.log('README.md created!'))
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("README.md", response))
    .catch((error) => console.log(error))
}

// function call to initialize program
init();