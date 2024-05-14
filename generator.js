function generate(){
    let dictionary='';
    if(document.getElementById('lowercase').checked){
        dictionary += "qwertyuiopasdfghjklzxcvbnm";
    }
    if(document.getElementById('uppercase').checked){
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if(document.getElementById('digits').checked){
        dictionary += "1234567890";
    }
    if(document.getElementById('specials').checked){
        dictionary += "!@#$%^&*()[]{}:;<>_+=-";
    }
    const length=document.querySelector('input[type="range"]').value;
    if(length <1 || dictionary.length===0){
        return;
    }
    let password='';
    for (let i=0; i<length ; i++){
        const pos=Math.floor(Math.random()*dictionary.length);
        password += dictionary[pos];
    }
    document.querySelector('input[type="text"]').value=password;
}

async function copy(e){
    const pass=document.querySelector('input[type="text"]').value;
    await navigator.clipboard.writeText(pass);
    e.target.innerHTML='Copied!';
    setTimeout(()=>{
        e.target.innerHTML='Copy';
    },1000);
}

[...document.querySelectorAll('input[type="checkbox"],input[type="range"], button.generate')].forEach(elem =>{
    elem.addEventListener('click',generate);
});

document.querySelector('input[type="range"]').addEventListener('input',e=>{
    document.querySelector('div.range span').innerHTML=e.target.value;
    generate();
});

document.querySelector('div.password button').addEventListener('click',e=>{
    copy(e);
})

generate();