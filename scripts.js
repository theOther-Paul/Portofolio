var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})

const imageUrl = "https://media-exp2.licdn.com/dms/image/C4D03AQHQTMhVT8pp_A/profile-displayphoto-shrink_800_800/0/1652970966451?e=1661990400&v=beta&t=FN92by-znwGiFOLIkhhZQvQsNWyMxj8PGCCU4HcF-os";
fetch(imageUrl)
    .then(response => response.blob())
    .then(imageBlob => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log(imageObjectURL);
    });


function blogA()
{
    alert("You are already on the blog");
}