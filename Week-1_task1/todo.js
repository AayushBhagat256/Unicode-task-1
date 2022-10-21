function getuser() {
    console.log("hello")
    var useid = localStorage.getItem("userid");
    console.log(useid);
    let dis="";
    dis=`<h1>Welcome user ${useid}</h1>`;
    document.getElementById("welcom").innerHTML=dis;
    fetch(`https://jsonplaceholder.typicode.com/users/${useid}/todos`)
    .then((data1)=>{
        console.log(data1)
        return data1.json();
      })
    .then((objectdata1)=>{
        console.log(objectdata1[0].title);
        let todo="";
        objectdata1.map((values1)=>{
          var number=values1.id
            todo+=`<tr id="hello">
            <div id="tablerow">
            <th scope="row">${values1.id}</th>
            <td id="edit">${values1.title}</td>
            <td>${values1.completed}</td>
            <td><button onclick="edit(${number})">Edit</button></td>
            <td><button onclick="del(${number})">Delete</button></td>

            </div>
          </tr>`
        })
        document.getElementById("tododata").innerHTML=todo
    })
}
function edit(number) {
  console.log("its edited user todo item "+number)
  var promt=prompt("Enter a text : ");
  if(number){
   document.getElementById("edit").innerHTML=promt;
  }
  let info=document.getElementById("edit")
  // console.log(info)
}
function del(numbers) {
  console.log("you have deleted "+numbers);
  var select=document.getElementById("hello")
  select.parentNode.removeChild(select);
  //select.innerHTML="";
  return false;
}