function toggleClass(element, className) {
    "use strict";
    
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

window.onload = function () {
    "use strict";
    
    var menuButton, menu;
    
	menuButton = document.getElementById("menu-button");
	menu = document.getElementById('menu');
	
	menuButton.onclick = function () {
		toggleClass(menu, 'menu-open');
		return false;
	};
};