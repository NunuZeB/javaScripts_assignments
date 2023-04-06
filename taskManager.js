//create IIFE named taskManger and array of list of tasks
let taskManager=(function(){
    let tasks =[];
//fuction to add each tasks to an array by push method
    function addTask(description){
        tasks.push(description)
    }
//dusplay list of tasks added by addTask function
    function displayTasks(){
        console.log(tasks);
    }
//return the add and display tasks
    return{
        addTask: addTask,
        displayTasks: displayTasks,
    };
})();

//adding list od tasks
    taskManager.addTask("Task Lisst 1"),
    taskManager.addTask("Task List 2"),
    taskManager.addTask("Task List 3")

// calling a taskManager
taskManager.displayTasks()