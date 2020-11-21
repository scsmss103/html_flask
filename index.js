// Import stylesheets
import './style.css';

function init(){
var sel = document.getElementById("studySelection");
//var sel_id = sel.options[sel.selectedIndex].id;
sel.addEventListener("change",function(){console.log(sel.value);});
console.log(sel.value);
};

function change_form(){

var forms = {

inside_move:{
  dit:{type:"number",id:"dit",name:"dit",value:"7",label:"Days in Trade"},
  dte:{type:"number",id:"dte",name:"dte",value:"30",label:"Days to Expiry"},
  cat:{type:"text",id:"cat",name:"name",value:"high_low",label:"Category",aria_describedby:"catHelp",description:"close or high_low"},
  start:{type:"text",id:"start",name:"start",value:"2018-10-08",label:"Start Date",aria_describedby:"startHelp",description:"format: '2018-10-08' (default)"},
  mult:{type:"number",id:"mult",name:"mult",value="1",label:"Implied Move Multiplyer",aria_describedby:"multHelp",description:"1 = 1std"},
  prem:{type:"number",id:"prem",name:"prem",value="0",label:"Premium buffer",aria_describedby:"premHelp",description:"expected move will be increased by premium buffer"}
}//inside_move

}; //forms object

};


function test(){
console.log("file loaded");
}

window.init = init;