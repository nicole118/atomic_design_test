# atomic_design_test 

# Setup instructions 
#	Download project.
#	To start the project go to the src/app/ folder and in terminal used the ‘ng serve command’.

# Atomic design structure 
# I used the atomic design structure starting from the atoms, where I included the smallest components that can be standalone, such as the buttons and icons, as well as the text. Then I created the molecules, which were formed from the already existing atoms and I added certain features to them, such as a box on the border of the text, or the header which was formed from the header text and icons. The next step was to create the organisms, which in this case, are the three main sections of the page. I created two organisms which were made up of the header and the display boxes/customer details (molecules) and various icons/buttons (atoms). I created  the layout of the page (template), from which I then implemented the actual page in the applied template page.  

# Improvements
# If I had more time I would have improved the hard coding of the information, as I would have used the ngFor directive and an array to display the information more dynamically and not call the component manually. Another functionality I would like to improve is the copy button, as I would make it more dynamic instead of hard coding the values. Another functionality would be to able to look into the items of the digital review, i.e. VoIP Acc. #1, etc. where when the used clicks on the item, they can look into what information there is related to that item. I would also apply bootstrap so that the styles would be more standardized.

 
