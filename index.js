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
  },
  {
    type: 'list',
    message: "Provide the project license.",
    name: 'license',
    choices: ['Apache 2.0 License', 'GNU GPL v3', 'MIT License',
      'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal','Eclipse Public License 1.0',
      'GNU Affero General Public License v3.0','GNU General Public License v2.0',
      'Mozilla Public License 2.0','The Unlicense'],
    required: true,
    default: 'MIT License'
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