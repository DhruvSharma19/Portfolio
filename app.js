const authorName= document.querySelector(".name");
const saluteTextContainer =document.querySelector(".saluteTextContainer")
const saluteImgContainer =document.querySelector(".saluteImgContainer")
const jobTitleContainers =document.querySelectorAll(".jobTitleContainer")
const jobTitles =document.querySelectorAll(".jobTitle")
const projectsTitle =document.querySelector(".projectsTitle")
const phone =document.querySelector(".phone")
const laptops =document.querySelectorAll(".laptop")





window.addEventListener("scroll",()=>{
    let offsetY=window.scrollY;
    saluteTextContainer.style.transform=`translateY(${offsetY*0.1}px)`
    saluteImgContainer.style.transform=`translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
    authorName.style.transform=`translateX(${offsetY * 0.1}px)`
    jobTitleContainers[0].style.backgroundPositionY=`${offsetY*0.5}px`
    jobTitleContainers[1].style.backgroundPositionY=`${-offsetY*0.5}px`
    jobTitles[0].style.transform=`translateX(calc(200vh - ${offsetY}px))`
    jobTitles[1].style.transform=`translateX(calc(-300vh + ${offsetY}px))`
    projectsTitle.style.transform=`translateY(calc(400vh - ${offsetY}px))`
    phone.style.transform=`translateX(calc(574vh - ${offsetY}px))`
    laptops[0].style.transform=`translateX(calc( 470vh - ${offsetY}px))`
    laptops[1].style.transform=`translateX(calc( 690vh - ${offsetY}px))`


})