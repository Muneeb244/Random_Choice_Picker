var text = document.getElementById("textarea");
var tags = document.getElementsByClassName("tags")[0];

text.focus();

text.addEventListener('keyup', (e) => {
    createtag(e.target.value);
    if(e.key === 'Enter'){
        e.target.value = '';
        // RandomSelect();
        var start = setInterval(() => {
            let rand = randomRag();
            rand.classList.add('highlight');
            setTimeout(() => {
                rand.classList.remove('highlight');
            }, 100);
        }, 100);
        setTimeout(()=>{
            clearInterval(start);
            setTimeout(()=>{
                randomRag().classList.add("highlight");
            }, 50);
        }, 4000);
    }
})



function createtag(val){
    let arr = val.trim().split(",");
    tags.innerHTML = '';
    for(var i = 0; i < arr.length; i++) {
        var tag = document.createElement('span');
        tag.innerText = arr[i];
        tag.classList = 'tag';
        tags.appendChild(tag);
    }
}


function RandomSelect(){
    randomRag().classList.add("highlight");
}


function randomRag(){
    const rTag = document.querySelectorAll('.tag');
    return rTag[Math.floor(Math.random() * rTag.length)];
}