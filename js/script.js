
window.onload = onLoad();

function onLoad(){
    addCollapsibles();
    addAnnouncement();
}

function addCollapsibles() {
    const collapsibles = document.getElementsByClassName("collapsibile-title");

    for (let element of collapsibles){
        element.addEventListener("click", ()=>{
            if (element.parentElement.className === 'collapsible active'){
                element.parentElement.className = 'collapsible'
                const icon = element.getElementsByTagName('i')[0]
                icon.className = "fa fa-angle-down"
            }else{
                element.parentElement.className = 'collapsible active'
                const icon = element.getElementsByTagName('i')[0]
                icon.className = "fa fa-angle-up"
            }
        }
        )

    }

}

function addAnnouncement(){
    const announce = document.getElementsByClassName("announcement");
    const accounceDate = new Date('2023-11-01 GMT-0500').toDateString()
    if (announce){
        const today = new Date().toDateString();
        if(today === accounceDate){
            announce[0].className = 'announcement active'
        }else{
            announce[0].className = 'announcement'
        }
    }
}