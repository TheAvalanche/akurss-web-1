# Задание 1

1. Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
   
   Если объект пустой, то результат должен быть 0.
   
   ```javascript
       var salaries = {
         "Вася": 100,
         "Петя": 300,
         "Даша": 250
       };
       
       //... ваш код выведет 650
    ```
2. Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
   
   Если объект пустой, то пусть он выводит «нет сотрудников».
   
   ```javascript
        var salaries = {
          "Вася": 100,
          "Петя": 300,
          "Даша": 250
        };
        
        // ... ваш код выведет "Петя"
   ```
3. Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:
   
   ```javascript
        // до вызова
        var menu = {
          width: 200,
          height: 300,
          title: "My menu"
        };
        
        multiplyNumeric(menu);
        
        // после вызова
        menu = {
          width: 400,
          height: 600,
          title: "My menu"
        };
   ```
   
4. Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено. В образовательных целях не используйте метод `indexOf`.
   ```javascript
        arr = ["test", 2, 1.5, false];
        
        find(arr, "test"); // 0
        find(arr, 2); // 1
        find(arr, 1.5); // 2
        
        find(arr, 0); // -1
   ```
   
5. Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
   
   Исходный массив не должен меняться.
   
   ```javascript
        var arr = ["HTML", "JavaScript", "CSS"];
        
        // ... ваш код ...
        
        alert( arrSorted ); // CSS, HTML, JavaScript
        alert( arr ); // HTML, JavaScript, CSS (без изменений)
   ```
    
6. В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:  

   ```javascript
       var obj = {
         className: 'open menu'
       }
   ```
   
   Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
   
   ```javascript
        addClass(obj, 'new'); // obj.className='open menu new'
        addClass(obj, 'open'); // без изменений (класс уже существует)
        addClass(obj, 'me'); // obj.className='open menu new me'
        
        alert( obj.className ); // "open menu new me"
    ```