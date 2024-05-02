// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('../Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GPL', 'NA']
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, content) => {
    fs.writeFile('./README.md', content, (err) => {
        if (err) throw err
        console.log('readme created')
    })
}

// TODO: Create a function to initialize app
const init = async () => {
    try {
        const answers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(answers); // Pass answers object to generateMarkdown function
        writeToFile('./README.md', markdown);
    } catch (error) {
        console.error('Error occurred:', error);
    }
};

// Function call to initialize app
init();
