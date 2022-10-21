function getuserphoto() {
    console.log("hii");
    let dis="";
    var useid = localStorage.getItem("useridphoto");
    console.log(useid)
    dis+=`<h1>welcome user ${useid}</h1>`
    document.getElementById("dis").innerHTML=dis


    fetch(`https://jsonplaceholder.typicode.com/albums/${useid}/photos`)
    .then((data1)=>{
        console.log(data1)
        return data1.json();
      })
    .then((objectdata1)=>{
       // console.log(objectdata1[0].title);
        let photoss="";
        
        objectdata1.map((values1)=>{
          //var number=values1.id
          //var photoid=values1.id
        //     album1+=`<tr>
        //     <th scope="row">${values1.id}</th>
        //     <td id="edit">${values1.title}</td>
            
        //     <td><a href="photo.html"><button onClick="getUserPhotoId(${photoid})">album</button></a></td>
        //   </tr>`
        photoss+=`
        <div class="grid text-center">
                <div class="g-col-4" id="grid">
                    <div class="card" style="width: 18rem;">
                        <img src="${values1.thumbnailUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${values1.id}</h5>
                          <p class="card-text">${values1.title}</p>
                          <a href="#" class="btn btn-primary">View Image/(Download)</a>
                        </div>
                      </div>
                </div>
                </div>
        
        `
        })
        document.getElementById("gallerydis").innerHTML=photoss
    })


}