## Requirements

### Goal

Build a player interface for an HTML5 video control that implements basic functions as well as a video annotation capability. This should hide and replace the browser’s built in HTML5 Video control UI. This should be delivered either as a zipped source tree, or on a hosted url.

### Video Playback Support

 - Play
 - Pause
 - Restart
 - Seeking over timeline (optional)
 - Volume Control (optional)

### Annotation support

 - Text/hyperlink video annotations over periods of time during the video, something like http://www.youtube.com/t/annotations_about
 - Positioning control of annotations (optional)


## Workthrough for MVP

### Planning

#### Initial setup

 - Set up project structure
 - Client/Server + readme
 - npm init

#### Server

 - Build app.js file
   - Create server
   - Include mongodb connection
   - Include swig for templating
 - Build database schema, bear in mind OOP video constructor will be used on client side
 - Build routes folder
 - Test first routes
 - Create index.html page with video link hard-coded in views folder, and buttons
   - Play
   - Pause
   - Restart
   - Volume +
   - Volume -
   - Seeking Bar (long div, with smaller box div inside)

#### Client

 - Include skeleton.css for grid system
 - Build basic layout
 - Add event listeners to buttons, leave seeking bar for now
 - Test buttons perform correctly
 - Build new Video constructor. This will allow storage of data regarding video.
 - Include annotations array
 - Build for on html page to add annotations
   - Annotation submit button will just add a div in place onto screen for given amount of time (start with set time, refactor to allow for time to change)
 - Test Video constructor works correctly with DB schema - edit schema if necessary

 #### Stretch Goals

 - Add functionality to timeline seeking section
 - Add function to allow placement of annotations
   - Will put certain part of div where user clicks?


### Issues during development

 - Error when setting static directory, used app.use when it should have been app.set

- Tracker - logic behind percentages and moving the tracker

- Appending annotations - displaying over video html

- Appending annotations - filtering time to display annotations at that time
