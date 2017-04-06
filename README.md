# NG2 GitHub Profile Search

This is the repository for my project **GitHub Profile Search**  


## Project Description

This application is for searching GitHub profiles in GitHub.com by using [GitHub API](https://github.com/settings/developers) 


## Instructions

1. Register an application to use [GitHub Api](https://github.com/settings/developers)

2. Input the following fields.
    - Applicatins Name
    - Homepage Url    -   *'http://localhost:3000'*
    - Application Description
    - Authorization callback URL  -   *'http://localhost:3000'*

    After successful registration ClinetID and Client Secret code will be generated.
    By using those codes we can access github profiles data by making AJAX call to GitHub API

1. Make sure you have these installed
  - [node.js](http://nodejs.org/)
  - [git](http://git-scm.com/)

2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) 

    `git clone https://github.com/kumardss/NG2GitHubProfileSearch.git`
    
3. CD to the folder

    `cd github-profile-search`
    
4. Run the following to install the project dependencies:

    `npm install`
    
5. Run the npm start command to build the code, watch for file changes, and serve up the site locally:

    `npm start`

Note that the site will run using `lite-server` and will be served up at the following local address:  
    http://localhost:3000

*If you use a code editor that launches its own web server please note that it may run on a different port number. 
You will want to use `npm start` for this project.*
  