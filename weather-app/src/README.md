### Step-by-step guide to set up our app and get it running:

### Step 1: Download our `src` Folder

Firstly, download our zipped 'src' folder to your desired location. This folder contains all the custom pages and components of our webpage. Make sure it is extracted before moving onto the next step

#### Step 2: Create a New React Application

Next, choose any directory where you'd like to create a new React project for testing. Now open up the terminal, navigate to this directory, and execute the command below to create a new React application in the example:

npx create-react-app ./

### Step 3: Replace the Default `src` Folder

Once you have made a new React app, navigate into the folder you just made; inside this folder, you will see a folder called src. You need to replace this folder with the version of src you extracted earlier. To do this, copy our version of src into the folder, and you will be given the option to overwrite src. Click yes and allow it to copy everything.

#### Step 4: Include the Google Maps API script

Now, navigate into the public folder. You need to include a script tag in index.html to load the Google Maps JavaScript API.  Copy the script tag provided below :

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5vbsQyArB1D7GggVhSX4rIZkJStQo80g&libraries=visualization"></script>

place it within the <head> of your HTML file.

### Step 5: Install Required Dependencies

Now we have set up src; we need to set up the necessary dependencies. Make sure your current directory is the one you make for the react project and enter the following command

npm install axios
npm install moment


### Step 6: Start the Application

Now , we can start the application and do this by running the following command: 

npm start

