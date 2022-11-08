// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
  name: "title",
message: "name your project"},
{
  name: "chooseYourLicense",
message: "choose a license for your project",
choices: ["MIT", "GPL", "Mozilla"],
type: "list"},
{
  name: "description",
message: "Describe your project"},
{
  name: "installationInstructions",
message: "Describe your installation instructions"},
{
  name: "contributionGuidelines",
message: "Describe your contribution guidelines"},
{
  name: "testInstructions",
message:"Describe your test instructions"},
{
  name:"usageInformation",
message:"Describe your usage information"},
];

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile('published/README.md', data, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    // needs longstring that will be filled in with answers
    //  after questions wered asked in the terminal asynch await
inquirer.prompt(questions)
   .then((answers) => {
    writeToFile(generateMarkdown(answers));})}

// Function call to initialize app
init();
