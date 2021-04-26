var menu = document.getElementById("header-menu")
var line1 = document.getElementsByClassName("header-menu-line-1")[0]
var line2 = document.getElementsByClassName("header-menu-line-2")[0]
var line3 = document.getElementsByClassName("header-menu-line-3")[0]
var sidebar = document.getElementById("sidebar")
var content = document.getElementById("content")
var form = document.getElementById("header-form")
var search = document.getElementById("header-form-search")
var results = document.getElementById("header-form-search-results")
var toggles = document.getElementsByClassName("sidebar-hierarchy-toggle")
var toggle_line = document.getElementsByClassName("sidebar-hierarchy-toggle-line-plus")

menu.addEventListener("mouseover", function(){
	line1.classList.add("header-menu-line-hover")
	line2.classList.add("header-menu-line-hover")
	line3.classList.add("header-menu-line-hover")
})
menu.addEventListener("mouseout", function(){
	line1.classList.remove("header-menu-line-hover")
	line2.classList.remove("header-menu-line-hover")
	line3.classList.remove("header-menu-line-hover")
})
menu.addEventListener("click", function(){
	line1.classList.toggle("header-menu-line-1")
	line2.classList.toggle("header-menu-line-2")
	line3.classList.toggle("header-menu-line-3")
	sidebar.classList.toggle("sidebar-hidden")
	content.classList.toggle("content-opened")
})

search.addEventListener("focus", function(){
	setTimeout(function(){
		results.style.display = "block"
	}, 100)
})
search.addEventListener("blur", function(){
	setTimeout(function(){
		results.style.display = "none"
	}, 200)
})
search.addEventListener("input", function(){
	var val = this.value.toLowerCase().trim()
	items = document.getElementsByClassName("header-form-search-results-elem")
	if (val != "") {
		for (var i = 0; i < items.length; i++) {
			if (items[i].childNodes[0].innerText.toLowerCase().search(val) == -1) items[i].style.display = "none"
			else items[i].style.display = "block"
		}
	}
	else for (var i = 0; i < items.length; i++) items[i].style.display = "block"
	for (var i = 0; i < items.length; i++) {
		if (items[i].style.display == "block"){
			form.action = items[i].childNodes[0].href
			break
		}
	}
})

for (var i = 0; i < toggles.length; i++) {
	toggles[i].classList.add("sidebar-hierarchy-toggle-" + i)
	toggles[i].childNodes[3].classList.add("sidebar-hierarchy-toggle-line-" + i)
	toggles[i].addEventListener("click", function(){
		var toggle = document.getElementsByClassName(this.classList[2])[0]
		toggle_line[toggle.childNodes[3].classList[2].toString()[30]].classList.toggle("sidebar-hierarchy-toggle-line-plus-opened")
		document.getElementsByClassName("toggled-" + this.classList[1].toString()[7])[0].classList.toggle("sidebar-hierarchy-toggle-hidden")
	})
}

var res = []
var allres = document.getElementsByClassName("sidebar-hierarchy-dot-text")
for (var i = allres.length - 1; i >= 0; i--) res[i] = allres[i]
for (var i = 0; i < res.length; i++) results.innerHTML += "<div class=\"header-form-search-results-elem\">" + res[i].outerHTML + "</div>"