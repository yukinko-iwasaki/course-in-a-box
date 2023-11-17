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
    
    const ANNOUNCEMENTS = {
        baseline_test:{
            start_datetime: "2023/11/8, 11:59 PM",
            end_datetime: "2023/11/29, 9:00 AM",
            content: "Baseline knowledge test is due by 29th Nov 9:00am (ET)"
        },
        open_session:{
            start_datetime: "2023/11/8, 11:59 PM",
            end_datetime:   "2023/11/29, 10:30 PM",
            content: "Live opening session 29th Nov from 9:30am to 10:30am (ET)"
        },
        office_hour1:{
            start_datetime: "2023/11/8, 11:59 PM",
            end_datetime: "2023/11/30, 10:30 AM",
            content: "Admin office hours 30th Nov from 9:30am to 10:30am (ET)"
        },
        office_hour2:{
            start_datetime: "2023/12/5, 11:59 PM",
            end_datetime: "2023/12/6, 10:30 AM",
            content: "Technical office hours 6th Dec from 9:30am to 10:30am (ET)"
        },
        closing_session:{
            start_datetime: "2023/12/06, 11:59 PM",
            end_datetime: "2023/12/13, 10:30 AM",
            content: "Live closing session 13th Dec from 9:30am to 10:30am (ET)"
        },
        quizzes:{
            start_datetime: "2023/11/8",
            end_datetime: "2023/12/13",
            content: "All quizzes are due 13 December, 11pm (ET) "
        }
    }
    const announceElement = document.getElementsByClassName("announcement");
    if (announceElement.length === 0) return;

    for (const key in ANNOUNCEMENTS){
        const announce = ANNOUNCEMENTS[key]
        const announceStart = new Date(announce.start_datetime)
        const announceEnd = new Date(announce.end_datetime);
        
        const now = new Date().toLocaleString("en-US", {timeZone:'America/New_York'})
        if (announceStart < new Date(now) && announceEnd >new Date(now)){
            announceElement[0].className = 'announcement active'
            const list = announceElement[0].getElementsByTagName("ul")?.[0]
            const item = document.createElement('li')
            item.textContent = announce.content
            list.appendChild(item)
        }
    }
}
