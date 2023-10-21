const crear = () =>{
    axios({
        method:"post",
        url: "https://crudcrud.com/api/0d05c0c918d941c2b7aec70e723613e9"
        data:{
            name:"Fido",
            color:"Verde",
            "_id": "xxxxxx"
        }
    }).then(()=>{
        alert("Ya creamos un unicornio")
    })
}   

const update =()=>{
    let id = 
}