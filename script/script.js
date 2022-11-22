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
// clickMeButton.addEventListener("click", function clickMe(event)
// {
//     console.log(event)
//     alert("You Clicked!") 
//     // clickMeButton.removeEventListener("click", clickMe);
// })

clickMeButton.addEventListener("click", function clickMe()
{
    // document.body.style.backgroundColor = 'pink';
    document.body.classList.add("pink");
})

clickMeButton.addEventListener("click", function changeText(){
    if (clickMeButton.textContent === "Click meh?"){
        clickMeButton.textContent = "CLICK ME!?"}
    clickMeButton.classList.add("change")
})


function createAddButton()
{
    const purple = document.createElement("button");
    purple.textContent = "Purple";
    purple.addEventListener("mouseover", function changeBGGreen(event){
        console.log(event.target);
        event.target.classList.add("change")
    })
    document.body.appendChild(purple)
}
clickMeButton.addEventListener("click", createAddButton)

function createAddPara()
{
    const parag = document.createElement("p");
    parag.textContent = "my para";
    parag.addEventListener("mouseover", function changeBGGreen(event){
        console.log(event.target);
        event.target.classList.add("change")
    })
    document.body.appendChild(parag)
    
}
clickMeButton.addEventListener("click", createAddPara)

const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener("click",function changeBGGreen(event)
{
    console.log(event.target)
    event.target.classList.add("change")

})

buttonContainer.addEventListener("click", function changepara(event)
{
    event.target.style.color = event.target.textContent
})

