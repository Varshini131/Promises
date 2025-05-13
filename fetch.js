fetch('https://jsonplaceholder.typicode.com/users/1')
.then(res=>res.json())
.then(data=>{
    console.log("user data: ",data);
    return fetch('https://jsonplaceholder.typicode.com/posts?userid' +data.id);
})
.then(res=>res.json())
.then(posts=> console.log("user posts :",posts))
.catch(erroe=> console.log("error occured",error));