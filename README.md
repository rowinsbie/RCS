<img src="documentation/img.png" width="400">


## RCS Coding exam

a simple web application that allows user to login, create,update,view and delete users and roles.

The laravel is used as an API for this project and I've used vue js for the front end that consumes the API.

## Installation
<p> Run the command below to clone the project.</p>
 <code>git clone https://github.com/rowinsbie/RCS.git</code>
<p>Install the composer to the project</p> 
<code>composer install</code>
<p>go to vue folder</p>
<code>cd vue/</code>
<p>Install the dependecies</p>
<code>npm install</code>

# Configuration
## API Configuration
<p>create a new .env in the root of the laravel project
</p>
<p>Change the SESSION_DRIVER value to cookie</p>
<code>SESSION_DRIVER=cookie</code>
<p>Copy paste the code below</p>
<code>
SESSION_DOMAIN=localhost
</code><br />
<code>
SANCTUM_STATEFUL_DOMAINS=localhost:8000
</code>

## Front-end .env configuration
<p>From the root folder of the laravel project, go to vue folder</p>
<code>cd vue/</code>
<p>create a new file .env and copy paste below the variable for the API URL</p>
<code>VITE_API = http://127.0.0.1:8000</code>