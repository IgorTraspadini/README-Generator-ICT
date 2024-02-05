// function to generate markdown for README
function generateMarkdown(data) {
  return `
${license_badge(data.license)}
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License


## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions


`;
}

function license_badge(license){
  switch (license) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    default:
      return '';
  }
}


module.exports = generateMarkdown;
