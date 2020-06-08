/*
#Spin Command List

$pin(selector).hide();                                             | Hides selected object
$pin(selector).attr(name, value);                                  | Sets attribute
$pin(selector).getText(url, attribute);                            | Grabs the text from url, super basic ajax
$pin(selector).phoneMenu(float, target);                           | Handles the positioning of hamburger menu's
$pin(selector).random(value | empty);                              | Gives you a random number, default is 10.

#Spincore Command List

$pincore().random(value | empty)                                   | Gives you a random number, default is 10.

*/

function $pin(selector)
{
    const self =
    {
        Element: document.querySelector(selector),
        html: ()=> self.Element,
        on: (event, callback)=>{
            document.addEventListener(event, callback)
        },
        hide:()=>{
            self.Element.style.display = "none";
        },
        attr:(name, value)=>{
            if(value == null)
                self.Element.getAttribute(name);
            else
                self.Element.setAttribute(name, value);
        },
        getText:(url, input)=>{
            var get = new XMLHttpRequest();
            get.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                self.Element.innerHTML += this.responseText;
              }
            };
            if(input == null){
                get.open("GET", url, true);
            }else if(input.substring(0, 1) == "?"){
                get.open("GET", url + input, true);
            }else{
                get.open("GET", url + "?" + input, true);
            }
            get.send();

        },
        getAjax:(url, input, search)=>{
            var get = new XMLHttpRequest();
            get.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                obj = JSON.parse(this.responseText);
                find(obj, search);
                
                function find(obj, k) {
                    if(typeof(obj) != 'object') {
                      return null;
                    }
                    var result = null;
                    if(obj.hasOwnProperty(k)) {
                        self.Element.innerHTML += obj[k] + " ";
                    } else {
                      for(var o in obj) {
                        result = find(obj[o], k);
                        if(result == null) 
                            continue;
                        else 
                            break;
                      }
                    }
                  }
                  
              }
            };
            if(input == null){
                get.open("GET", url, true);
            }else if(input.substring(0, 1) == "?"){
                get.open("GET", url + input, true);
            }else{
                get.open("GET", url + "?" + input, true);
            }
            get.send();

        },
        random:(rand_floor)=>{
            if(rand_floor == undefined)
            self.Element.innerHTML += Math.floor(Math.random() * 10); 
            else
            self.Element.innerHTML += Math.floor(Math.random() * rand_floor); 
        },
        phoneMenu:(float, target)=>{
            var element = document.getElementById(target);
            var selc = document.getElementById(selector);
            var positionInfo = element.getBoundingClientRect();
            var height = positionInfo.height;
            var width = positionInfo.width;
            element.style.position = "absolute";
            element.style.transition = ".3s";
            if(float == "left"){
                element.style.right = "100%";
                selc.addEventListener("click", function(){
                    element.style.position = "absolute";
                    element.style.right = "calc(100%" + " - " + width + "px)";
                    element.style.cursor = "pointer";
                    element.style.transition = ".3s";
                });
            }else if(float == "right"){
                element.style.left = "100%";
                selc.addEventListener("click", function(){
                    element.style.position = "absolute";
                    element.style.left = "calc(100%" + " - " + width + "px)";
                    element.style.cursor = "pointer";
                });
            }
            if(float == "top"){
                element.style.top = "-" + height + "px";
                selc.addEventListener("click", function(){
                    element.style.position = "absolute";
                    element.style.top = "0px";
                    element.style.cursor = "pointer";
                    element.style.transition = ".3s";
                });
            }else if(float == "bottom"){
                element.style.height = "0px";
                element.style.bottom = "0px";
                selc.addEventListener("click", function(){
                    element.style.position = "absolute";
                    element.style.height = height + "px";
                    element.style.cursor = "pointer";
                });
            }
        },
        
    }
    return self
}
function $pincore(){   // Working through variables
    var me = {};
        me.random = function(floor){
            if(floor == undefined)
                me = Math.floor(Math.random() * 10); 
            else
                me = Math.floor(Math.random() * floor); 
            return me;
        }
        return me;
}
