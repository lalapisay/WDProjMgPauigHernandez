# Project Proposal 
## ChemPlay

### Logo:
![Logo](assets/logo.png)

### Description:
#### Some students just can't learn without some flare intigrated in the lesson. Through games and visual tools, we believe that students will be able to learn and appreciate the subject of chemistry more, especially since it is a bit complicated if you can't visualize certain topics.  

******

# FINAL MODIFICATION PROPOSAL

## Things to be added to existing webpages:

### 1. A "Delete Account" option
#### The user can totally remove all of the data they have saved in localStorage by using the "Delete Account" option found in the settings. At the very bottom of the user settings section of the settings, this option will show up as a thin, small, but noticeable button.  A confirm banner asking the user if they are certain they want to deactivate their account will show up when they click this button. The user's data stored in the localStorage will be promptly erased after they have confirmed their decision. This feature will be added in case the user wants to delete an account that they won't be using in the future or that they aren't using right now. Additionally, this option is for privacy in the event that the user decides they no longer want their data on the platform.

### 2. An option that allows the user to change their lesson preferences in the settings page
#### The user can easily modify the lesson preferences they selected when they signed up in the user settings to stay up to date with their current lessons. The user will see many checkboxes that resemble those on the sign-up page directly beneath the user settings section of the page. Lessons that the user has recently selected will already have a checkmark on them. The user's choices that are kept in localStorage will be updated after they check the lessons they wish to learn more about or uncheck the lessons they have already mastered. The problem set page's suggested files will also change based on the lesson that the user selects.

### 3. Change password and email option
#### The user can quickly modify their email address and password in the user settings if they believe that an unidentified person has compromised their data. The user can update their account details in the empty text box or password box directly beneath the text box containing their email address or password. When the user is happy with their new email address or password, they can click "Save Changes" and see a confirm banner asking if they want to continue. Their previous password or email kept in localStorage would be replaced with the new one after everything was verified. 

### 4. Change profile picture option
#### The user can always alter their profile image in the user preferences if they wish to further customize their profile. The user's account has a preset profile image when they sign up. The user can update their profile photo by clicking upload after selecting a file to use as their picture. They can click remove to erase the image if they are unhappy with the one they just selected. 


******

## Final Modification Wireframes:

![Final Modification Wireframe](wireframes/FOR%20FINAL%20MOD.png)

******

# Page Breakdown:
- Page 1, Home: This page contains the main menu of the games, a small introduction to the website and the things it has to offer, and an About Us section.
- Page 2, Game Directory: This page will contain all the games/tools the user can play related to chemistry. 
- Page 3, References: This page will contain all the sources that we will use thoughout the project. 
- Page 4, Atom Merging Game: This page contains a drag and drop game similar to Little Alchemy. In this page, the user can get any element from the periodic table and merge it with another element. For example, the user gets the element Na and places it on the blank space right above the periodic table. Then, the user gets Cl and places it on top of the Na, forming NaCl or Sodium Chloride. 
- Page 5, Balancing Equations Game: This page contains a container with a chemical equation on its top, an image of a seesaw-like structure carrying all the coefficients in the equation, and a small button at its bottom that opens a space for scratch. This page allows the user to visualize balancing equations by literally "balancing" equations. After an equation is balanced, another equation will be given.
- Page 6, Octet Finding Game: This page contains a small molecular biology model in the middle of a container. This allows the user to see the relationship between the molecular biology of an atom with its orbital diagram. 
- Page 7-9, Chemistry mini quiz: These pages contain the actual chem quiz the user selected in the selector. There are three different pages for this because each difficulty has a different quiz.
- Page 10, Sign up Page: This page will gather all the needed user data to create an account and access recommendations for problemsets based on the user's interests.
- Page 11, User Settings: This page will allow the user to change their username, profile picture, password, and email. (Profile Picture will be added to the top navbar next to the website title)
- Page 12, Problem Set List: This page will contain pdf files which will contain sample questions that the user can download and answer. The recommendation file will be based on the chosen topics in the sign up form.




******

## How JS will be applied to the code: 
We plan to use JS in the webpages containing the games. For the first game (Atom Merging Game), we will use JS to track if two atoms can form a valid molecule and send warnings if an atom cannot be bonded. For the second game (Chemistry mini quiz), JS can be used to randomize the question and option order, keep track of the score, and give out a limited amount of hints. For the third game (Balancing Equations Game), we'll use JS to give out hints to the user and check if the equation really is balanced. Lastly, for the final game (Octet Finding Game), we'll use JS to warn the user if they're placing too much electrons.



******
#### Wireframes:

### First Page, Home
![Home Page](wireframes/1_Home.png)
### Second Page, Game Directory
![Game Directory](wireframes/2_GameDirectory.png)
### Third Page, References
![References](wireframes/3_References.png)
### Fourth Page, Atom Merging
![Atom Merging](wireframes/4_AtomMerging.png)
### Fifth Page, Balancing Equations
![Balancing Equations](wireframes/5_BalancingEquations.png)
### Sixth Page, Hybridization Model
![Hybridization Model](wireframes/6_HybridizationModel.png)
### Seventh to Ninth Page, Quizzes
![Quiz](wireframes/7_QuizTemplate.png)
### Tenth Page, Quizzes
![Quiz](wireframes/8_SignUpPage.png)
### Eleventh Page, Quizzes
![Quiz](wireframes/9_UserSettings.png)
### Twelfth Page, Quizzes
![Quiz](wireframes/10_ProblemSetList.png)



******


