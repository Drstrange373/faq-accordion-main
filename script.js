// No gpt or gemini help was taken 😍
/* 
read html file and css file for better understanding, 

html: line 35, 49, 61, 72 
line 35 initial state is 'active' class
line 24: about banner element
css: line 95 to understand 'active' class
*/
const questionContainers = Array.from(document.getElementsByClassName('question-container'))
const toggleIcons = Array.from(document.getElementsByClassName('toggle-icon'))
const banner = document.getElementsByClassName('banner')[0]
questionContainers.forEach((element) => {
    element.addEventListener('click', (event) => {
        const activeElement = document.getElementsByClassName('active')[0] // Finding element who has class of 'active
        if (activeElement && activeElement !== event.currentTarget) {
            activeElement.classList.remove('active', false) // If active element is not currentTarget element and element has 'active' class then remove it
            // if clicked element itself has 'active' class then do nothing
        }
        event.currentTarget.classList.toggle('active') // function itself explains

        // Code to toggle icon
        toggleIcons.forEach(element => {
            element.src = "assets/images/icon-plus.svg" // For every click for loop will change source of every element to plus icon 
            if (element.parentElement.parentElement.classList.contains('active')) {
                element.src = "assets/images/icon-minus.svg"
                /*
                 this if statement will only run if parent element, in this case 'question-container' class named element has active class 
                 had to user parentElement.parentElement because 'toggle-icon' class named element is nested and 'question-container is grand parent element
                 to 'toggle-icon'
                 */
            }
        })
    })
})


// This above code is easy, no need to explain for future me
banner.src = window.innerWidth > 600 ? "assets/images/background-pattern-desktop.svg" : "assets/images/background-pattern-mobile.svg"

window.addEventListener('resize', () => {
    banner.src = window.innerWidth > 600 ? "assets/images/background-pattern-desktop.svg" : "assets/images/background-pattern-mobile.svg"
})