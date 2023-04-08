const downloadBtn = document.querySelector(".download-btn");
const filelink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";
const image = "https://images.unsplash.com/photo-1680364314482-820f33bbbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

const initTimer = () => {

	if(downloadBtn.classList.contains("disable-timer")){
return(location.href = filelink);
	}

let timer = downloadBtn.dataset.timer;
downloadBtn.classList.add("timer");
downloadBtn.innerHTML = `your file will download in <b>${timer}</b> seconds`;

const initCounter =setInterval(() => {
	if(timer > 0){
		timer--;
 downloadBtn.innerHTML = `your file will download in <b>${timer}</b> seconds`;
	}else{
	clearInterval(initCounter);
	location.href = filelink;
	downloadBtn.textContent = "your file is downloading...";

setTimeout(() => {
downloadBtn.classList.replace("timer","disable-timer");
downloadBtn.innerHTML = `<span class="icon fa-solid fa-download"></span>
	<span class="text">download again</span>`;
},3000);

}
},1000);



};


downloadBtn.addEventListener("click", initTimer);