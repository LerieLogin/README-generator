// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL':
        return '[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    
    default:
        return 'NA'; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   switch (license){
    case 'GPL':
        return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    default:
      return 'NA';
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'GPL' || license === 'MIT') {
    return `## License
  This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
    } else {
      return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contributing, license } = data;
  const licenseBadge = renderLicenseBadge(license); // Get the license badge URL
  const licenseSection = renderLicenseSection(license);

  return `# ${title}

${licenseBadge} // Include the license badge here

${licenseSection}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## License

This project is licensed under ${license} License.
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
