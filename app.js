function talk(){
    var know = {
    "hello":"Hello!",
    "hi":"Hello!",
    "Hello":"Hello:)",
    "Hi":"Hi:)",
    "What's up":"All good",
    "Who are you" : "Hello, myself JAZZ  ",
    "what's up":"All good",
    "who are you" : "Hello, myself JAZZ  ",
    "How are you" : "Good :)",
    "how are you" : "Good :)",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "good morning":"Good morning:)",
    "good evening":"Good evening..",
    "ok" : "Thank You So Much :)",
    "Bye" : "Okay! Will meet soon..",
    "bye":"Okay! Will meet soon..",
    
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }
    