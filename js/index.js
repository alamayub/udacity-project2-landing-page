const links = ['Services', 'About', 'Team', 'Gallery', 'Tuition', 'Contact'];
for(let link of links){
    var li = document.createElement('li');
    li.innerHTML=`<a href='#${link}' class='item'>${link}</a>`;
    document.getElementById('ul').appendChild(li);
}

document.addEventListener('click', function(event) {
    if(event.target.classList.contains('item')) {

        var section = document.querySelector(event.target.hash);
        if(section.classList.contains('active-section')) {
            section.classList.remove('active-section');
        }
        var sections = document.querySelectorAll('section');
        for(s of sections) {
            s.classList.remove('active-section');
        }
        section.classList.add('active-section');
        
    }
}, false);