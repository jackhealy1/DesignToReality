# Design To Reality - Login Screen

## By Jack Healy

**Built with**

- React
- Sass

**My Objective**
To create a Login screen with a clean, attractive, responsive and interactive UI.

To add interactivity where possible, with cursor highlighting, form validation and an animated Sign In button.

Use a sympathetic colour palette.

Packages -
Outside of the standard dependencies created by create-react-app and installing Sass I used -
[react-progress-button](https://github.com/mathieudutour/react-progress-button)

**Steps**

```
1. Git clone repo.
2. Run npm install.
3. Run npm start.
```

**Overview**

I initially created the main login container, then added the component files I thought were needed. I started with a basic header and form. Then I styled the components in a basic way. Once i had the basic structure, thought about what additional components and interactivity to add to enhance the form.

I found an animated progress button that i thought would work well in place of back-end validation so I npm installed the relevant package, copied the associated css and worked it into my app. I adjusted some of the css to ensure the button fitted with my basic styling.

I found some online examples of front-end validation and used these as a guide to build my code. I wanted it to be responsive to the users input without immediately showing an error if they were not finished typing. I built functions for the onChange and blur events so the error would show if the user enters then leaves the input with invalid data.The error state will change if the user returns and completes the entry (this time without having to leave the input).

Once i had the front-end validation in place, I passed the error and email/password value parameters to the sign in button. This meant i could alter the onClick function so the error animation shows if the user has inputted an invalid or empty email or password. A success animation shows if both the email and password are valid.

Once all of this was in place i worked on styling, refactoring and making sure that the page was responsive and mobile friendly. I found a [CDN for the desired font](https://homegroupsignindevtest.blob.core.windows.net/hmssignin/font.css) for the background css styling. I have tried to make my code concise and readable, I have also added some notes so that my process and thinking is more clear. I acknowledge that clean code should not require notes but in this instance it is a failsafe!

I very much enjoyed my first attempt creating something with react and sass.

**Commit history**

1. Use terminal to create new react app 'design-to-reality'. First commit and push to GitHub.

2. Use terminal to install sass with yarn. Update file names, update import paths.

3. Create login form and initial styling with css. Get logo svg and font cdn.

4. Progress styling login form add checkbox and styling. add hover. resize elements.

5. Style buttons and main container div. Add gradient background. Update form text. Install react transitions addon.

6. Animate Sign In button. Add mobile responsive view.

7. Add email and password validation and add dynamic button response Validate email and password with time delayed feedback. Update button so it dynamically responds to validation check.

8. Update README and add screenshots.

9. Refactor, check mobile responsiveness.

10. Final commit - README update and final code check.

<!-- **Images**

Main View

![Main View](images/Main.png?raw=true "Main View")

Mobile View

![Mobile View](images/Mobile-view.png?raw=true "Mobile View")

Form Validation

![Form Validation](images/Form-validation.png?raw=true "Form Validation")

Button Error

![Button Error](images/Button-error.png?raw=true "Button Error")

Button Success

![Button Success](images/Button-success.png?raw=true "Button Success") -->
