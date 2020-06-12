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
            if(selector == null){
                if(rand_floor == undefined)
                    return Math.floor(Math.random() * 10); 
                else
                    return Math.floor(Math.random() * rand_floor); 
                
            }else{
            if(rand_floor == undefined)
            self.Element.innerHTML += Math.floor(Math.random() * 10); 
            else
            self.Element.innerHTML += Math.floor(Math.random() * rand_floor); 
            }
        },
        phoneMenu:(float, target)=>{
            var element = document.getElementById(target);
            var positionInfo = element.getBoundingClientRect();
            var height = positionInfo.height;
            var width = positionInfo.width;
            element.style.position = "absolute";
            element.style.transition = ".3s";
            if(float == "left"){
                element.style.right = "100%";
                window.addEventListener("click", function(e){
                if (document.getElementById(selector).contains(e.target) || document.getElementById(target).contains(e.target)){
                    element.style.position = "absolute";
                    element.style.width = width + "px";
                    element.style.right = "calc(100%" + " - " + width + "px)";
                    element.style.cursor = "pointer";
                    element.style.transition = ".3s";
                } else{
                    element.style.position = "absolute";
                    element.style.left = "0px";
                    element.style.width = "0px";
                    element.style.cursor = "pointer";
                    element.style.transition = ".3s";
                }
                });
            }else if(float == "right"){
                element.style.left = "100%";
                window.addEventListener("click", function(e){
                if (document.getElementById(selector).contains(e.target) || document.getElementById(target).contains(e.target)){
                    element.style.position = "absolute";
                    element.style.left = "calc(100%" + " - " + width + "px)";
                    element.style.cursor = "pointer";
                    element.style.width = width + "px";
                } else{
                    element.style.position = "absolute";
                    element.style.left = "100%";
                    element.style.width = "0px";
                    element.style.cursor = "pointer";
                }
                });
            }
            if(float == "top"){
                element.style.top = "-" + height + "px";
                window.addEventListener("click", function(e){
                    if (document.getElementById(selector).contains(e.target) || document.getElementById(target).contains(e.target)){
                        element.style.position = "absolute";
                        element.style.top = "0px";
                        element.style.cursor = "pointer";
                        element.style.transition = ".3s";
                      } else{
                        element.style.position = "absolute";
                        element.style.top = "-" + height + "px";
                        element.style.cursor = "pointer";
                        element.style.transition = ".3s";
                      }
                });
            }else if(float == "bottom"){
                element.style.height = "0px";
                element.style.bottom = "0px";
                
                window.addEventListener("click", function(e){
                    if (document.getElementById(selector).contains(e.target) || document.getElementById(target).contains(e.target)){
                    element.style.position = "absolute";
                    element.style.height = height + "px";
                    element.style.cursor = "pointer";
                } else{
                    element.style.position = "absolute";
                    element.style.height = "0" + "px";
                    element.style.cursor = "pointer";
                }
                });
            }
        },
        divInfo:(type)=>{
            var element = self.Element;
            var positionInfo = element.getBoundingClientRect();
            var height = positionInfo.height;
            var width = positionInfo.width;
            var right = positionInfo.right;
            var top = positionInfo.top;
            var left = positionInfo.left;
            var bottom = positionInfo.bottom;
            if(type == "left"){
                return left;
            }
            if(type == "right"){
                return right;
            }
            if(type == "top"){
                return top;
            }
            if(type == "bottom"){
                return bottom;
            }
            if(type == "width"){
                return width;
            }
            if(type == "height"){
                return height;
            }
        },
        cobweb:(input, input2, input3)=>{ 
            if(input == "PlaceMeAt" || input == "PLACEMEAT" || input == "placemeat"){ // --------------------------------------------------------------------------------------  PlaceMeAt
                const input2Object = document.querySelector(input2);
                const myObserver = new ResizeObserver(entries => {
                    entries.forEach(entry => {
                        cobweb_placeatme();
                    });
                });
                myObserver.observe(input2Object);
                window.addEventListener('resize', cobweb_placeatme);
                input2Object.addEventListener('resize', cobweb_placeatme());
                function cobweb_placeatme(){
                    alert("hello");
                    self.Element.style.position = ("absolute");
                    self.Element.style.top = ("0px");
                    self.Element.style.left = ("0px");
                    let left = $pin(input2).divInfo("left");
                    let top = $pin(input2).divInfo("top");
                    if(input3 == "center"){
                        let width = $pin(input2).divInfo("width") / 2;
                        let height = $pin(input2).divInfo("height") / 2;
                        let widthSelecor = $pin(selector).divInfo("width") / 2;
                        let heightSelecor = $pin(selector).divInfo("height") / 2;
                        let LeftCalc = (left + width) - widthSelecor;
                        let topCalc = (top + height) - heightSelecor;
                        self.Element.style.transform = ("translate(" + LeftCalc + "px, " + topCalc + "px)");
                    } else {
                        self.Element.style.transform = ("translate(" + left + "px, " + top + "px)");
                    }
                }
            }
            if(input == ""){} // --------------------------------------------------------------------------------------  Next Function
        },
        
    }
    return self;
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
        me.setCookie = function(cookieName, cookieValue, cookieExpires){
            var date = new Date();
            date.setTime(date.getTime() + (cookieExpires*24*60*60*1000));
            var expires = "expires="+ date.toUTCString();
            document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
        }
        me.getCookie = function(cookieName){
                var name = cookieName + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                  var c = ca[i];
                  while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                  }
                  if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                  }
                }
                return "";
        }
        me.delCookie = function(cookieName){
            document.cookie = cookieName + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        return me;
}
