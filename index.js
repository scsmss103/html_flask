// Import stylesheets
import './style.css';

function init(){
var sel = document.getElementById("studySelection");
//var sel_id = sel.options[sel.selectedIndex].id;
sel.addEventListener("change",function(){console.log(sel.value);});
console.log(sel.value);
};

function change_form(){



};


function test(){
console.log("file loaded");
}

window.init = init;