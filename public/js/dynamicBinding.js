var classname = document.getElementsByClassName("yes");

var myFunction = function() {
    var attribute = this.getAttribute("data-myattribute");
    alert(attribute);
};

for (var i = 0; i < classname.length; i++) {
    console.log(classname[i])
    classname[i].addEventListener('click', dynamicClick);
}

const dynamicClick = () => {

}