// function to generate markdown for README
function generateMarkdown(data) {
  return `

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




module.exports = generateMarkdown;
