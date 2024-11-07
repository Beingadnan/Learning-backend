# File Management Application
This is a simple file management application built with Node.js and Express. It allows you to create and view text files from a web interface.

# Features
View a list of all text files stored in the /files directory.
View the content of each text file.
Create new text files with a title and content.

# Prerequisites
Make sure you have Node.js installed. You can download it from nodejs.org.

# Installation
- Clone the repository:
git clone <repository-url>

-Navigate to the project directory:
cd file-management-app

-Install the required dependencies:
npm install

# Project Structure
-app.js: Main application file containing all routes and logic.
-public/: Directory to hold static files like CSS, JavaScript, and images.
-views/: Contains the EJS template files.
-index.ejs: Displays a list of all files.
-show.ejs: Displays the content of a selected file.
-files/: Directory where all created text files are saved.
