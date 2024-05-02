// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import fs from 'fs'

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
        name: 'tableOfContents',
        message: 'Enter table of contents:'
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
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GPL', 'None']
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
    const answrs = await inquirer.prompt(questions)

    while (shouldContinueAddingProjects) {
        const { wantsToAddAnotherProject } = await inquirer.prompt(continueAddingProjectQuestions)
        
        if (wantsToAddAnotherProject) {
            const projectAnswers = await inquirer.prompt(projectQuestions)
            projects.push(projectAnswers)
        } else {
            shouldContinueAddingProjects = false
        }
    }
        const readme = generateHtml(generalAnswers, projects)
        writeHtmlFile(readme)
        
}
// Function call to initialize app
init();
