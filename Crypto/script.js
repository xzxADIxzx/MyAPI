var menu = document.getElementById("header-menu")
var line1 = document.getElementById("menu-line-1")
var line2 = document.getElementById("menu-line-2")
var line3 = document.getElementById("menu-line-3")
var toggles = document.getElementsByClassName("sidebar-hierarchy-toggle")
var toggle_line = document.getElementsByClassName("sidebar-hierarchy-toggle-line-plus")

function line_add() {
	line1.classList.add("header-menu-line-hover")
	line2.classList.add("header-menu-line-hover")
	line3.classList.add("header-menu-line-hover")
}

function line_rem() {
	line1.classList.remove("header-menu-line-hover")
	line2.classList.remove("header-menu-line-hover")
	line3.classList.remove("header-menu-line-hover")
}

function line_tog() {
	line1.classList.toggle("header-menu-line-1")
	line2.classList.toggle("header-menu-line-2")
	line3.classList.toggle("header-menu-line-3")
}

function hier_tog() {
	var toggle = document.getElementsByClassName(this.classList[2])[0]
	toggle_line[toggle.childNodes[3].classList[2].toString()[30]].classList.toggle("sidebar-hierarchy-toggle-line-plus-opened")
	toggles = document.getElementsByClassName("toggled-" + this.classList[1].toString()[7])
	for (var i = 0; i < toggles.length; i++) {
		toggles[i].classList.toggle("sidebar-hierarchy-toggle-hidden")
	}
}

line_tog()
menu.addEventListener("mouseover", line_add)
menu.addEventListener("mouseout", line_rem)
menu.addEventListener("click", line_tog)

for (var i = 0; i < toggles.length; i++) {
	toggles[i].addEventListener("click", hier_tog)
	toggles[i].classList.add("sidebar-hierarchy-toggle-" + i)
	toggles[i].childNodes[3].classList.add("sidebar-hierarchy-toggle-line-" + i)
}