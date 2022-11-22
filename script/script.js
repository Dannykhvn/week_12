const clickMeButton = document.querySelector(".click-me");
// function clickMe(){
//     alert("You Clicked!")
// }

//Event listener only used once with that code at the bottom
clickMeButton.addEventListener("click", function clickMe()
{
    alert("You Clicked!") 
}, {once : true});

//Event listener only used once with removeEventListener
clickMeButton.addEventListener("click", function clickMe()
{
    alert("You Clicked!") 
    clickMeButton.removeEventListener("click", clickMe);
})