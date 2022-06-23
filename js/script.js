const email = document.getElementById('email');
const btn = document.getElementById('btn');
const msg = document.getElementById('error-msg');

btn.addEventListener('click',()=>{
    if(!email.value || !/@/.test(email.value)){
        msg.style.opacity = 1;
    }else{
        msg.innerHTML = 'Valid Email address 🙂'
        msg.classList.toggle('success');
    }
})