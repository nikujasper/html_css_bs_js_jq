function fun1() {
    var v1 = '<div><input type="text" placeholder = "enter your text" /><i class="fa-solid fa-circle-plus" onclick="fun1()"></i><i class="fa-solid fa-circle-minus" onclick="fun2(event)"></i></div>';


    $("#container").append(v1);
}

function fun2(event) {
    event.target.closest('div').remove();

} 