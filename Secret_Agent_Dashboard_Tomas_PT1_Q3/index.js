console.log('System Initialized...');

const agentScore = 95.5;
const agentName = 'Bond';

console.log('Profile: ' + agentName + 'Score' + agentScore);
console.log(typeof  agentName);



//2
document.getElementById("btn-mission").addEventListener("click", function(){

  document.getElementById("status-text").textContent = "Status: Mission Active - Do not disturb.";

});


//3
document.getElementById("btn-color").addEventListener("click", function(){

    const div =document.getElementById("agent-profile");
    div.style.color = "red";

});


//4
// WIP
document.getElementById("btn-disguise").addEventListener("click", function() {

    const img = document.getElementById("agent-avatar");
     const imgOrig = "./pibertdey.jpg";
     
    img.src = img.src.includes("Civilian")
        ? "./images/agent-avatar.png"
        : "./images/agent-avatar.png";

});



//5
document.getElementById("btn-stealth").addEventListener("click", function(){

 document.getElementById("agent-profile").style.display = "none";

});




//6
document.getElementById("codename-input").addEventListener("input", function(event){

    const codename = event.target.value;
    
    document.getElementById("agent-name").textContent = "Codename: " + codename; 
});


//7
document.addEventListener('keydown', (event) => {
    console.log(`Security Alert: Key pressed is: ${event.key}`);
});





