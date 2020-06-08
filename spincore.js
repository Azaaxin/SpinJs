/*
CommandList

$pin(selector).hide();                                             | Hides selected object
$pin(selector).attr(name, value); | attr(name);                    | Sets attribute
$pin(selector).getText(url, attribute); | .getText(url);           | Grabs the text from url, super basic ajax
$pin(selector).hide();
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
            self.Element.style.display = "none"
        },
        attr:(name, value)=>{
            if(value == null)
                self.Element.getAttribute(name)
            else
                self.Element.setAttribute(name, value)
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
        
    }
    return self
}
// function $pinVal(){
//     var valreturn = "";
//     var me =
//     {
//         AjaxVal:(address, val_input, val_search)=>{
//             var get = new XMLHttpRequest();
//             get.onreadystatechange = function() {
//               if (this.readyState == 4 && this.status == 200) {
//                 object = JSON.parse(this.responseText);
//                 valreturn = valfind(object, val_search);
                
//                 return valreturn
//                 function valfind(object, valk) {
//                     if(typeof(object) != 'object') {
//                       return null;
//                     }
//                     var result = null;
//                     if(object.hasOwnProperty(valk)) {
//                         klj = object[valk];
                        
//                     } else {
//                       for(var o in object) {
//                         result = valfind(object[o], valk);
//                         if(result == null) 
//                             continue;
//                         else 
//                             break;
//                       }
//                     }
//                     return klj;
//                 }
                  
//               }
              
//             };
//             if(val_input == null){
//                 get.open("GET", address, true);
//             }else if(val_input.substring(0, 1) == "?"){
//                 get.open("GET", address + val_input, true);
//             }else{
//                 get.open("GET", address + "?" + val_input, true);
//             }
//             get.send();
            
//             me = valreturn
//         }
//     }
//     return me
    
// }

