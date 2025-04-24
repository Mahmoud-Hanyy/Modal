'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal= document.querySelectorAll('.show-modal');


// Function to open window
const OpenModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Function to close window
const CloseModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Assigning OpenWindow function to the three buttons
for(let i=0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click',OpenModal)
}

// Assigning CloseWindow function to the close button and Overlay
btnCloseModal.addEventListener('click',CloseModal);
overlay.addEventListener('click',CloseModal);

// Enable to CloseWindow using 'esc' button on keyboard
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        CloseModal();
    }
});

