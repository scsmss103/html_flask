// Import stylesheets
import "./style.css";



function change_form(frm) {
  
  var forms = {
    inside_move: {
      dit: {
        type: "number",
        id: "dit",
        name: "dit",
        value: "7",
        label: "Days in Trade"
      },
      dte: {
        type: "number",
        id: "dte",
        name: "dte",
        value: "30",
        label: "Days to Expiry"
      },
      cat: {
        type: "text",
        id: "cat",
        name: "name",
        value: "high_low",
        label: "Category",
        aria_describedby: "catHelp",
        description: "close or high_low"
      },
      start: {
        type: "text",
        id: "start",
        name: "start",
        value: "2018-10-08",
        label: "Start Date",
        aria_describedby: "startHelp",
        description: "format: '2018-10-08' (default)"
      },
      mult: {
        type: "number",
        id: "mult",
        name: "mult",
        value: "1",
        label: "Implied Move Multiplyer",
        aria_describedby: "multHelp",
        description: "1 = 1std"
      },
      prem: {
        type: "number",
        id: "prem",
        name: "prem",
        value: "0",
        label: "Premium buffer",
        aria_describedby: "premHelp",
        description: "expected move will be increased by premium buffer"
      }
    } //inside_move
  }; //forms object
  var curr_frm = forms[frm];
  var counter = 0;
  var html = "";
  html += '<form action="#" method="post" class="ml-3 mr-3 mt-1">';
  html += document.getElementById("div_studySelection").outerHTML;
  html += document.getElementById("div_ticker").outerHTML;

  for (var x in curr_frm) {
    counter++;
    var field = curr_frm[x];
    if (counter % 2 != 0) {
      html += '<div class="form-row">';
    }
    html +=
      '<div class="form-group col"><label for="' +
      field.id +
      '">' +
      field.label +
      "</label>";
    html +=
      '<input type="' +
      field.type +
      '" class="form-control" id="' +
      field.id +
      '" name="' +
      field.name +
      '" value="' +
      field.value +
      '"';
    if ("aria_describedby" in field) {
      html +=
        ' aria-describedby="' +
        field.aria_describedby +
        '"/><small id="' +
        field.aria_describedby +
        '" class="form-text text-muted">';
      html += field.description + "</small></div>";
    } else {
      html += "/></div>";
    }
    if (counter % 2 == 0) {
      html += "</div>";
    };
  };

  html += '<br><button type="submit" class="btn btn-primary mb-1">Submit</button></form><script>init();</script>';
  document.getElementById("form").innerHTML = html;
  
  var opt = document.getElementById("studySelection").childNodes;
  for(var i=0;i<opt.length;i++){
    if(opt[i].tagName=='OPTION'){
    opt[i].removeAttribute('selected');
    }
  };
  document.getElementById(frm).setAttribute('selected','selected');
  

}


function init_res_tbl(){

  var tbl = new Tabulator("#res_tbl",{data:res_tbl_data,autoColumns:true});

};

function test() {
  console.log("file loaded");
  document.getElementById("studySelection").getElementsByTag("option")[0]
}

window.change_form = change_form;
window.init_res_tbl = init_res_tbl;
