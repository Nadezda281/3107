//Cоздать функцию greeting, которая принимает в качестве параметра имя человека и выводит приветствие, 
//используя переданное ей имя, в консоль.

//Необходимо продемонстрировать работу функции: у пользователя запросить его имя и вызвать функцию greeting, 
//передав туда полученное от пользователя значение.





function greeting(name) {
    console.log("Привет, " + name + "!");
}

let userName = prompt("Введите ваше имя: ");
greeting(userName);