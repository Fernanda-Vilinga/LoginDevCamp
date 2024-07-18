document.getElementById('entrar').addEventListener('click' , ()=>{
    const name=document.getElementById('name').value 
    const password=document.getElementById('password').value 
    const print=document.getElementById('print').innerHTML=`${name} está logada!`
}
)