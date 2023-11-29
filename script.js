//your JS code here. If required.

let pTag = document.querySelector("p");
let button = document.querySelector("button");
button.addEventListener("click",()=>{
//    console.log("enter");
    
	pTag.innerText="Entered Metaverse";
	 var h1Element = document.createElement("h1");
            h1Element.textContent = pTag.textContent;
            document.body.appendChild(h1Element);
});


