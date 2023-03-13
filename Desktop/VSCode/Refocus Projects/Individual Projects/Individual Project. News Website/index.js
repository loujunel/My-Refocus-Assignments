//declaring variables with node lists for both hovered and clicked elements as values
const heartHoveredElements = document.querySelectorAll('.heart-hover');
const heartClickedElements = document.querySelectorAll('.heart-clicked');

//attaching on click event to each hovered heart icon, and toggles it back to original state when clicked
heartHoveredElements.forEach(element => {
    element.addEventListener('click', () => {
        //used element.closest to target parent div
        const cardFavorite = element.closest('.card-favorite');
        const heartClicked = cardFavorite.querySelector('.heart-clicked');
        const heartDefault = cardFavorite.querySelector('.heart-default');
        const heartCounter = cardFavorite.querySelector('.heart-counter');
        //adding class names to toggle visibility with
        heartClicked.classList.toggle('heart-clicked-visible');
        heartDefault.classList.toggle('heart-default-hidden');
        //increment the count when the heart is clicked
        heartCounter.textContent = parseInt(heartCounter.textContent) + 1;
    });
});

//attaching on click event to each clicked heart icon, and toggles it back to original state when clicked
heartClickedElements.forEach(element => {
    element.addEventListener('click', () => {
        //used similar approach to the hovered heart icons
        const cardFavorite = element.closest('.card-favorite');
        const heartClicked = cardFavorite.querySelector('.heart-clicked');
        const heartDefault = cardFavorite.querySelector('.heart-default');
        const heartCounter = cardFavorite.querySelector('.heart-counter');

        heartClicked.classList.toggle('heart-clicked-visible');
        heartDefault.classList.toggle('heart-default-hidden');
        //decrement the count when the heart is clicked
        heartCounter.textContent = parseInt(heartCounter.textContent) - 1;
    });
});

//adding the "read" indicator for cards
//generally used similar approach as above
const cardReadButtons = document.querySelectorAll('.check-icon');

cardReadButtons.forEach(element => {
    element.addEventListener('click', () => {

        const cardRead = element.closest('.card-check');
        //toggle visibility
        cardRead.classList.toggle('read-clicked-visible');
    });
});

//adding "delete" functionality
const crossButtons = document.querySelectorAll('.cross-icon');

crossButtons.forEach(element => {
    element.addEventListener('click', () => {
        //select whole card div to delete using element.closest()
        const cardDelete = element.closest('.cards');
        //used .remove() to delete 
        cardDelete.remove();
    });
});

//also added a toggle for the login button, since it does not redirect to any page
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', () => {
    loginButton.classList.toggle("login-clicked");
});