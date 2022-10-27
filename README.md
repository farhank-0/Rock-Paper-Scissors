# Rock Paper Scissors From the Odin Project
I completed this project as part of the Odin Project foundations course and learnt fundamental lessons pertaining to web development. Below is a breakdown of what I learnt and how I used it in this project.
##HTML file##
- Linked stylesheet and javascript in header of html document
  - Javascript was linked in header with a defer attribute to load after the elements on the page due to DOM manipulation in js file.
- Utilized sectional approach to display elements

##CSS file##
- Imported font from google fonts api
- Declared global variables using :root for color scheme
- Utilized universal selector to ensure no default padding or margins were displayed
- Applied flexbox display to different containers by using classes 
- Learned how to apply states to buttons specfically hover where mouse hover over a button changes the background color
- Learned how to fix position of elements to a particular part of the screen
  - Used this technique for footer and end game modal
- Learned how to implement transform and transition to make modal box appear and disappear based on active classes (changed by js file)

##Javascript file##
- Learned how to randomize selection of computer using an array and custom built function
- Learned how to add an event listener so that player selection is made based on button click
- Implemented the manipulation of DOM to change text content of html elements
- Implemented the manipulation of CSS classes to change display for example the overlay and endgame modal show up once game is over
- Created functions to check winner of round, if game is over, who won the game
- Once game is finished, player can click button 'play again' to reinitialize the setup without reloading the page.