const btn = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");



/* To delete the div if we click trash icon*/
container.addEventListener("click", (eo) => {

    // if (eo.target.className == "icon-trash icon") {
    //     /*To remove the parent div*/
    //     eo.target.parentElement.parentElement.remove();


    // } else if (eo.target.className == "icon-angry2 icon") {

    //     /*To swich and add the heart*/
    //     eo.target.classList.add("dn");
    //     const heart = `<span class="icon-heart" ></span>`


    //     /*To add the line through the text */

    //     eo.target.parentElement.parentElement
    //         .getElementsByClassName("task-text")[0]
    //         .classList.add("finish");





    //     eo.target.parentElement.innerHTML += heart;


    // } else if (eo.target.className == "icon-heart") {


    //     eo.target.classList.remove("icon-heart");

    //     eo.target.parentElement.parentElement
    //         .getElementsByClassName("task-text")[0]
    //         .classList.remove("finish");


    //     const angry = `<span class="icon-angry2 icon" ></span>`

    //     eo.target.parentElement.innerHTML += angry;

    // } else if (eo.target.className == "icon-star icon") {

    //     eo.target.classList.add("orange");


    //     /*To put the element at the top of the div */
    //     container.prepend(eo.target.parentElement);


    // } else if (eo.target.className == "icon-star icon orange") {
    //     eo.target.classList.remove("orange");
    // }

    /*Formating the if else to switch for better performance */
    switch (eo.target.className) {
        case "icon-trash icon":

            /*To remove the parent div*/
            eo.target.parentElement.parentElement.remove();
            break;

        case "icon-angry2 icon":

            /*To swich and add the heart*/
            eo.target.classList.add("dn");
            const heart = `<span class="icon-heart" ></span>`


            /*To add the line through the text */

            eo.target.parentElement.parentElement
                .getElementsByClassName("task-text")[0]
                .classList.add("finish");


            eo.target.parentElement.innerHTML += heart;

            break;

        case "icon-heart":

            eo.target.classList.remove("icon-heart");

            eo.target.parentElement.parentElement
                .getElementsByClassName("task-text")[0]
                .classList.remove("finish");


            const angry = `<span class="icon-angry2 icon" ></span>`

            eo.target.parentElement.innerHTML += angry;

            break;

        case "icon-star icon":

            eo.target.classList.add("orange");


            /*To put the element at the top of the div */
            container.prepend(eo.target.parentElement);

            break;

        case "icon-star icon orange":

            eo.target.classList.remove("orange");
            break;

        default:
            break;
    }



});












form.addEventListener("submit", (eo) => {
    eo.preventDefault();


    /* Impotant code in js */
    const task = ` <div class="task">
    <span class="icon-star icon"></span>
    <p lang="ar" class="task-text">${input.value}</p>
    <div>

        <span class="icon-trash icon"></span>
        <span class="icon-angry2 icon"></span>

    </div>
    
    </div>`


    container.innerHTML += task;

    /*To clear the input filde */
    input.value = ""

});

