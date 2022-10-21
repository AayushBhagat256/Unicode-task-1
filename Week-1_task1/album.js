function getusers() {
    console.log("hello")
    var useid = localStorage.getItem("useridalbum");
    console.log(useid);
    let dis="";
    dis+=`<h1>welcome user ${useid}</h1>`
    document.getElementById("display").innerHTML=dis

    fetch(`https://jsonplaceholder.typicode.com/users/${useid}/albums`)
    .then((data1)=>{
        console.log(data1)
        return data1.json();
      })
    .then((objectdata1)=>{
        console.log(objectdata1[0].title);
        let album1="";
        
        objectdata1.map((values1)=>{
          //var number=values1.id
          var photoid=values1.id
            album1+=`<tr>
            <th scope="row">${values1.id}</th>
            <td id="edit">${values1.title}</td>
            
            <td><a href="photo.html"><button onClick="getUserPhotoId(${photoid})">album</button></a></td>
          </tr>`
        })
        document.getElementById("albumdisplay").innerHTML=album1
    })
  
   

}
function getUserPhotoId(id)
{
  console.log(id);
  localStorage.setItem("useridphoto", id);
}