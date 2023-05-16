![Black Minimal Motivation Quote LinkedIn Banner](https://github.com/GizemUstahuseyin/ProjectKHASErasmusWebI/blob/main/images/readmebg.jpg)

# 🗺️ ProjectNodeJsPortal
ERASMUS NODE.JS PORTAL - A simple portal of the erasmus application for KHAS University Students.

## 📋 About
 -  This is a simple portal
 -  Pure Node.js, JavaScript used

# Required dependencies:
- express: A web application framework for Node.js.
- body-parser: Middleware to parse request bodies.
- mysql: A MySQL database driver for Node.js.
- cors: Middleware for enabling Cross-Origin Resource Sharing.
- moment: A library for parsing, validating, manipulating, and formatting dates and times.
- nodemailer: A module for sending emails.
- Creating an Express application, enabling CORS, and setting up JSON body parsing.
- Creating a MySQL connection and handling the connection status.

# Registering a user:
- The /kayit endpoint receives an HTTP POST request.
- It extracts the email and password from the request body.
- It executes an INSERT query to add the user to the users table.
- It sends an appropriate response based on the result.

# User login:
- The / endpoint receives an HTTP POST request.
- It extracts the email and password from the request body.
- It executes a SELECT query to check if the user exists in the users table.
- It updates the isLogin field for the user.
- It sends a response indicating whether the login was successful.

# User sign out:
- The /signout endpoint receives an HTTP POST request.
- It extracts the id from the request body.
- It executes an UPDATE query to set the isLogin field to 0 for the specified user.
- It sends a response indicating that the user has been signed out.

# Submitting a form:
- The /BasvuruFormuGonder endpoint receives an HTTP POST request.
- It extracts various form fields from the request body.
- It checks if the user has already submitted a form.
- It executes several INSERT queries to store the form data in different tables.
- It sends a response indicating whether the form submission was successful.

# Retrieving form data:
- The /formGoster endpoint receives an HTTP POST request.
- It extracts the id from the request body.
- It executes several SELECT queries to retrieve form data from different tables.
- It constructs a response object with the retrieved data and sends it back.

# Updating user password:
- The /portal/password endpoint receives an HTTP POST request.
- It extracts the email, password, passnew, and passnewtekrar from the request body.
- It checks if the current password provided is correct.
- It executes an UPDATE query to update the user's password.
- It sends a response indicating whether the password update was successful.

# Sending an email:
- The /submit-form endpoint receives an HTTP POST request.
- It extracts the email, mesaj, and name from the request body.
- It retrieves the user's email and password from the users table.
- It creates a transporter using Nodemailer with the user's email and password.
- It defines the email options (sender, recipient, subject, and text).
- It sends the email using the defined transporter and options.
- It sends a response indicating whether the email sending was successful.

# Update user data:
- The second route ("/guncelle") is used to update user data in the MySQL database. 
- The code retrieves various user details such as name, gender, birthdate, nationality, education, etc., from the request body. 
- It then queries the MySQL database to check if the user exists, and if so, updates the user data in various tables using multiple SQL UPDATE statements. 
- The code also sets the application status as "Başvuru Durumu Devam Ediyor" (Application Status is Ongoing) and returns a success message.

## 👓 Preview
<img src="https://github.com/GizemUstahuseyin/ProjectNodeJsPortal/blob/main/images/nodeportal.gif" width="75%">
<img src="https://github.com/GizemUstahuseyin/ProjectNodeJsPortal/blob/main/images/nodeportal.jpg" width="75%">
<img src="https://github.com/GizemUstahuseyin/ProjectNodeJsPortal/blob/main/images/nodeportal1.jpg" width="75%">
<img src="https://github.com/GizemUstahuseyin/ProjectNodeJsPortal/blob/main/images/nodeportal2.jpg" width="75%">
<img src="https://github.com/GizemUstahuseyin/ProjectNodeJsPortal/blob/main/images/nodeportal3.jpg" width="75%">


## 🙏 Support
This project needs a ⭐️ from you. Don't forget to leave a star ⭐️
