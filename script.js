

function Expand(){
    let timelineElement = document.getElementsByClassName("timeline-event");
    for (let i = 0; i < timelineElement.length; i++) {
        timelineElement[i].style.display = "flex";
    }
    document.querySelector('.expand').style.display = "none";
    document.querySelector('.minimize').style.display = "block";
}

function Minimize(){
    let timelineElement = document.getElementsByClassName("timeline-event");
    for (let i = 4; i < timelineElement.length; i++) {
        timelineElement[i].style.display = "none";
    }
    document.querySelector('.expand').style.display = "block";
    document.querySelector('.minimize').style.display = "none";
}