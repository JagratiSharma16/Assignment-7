var index = 0;

function changeColors() {
    var colors = ["blanchedalmond", "crimson", "greenyellow", "hotpink", "orange","red"];

    document.getElementsByTagName("div")[0].

    style.background = colors[index++];

    if (index > colors.length - 1)
    index = 0;
}