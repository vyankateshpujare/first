
// let images=document.getElementsByTagName("img");

// function setClearImage(e)
// {
//     let originalSrc=e.target.getAttribute("src");
    
//     e.target.setAttribute("src",e.target.id.concat(".jpg"));

//     setTimeout(()=>{
//         e.target.setAttribute("src",originalSrc);
//     },2000)
// }

// for(let i=0;i<images.length;i++)
// {
//     images[i].onclick=setClearImage;
// }

function init()
{
    let images=document.getElementsByTagName("img");
    for(let image of images)
    {
        image.onclick=function()
        {
            let id=image.id;
            image.src="./img/"+id+".jpg";
            setTimeout(function(){
                image.src="./img/"+id+"blur.jpg";
            },2000)
        }
    }
}
window.onload=init;
