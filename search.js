let cont=document.getElementById("searchbox");
let show=document.getElementById("output");
let options={
    method:"GET",

}

function showoutput(item){
    let makediv=document.createElement("div");
    show.appendChild(makediv);


    let {title,link,description}=item;

    let a1=document.createElement("a");
    a1.classList.add("first-a");
    a1.textContent=title;
    a1.href=link;
    a1.target="_blank";
    makediv.appendChild(a1);

    let linebr=document.createElement("br");
    makediv.appendChild(linebr);

    let attach=document.createElement("a");
    attach.classList.add("attak");
    attach.textContent=link;
    attach.href=link;
    attach.target="_blank";
    makediv.appendChild(attach);

    let linebr2=document.createElement("br");
    makediv.appendChild(linebr2);
    
    let desc=document.createElement("p");
    desc.textContent=description;
    makediv.appendChild(desc);
    

}


function displaydata(search_results){
    for(let item of search_results){
        showoutput(item);
    }
}
function type(event){
    let val;

    if(event.key==="Enter"){
        show.textContent="";
        val=cont.value;
        let link="https://apis.ccbp.in/wiki-search?search=";
        link=link+val;
        fetch(link,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
            let {search_results}=jsondata;
            displaydata(search_results);
        });
        cont.value="";
    }
}
cont.addEventListener("keydown",type)