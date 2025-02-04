
// fetch('https://randomuser.me/api/?results=10&page=2')

// .then ((resp)=>{
//     return resp.json()
// })
// .then ((data)=>{
//     console.log(data);
// })

// .then ((error)=>{
//     console.log(error);
// })


// function getCountA(){
//    return new Promise((resolve)=>{
//      setTimeout(()=>{
//         resolve(10);
//      },3000)
//    })
// }


// function getcountB(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(20);
//          },2000)
//     })
// }



// async function result(){
//      const aValue = await getCountA();//aracnc awaiti kody pendingi meja linum
//      const bValue = await getcountB();//ete kody async chlini awaity chi ashxati
//      return aValue + bValue;
// }

 // result()
 // .then((resp)=> {
 //     console.log(resp,)
 // })

//  Promise.all([getCountA(),getcountB()])//nuyn kodna optimizacvac
//  .then((resp)=>{
//     console.log(resp,'resp');
//         console.log(resp[0] + resp[1])
//  })

//  Promise.race([getCountA(), getCountB()])
// .then((resp) => {
//     console.log(resp);
// })


import{data} from './db.js';

const ok = false;
function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(ok){
                resolve(data)
                }else{
                    reject({errorMessage: 'Wrong API url'})
            }
        },3000)
    })
}

const loadingElement = document.getElementById('loading');

async function getUserData(){
    loadingElement.innerText = 'Loading...'
    try{
    const resp = await fetchUserData();
    const data = JSON.parse(resp);
    console.log (data);

    } catch(error) {
        console.log(error)
    } finally {
        loadingElement.innerText = ''
    }
}

getUserData();

console.log('code end');