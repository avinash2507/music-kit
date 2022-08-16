const instruments = ["Drum", "Guitar", "Whistle", "Piano", "Crash"]
const instrumentsComp = document.querySelector(".container")

instruments.forEach((kit) =>{
    const btnComp = document.createElement("button");
    btnComp.classList.add("btn");
    btnComp.innerText =kit;
    instrumentsComp.appendChild(btnComp); 
    btnComp.style.backgroundImage = "url(image/" +kit +".png)";
    const audioComp = document.createElement("audio");
    instrumentsComp.appendChild(audioComp);
    audioComp.src = "music/" + kit + ".wav";
    btnComp.addEventListener("click", () =>{
        audioComp.play();
        // setTimeout(() => audioComp.play(),10);
    });
    window.addEventListener("keydown", (event) =>{
        if (event.key === kit.slice(0,1)){
            btnComp.style.transform = "scale(.9)";
            setTimeout(() => {
                btnComp.style.transform = "scale(1)";
                audioComp.play();
                btnComp.classList.add(".active");


            },100);
        }

    }
)}
    )