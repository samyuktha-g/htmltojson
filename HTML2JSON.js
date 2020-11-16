var DOM_element = document.getElementsByTagName("html");
console.log("element: ", DOM_element, DOM_element[0].childNodes[0].nodeName);
parser = new DOMParser();
docNode = parser.parseFromString(DOM_element, "text/xml");


var fst_elem = DOM_element[0].childNodes;

var json = HtmltoJson(DOM_element, true);
console.log("json: ", json);
// for (var in data) {

// }
// document.getElementById("para").innerHTML = DOm_data;
var Types = {};


function HtmltoJson(DOM_element, json) {
    var data = [];
    var Types = [];
    var content;

    // function get_data(DOM_element) {

    var child_nodes = DOM_element[0].childNodes;


    var DOm_data = {
        type: get_name(child_nodes),
        datas: get_dt(child_nodes)
    }


    function get_name(child_node) {
        for (var j = 0; j < child_node.length; j++) {
            Types.push(child_nodes[j].nodeName);
            var BuildNumber = document.getElementById("type-para");
            var a = document.createElement('p');
            var link = document.createTextNode(child_nodes[j].nodeName);
            a.appendChild(link);
            BuildNumber.innerHTML = child_nodes[j].nodeName;
            //document.getElementById("type-para").innerHTML = Types;
        }
        return Types;
    }

    function get_dt(child_node) {

        // child_node.map(function(num) {
        var j1 = 0;

        for (var j = 0; j < child_node.length; j++) {
            // Types.push(child_nodes[j].nodeName);

            var j2 = 0;
            while (j2 < child_node[j].children.length) {
                if (child_node[j].children[j2].nodeName != undefined) {
                    data.push(child_node[j].children[j2].nodeName);

                    document.getElementById("para").innerHTML = data
                    if (child_node[j].children[j2].nodeName === "h1") {
                        data["content"] = DOM_element[0].textContent;
                    }
                }
                j2++;

            }


        }


        return data;
    }

    return DOm_data;
    //  get_dt(DOM_element);
}