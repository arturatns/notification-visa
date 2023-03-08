function verificadata(){
	$.get('https://ais.usvisa-info.com/pt-br/niv/schedule/47203635/appointment/days/56.json?appointments[expedite]=false',function name(params) {
		try {
			firstdate = new Date(params[0].date)   
			minDate = new Date('2024-11-31')
			if(firstdate < minDate)
			    notifyMe()
		} catch (error) {
			alert(error)
		}
	})
}


const buttonEl = document.querySelector("button");

const title = "Nova data para visto";
const msg = "RESERVE O VISTO AGORA";
const icon = "https://via.placeholder.com/50x50";
const song = "https://github.com/arturatns/notification-visa/blob/main/piece-of-cake-611.mp3?raw=true";

buttonEl.addEventListener("click", notifyMe);

function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support Desktop notifications");
  }
  if (Notification.permission === "granted") {
    callNotify(title, msg, icon);
    return;
  }
  if (Notification.permission !== "denied") {
    Notification.requestPermission((permission) => {
      if (permission === "granted") {
        callNotify(title, msg, icon);
      }
    });
    return;
  }
}

function callNotify(title, msg, icone) {
  new Notification(title, { body: msg, icon: icone });
  new Audio(song).play();
}

setInterval(verificadata,300000)
