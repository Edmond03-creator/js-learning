interface Person {
    firstName: string;
    lastName: string;
    age: number;
    skills: string [];
    isActive: boolean;
}

const response: Array <Person> = [
    {
        firstName: ' John',
    lastName: 'Smith',
    age: 20,
    isActive: true,
    skills: ['React'],

    },


 
    {
        firstName: 'Aram',
        lastName: 'Sargsyan',
        age: 15,
        skills: ['Php'],
        isActive: true,
  }
]

// response.map((item: Person)=> {
//    item.isActive.forEach(()
   


// })

response.map((item: Person)=>{

})

interface I_GlobalAttributes{
    class : string;
    id?: string;
       
}

interface I_AProps extends I_GlobalAttributes{
    download?: boolean;
    href: string;
    target?: '_blank' | '_parent' | '_self' | '_top'

}

function A(props: I_AProps){

}

A({
href: 'https://meet.google.com/landing?pli=1',
download: true,
class: 'my_element'

})