const clickMeButton = document.querySelector(".click-me");
// function clickMe(){
//     alert("You Clicked!")
// }

//Event listener only used once with that code at the bottom
// clickMeButton.addEventListener("click", function clickMe()
// {
//     alert("You Clicked!") 
// }, {once : true});

// //Event listener only used once with removeEventListener
// clickMeButton.addEventListener("click", function clickMe()
// {
//     alert("You Clicked!") 
//     clickMeButton.removeEventListener("click", clickMe);
// })

clickMeButton.addEventListener("click", function clickMe()
{
    // document.body.style.backgroundColor = 'pink';
    document.body.classList.add("pink");
})

clickMeButton.addEventListener("click", function changeText(){
    if (clickMeButton.textContent === "Click meh?"){
        clickMeButton.textContent = "CLICK ME!?"}
    document.body.clickMeButton.classList.add("change")
})
