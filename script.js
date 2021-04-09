let keys = Array.from(document.getElementsByClassName('note'));

keys.forEach(key  =>{
    key.addEventListener('click', playNote);
});

function playNote(e){
 let key = e.target;
 key.classList.add('active');
 console.log('i am active')
 let note = document.getElementById(key.dataset.note);
 note.play();
 key.classList.remove('active');
 console.log('i am not')
}
