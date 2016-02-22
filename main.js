var Filer;
var reader = new FileReader();

function rdfile(files) {
    tfile = files[0];
    reader.readAsText(tfile);
    reader.onload = function(e) {
        Filer = e.target.result;
    };
}

function showFiler() {
    document.getElementById("showData").innerHTML = Filer;
}

function condit() {
    alert("11. Метасимвол – +. Зміст метасимволу + – одна довільна голосна латинська літера повинна бути присутньою в слові в потрібній позиції. Сформувати новий текст, в який помістити знайдені слова, змінивши в них регістр букв, що визначаються метасимволом, на протилежний.");
}

function rFunc() {
    if (Filer != undefined)
        var str = Filer;
    else str = document.getElementById("str").value;
    var templ = document.getElementById("temp").value;
    // var str = "this suoject has a submarined as a suUject subsequence suaject the"; 
    // var template = "su+ject";
    var arrTempl = templ.split("");
    var arrStr = str.split(" ");
    var arr = "aouiyeAOUIYE".split("");
    var templWord;
    var arrResult = new Array();
    var res = new Array();
    for (var i = 0; i < arrTempl.length; i++) {
        if (arrTempl[i] === "+") {
            for (var j = 0; j < arr.length; j++) {
                arrTempl[i] = arr[j];

                templWord = str.search(arrTempl.join(""));

                if (templWord != -1) {
                    arrResult[j] = arrTempl.join("");
                }
            }
        }
    }
    for (var i = 0; i < arrStr.length; i++) {
        for (var j = 0; j < arrResult.length; j++) {
            if (arrResult[j] == arrStr[i]) res[i] = arrResult[j];
        }
    }
    for (var i = 0; i < arrStr.length; i++) {
        for (var j = 0; j < arrResult.length; j++) {
            if (res[i] == arrStr[i]) arrStr[i] = arrStr[i].fontcolor("blue");
        }
    }
    document.getElementById("demo").innerHTML = "<br>" + "Введений рядок : " + str.fontcolor("#000") + "<br>";
    document.getElementById("demoF").innerHTML = "Шаблон (маска) : " + document.getElementById("temp").value.fontcolor("red") + "<br>";
    document.getElementById("beforeS").innerHTML = "Слова що підходять : ";
    document.getElementById("demoS").innerHTML = res.join(" ") + " " + "<br>";
    document.getElementById("demoT").innerHTML = "Вихідний рядок : " + arrStr.join(" ");
    var text = res.join(" ");
    document.getElementById("outTfile").innerHTML = "Відкрити: " +
        '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '" download="output.txt">output.txt</a>';
}