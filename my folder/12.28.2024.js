const button = document.getElementById('click_me_button');
const loadingElement = document.getElementById('loading');
const successMessage = document.getElementById('success');
const errorMessage =  document.getElementById('error');

function greencardAction (resolve, reject){
    loadingElement.innerText ='';
   const randomNumber = Math.floor(Math.random()*10)
   if (randomNumber>5){
    resolveAction('Welcome')
   }else{
    reject('Try again');
   }
}

function bookHotel(){
    alert('Book Hotel');

}

function resolveAction(response){
    successMessage.innerText = response;
    setTimeout(bookHotel,2000)
}
function rejectAction(error){
    errorMessage.innerText = error;

}

button.addEventListener('click',()=>{
    loadingElement.innerText = 'Loading...';
    successMessage.innerTExt = '';
    errorMessage.innerHTML = '';


    setTimeout(() =>{
        greencardAction(resolveAction,rejectAction)
    },3000)
})

console.log(promise,'>>>');
promise
then((response) =>{
    console.log(response)

})

.catch ((error)=>{
    console.log (error)

})