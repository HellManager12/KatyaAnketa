function test1(form) {
    let str;
    let checking = 0;
    if (form.text1.value == "" && form.text2.value == "" && form.text3.value == "")
        alert("Вы ничего не заполнили ((((");
    else if (form.text1.value == "") {
        alert("Пожалуйста, введите строку имени!");
    } else if (form.text2.value == "") {
        alert("Пожалуйста, введите строку фамилии!");
    } else if (form.text3.value == "") {
        alert("Пожалуйста, введите строку отчества!");
    } else {
        str = form.text2.value + " " + form.text1.value + " " + form.text3.value;
        checking += 1;
    }
    if (form.note.checked && form.explorer.checked) {
        str = str + "\nВы работаете и в Notepad++ и в Enternet explorer";
        checking += 1;
    } else if (form.note.checked && !form.explorer.checked) {
        str = str + "\nВы работаете в Notepad++";
        checking += 1;
    } else if (!form.note.checked && form.explorer.checked) {
        str = str + "\nВы работаете в Enternet explorer";
        checking += 1;
    } else if (!form.note.checked && !form.explorer.checked) {
        alert("Вы что, ходите на пары просто так?");
    }
    let something =document.getElementsByName('love')
    let sum=0;
    for (let i=0;i<something.length;i++){
        if (something[i].checked){
            str += "\n" + something[i].value;
            checking+=1;
            sum+=1;
        }
    }
    if (sum==0){
        alert("Вы забыли о любви к информатике");
    }
    if (checking == 3)
        alert(str);
    
}