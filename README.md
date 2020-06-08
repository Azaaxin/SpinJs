# SpincoreJs
![Spincore icon](https://i.ibb.co/nPhJBsG/spincore.png)

Tool for my own use to speed up the process of making websites.

##Spin CommandList

| Syntax | Description |
|--|--|
| `$pin(selector).divInfo(value);` | Gets position data and size data from selected object. |
| `$pin(selector).attr(name, value);` | Changes or list attributes. Just like JQuery. |
| `$pin(selector).hide();` | Hides selected object |
| `$pin(selector).getText(url, attribute);` | Grabs content from url, super basic ajax |
| `$pin(selector).getAjax(url, attribute, search);` | AJAX call that can search through JSON for the right values |
| `$pin(selector).phoneMenu(float, target);` | Handles menu's on mobile devices. Mostly position. |
| `$pin(selector).random(value / empty);` | Gives you a random number, default is 10. |

##Spincore CommandList
| Syntax | Description |
|--|--|
| `$pincore().random(value / empty)` | Gives you a random number, default is 10. |
| `$pincore().setCookie(cookieName, cookieValue, expires)` | Creates a cookie from specified input. `expires` only count in days.|
| `$pincore().getCookie(cookieName)` | Gets the cookie value. Has to be selected by it's name. |
| `$pincore().delCookie(cookieName)` | Removes selected cookie. |
## What can it do?
It can't do much right now, but it will be a toolkit once it's done. Everything documented here should work.

## What is the difference between Spincore and Spin?
With **Spin** can you work with the selector, with **Spincore** you don't need that. But sadly does **Spincore** have less functions.

## Can I use this?
Yes of course you can do. But make sure you let people know that I'm the author by not removing comments in the library. 

## In depth
| Line | Syntax|
|--|--|
| phoneMenu() | The target is used for toggling the menu and the `selector` is the object you want to act like a menu. `$pin(id).phoneMenu("right | left | top | bottom", "id")` |
| getAjax() | Used to make a AJAX call to specified document. Attribute can be ignored. Specify `search` to find a object by name. `$pin(selector).getAjax(url, attribute | null, search)` |
| getText() | Used to make a AJAX call to specified document. This function returns the entire requested document. `$pin(selector).getText(url, attribute / null)`|
| random() | Outputs a random generated number. Default value is 10. `$pin(selector).random(int / null)`|
| divInfo() | Works like a variable, select the object with the selector and set the value to ` left / right / top / bottom / width / height` as a string. `$pin(selector).divInfo(value)` | 

*Made by Ludvig Olausson*
