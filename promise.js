let x = 0
const promise = new Promise((resolve, reject) => {
    if(x==0){
    resolve("ok")
    }else{
    reject("failed")
    }
})
promise.then((value) => {
   console.log(value)
}).then(()=>{
    console.log("cest reussi")
})
//get users
const baseUrl = "https://jsonplaceholder.typicode.com"//from jsonplaceholder website
const getusers = ()=>{
    fetch(`${baseUrl}/users`)
    .then((resultat)=>{
    return resultat.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
     console.log(error.message)
    })
}
getusers()
//gestion dexception
const Url="https://api.thecatapi.com/v1/images/search"
const api_key="live_PtLJ0k6PBl4toZ0MCofQvhoh6Oa7rUD1dhOic4zRpUydXYk4DZOvtYSfP0o8sF2z"
const getUrl=()=>{
    fetch(`${Url}`)
    .then((result)=>{
        return result.json()
    })
    .then((dataa)=>{
        console.log(dataa[0].url)
    })
}
getUrl()
const getComments=async()=>{
    const response = await fetch(`${baseUrl}/comments`)
    const resulttt=await response.json()
    console.log(resulttt)
    resulttt.forEach(item => {
        if(item?.email){
         document.writeln(item.email)
        }else{
        document.writeln("lemail est vide")
    }
    });
   }
getComments()