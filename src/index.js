// write your code here
const ramenMenu = document.querySelector("#ramin-menu");
const ramenDetail = document.querySelector("#ramen-menu");
const ramenName = document.querySelector("#name");
const ramenRestaurant = document.querySelector(".restaurant");
const ramenRating = document.querySelector("#rating-display");
const ramenComment = document.querySelector("#comment-display");
const createRamenForm = document.querySelector("#new-ramen");
const editRamenForm = document.querySelector("#edit-ramen");
const ramenImg = document.querySelector("#detail-image");

fetch("http://localhost:3000/ramens")
.then(resp => resp.json())
.then(RamenData => console.log(RamenData))


const setRamenImage = (imageUrl) => {
    //Set Ramen display image
    ramenImg.src = imageUrl
};

const setRamenName = (name) => {
    //Set Ramen display name
    ramenName.textContent = name;
};

const setRamenRestaurant = (restaurant) => {
    //Set Ramen restaurant
    ramenRestaurant.textContent = restaurant;
}

const setRamenRating = (rating) => {
    //Set Ramen rating
    ramenRating.textContent = rating;
}

const setComment = (comment) => {
    //Set Comment
    ramenComment.textContent = comment;
}

const setRamenDetails = (ramenObj) => {
    // Set all ramen display items
    idRamen = ramen.Obj.id;
    setRamenName(ramenObj.name);
    setRamenRestaurant(ramenObj.restaurant);
    setRamenImage(ramenObj.image);
    setRamenRating(ramenObj.rating);
    setRamenComment(ramenObj.comment);
}

document.getElementById("ramen-menu").append(imageUrl);
