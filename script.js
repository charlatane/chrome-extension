fetch("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(jokeData => {
    const jokeText=jokeData.attachments[0].text;
    const jokeElement = document.getElementById("jokePara");
    
    jokeElement.innerHTML = jokeText;
    document.getElementById("Sumy").innerHTML= "Summary";

})