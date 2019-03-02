//img1 link: https://www.chinadiscovery.com/sichuan/jiuzhaigou/jiuzhaigou-valley.html
//img2 link: https://en.jiuzhai.com/nature/wildlife
//img3 link: https://en.jiuzhai.com/index.php/about/six-wonders/85-forests
//img4 link: https://en.jiuzhai.com/index.php/about/six-wonders/81-tibetan-culture
//img5 link: https://www.chinadiscovery.com/chengdu-tours/6-days-jiuzhaigou-chengdu-tour.html
let slideIndex=1;
let imageArray=document.getElementsByClassName("cImagSpan");
var windowObjectReference = null; // global variable

function addEventAddFav()
{
    let addBelowClick=document.getElementsByClassName("cImagSpanBelow");

    for (let i=0;i<imageArray.length;i++)
    {
        let belowImgClickId=addBelowClick[i].getAttribute("id");
        addBelowClick[i].addEventListener("click",function foo(){belowImgClick(belowImgClickId)});
        imageArray[i].classList.add("addOnloadDislay");
    }
    onloadImgShow();
    midAddFev();
}

function imageDisplayClick(num)
{
    
    slideIndex+=num;
    if (slideIndex > imageArray.length)
    {
        slideIndex=1;
        SlideIndexPerious=imageArray.length;
    }
    if (slideIndex<1)
    {
        slideIndex=imageArray.length;
        SlideIndexPerious=1;
    }
    // imageDisplayloop(slideIndex);
    midAddFevFunctionRemove();
    belowOpChangeWithAbove(slideIndex);
    backImgDisplayMove(slideIndex);
    midAddFev();
}
function addImgFav()
{
    let idGet=getId().id;
    let item=document.getElementById(idGet);
    let favBan=document.getElementById("favImgBan");
    let copyNode=item.cloneNode(true);
   // let FavBanChildNode=favBan.children;
   // let FavNodeNum=favBan.childElementCount;
    copyNode.id=idGet+"-copy";
    copyNode.classList.remove("cImagSpan");
    copyNode.classList.add("addFavSpanClass");
    copyNode.classList.remove("addOnloadStyleZDexTwo");

    let checkResult=checkDuplication(favBan,copyNode);
   
    addFunctionToSingle(checkResult,copyNode,favBan);

}
function removeImgFav(id)
{
    let nodeChild=document.getElementById(id);
    let nodePar=document.getElementById("favImgBan");
    nodePar.removeChild(nodeChild);

}
function belowImgClick(id)
{
    belowOpacityChange(id);
    belowChangeAbove(id);
}

//#region method 
function belowOpacityChange(id)
{
    let itemSpan=document.getElementById(id);
    let itemSpanArray=document.getElementsByClassName("cImagSpanBelow");
    for (let i=0;i<itemSpanArray.length;i++)
    {
        if (itemSpanArray[i].classList.contains("addImgOpacityLightClickClass")==true)
        {
            itemSpanArray[i].classList.remove("addImgOpacityLightClickClass");
        }
    }
    itemSpan.classList.add("addImgOpacityLightClickClass");
}
function belowChangeAbove(id)
{
    if (id=="cImag1-Below")
    {
        slideIndex=1;
    }
    else if (id=="cImag2-Below")
    {
        slideIndex=2;
    }
    else if (id=="cImag3-Below")
    {
        slideIndex=3;
    }
    else if (id=="cImag4-Below")
    {
        slideIndex=4;
    }
    else
    {
        slideIndex=5;
    }
    backImgDisplayMove(slideIndex);
}
function belowOpChangeWithAbove(slideIndex)
{
    let idBelowGet="cImag"+slideIndex+"-Below";
    belowOpacityChange(idBelowGet);
}
function backImgDisplayMove(slideIndex)
{
    for (let i=0;i<imageArray.length;i++)
    {

            imageArray[i].classList.add("addOnloadDislay");
            imageArray[i].classList.remove("addOnloadStyleZDexTwo");
            imageArray[i].classList.remove("addOnloadStyleZDexOneLeft");
            imageArray[i].classList.remove("addOnloadStyleZDexOneRight");
    }

    if (slideIndex>1&&slideIndex<5)
    {
        imageArray[slideIndex-1].classList.add("addOnloadStyleZDexTwo");
        imageArray[slideIndex-2].classList.add("addOnloadStyleZDexOneLeft");
        imageArray[slideIndex].classList.add("addOnloadStyleZDexOneRight");
        imageArray[slideIndex-1].classList.remove("addOnloadDislay");
        imageArray[slideIndex-2].classList.remove("addOnloadDislay");
        imageArray[slideIndex].classList.remove("addOnloadDislay");
    }
    else if (slideIndex==5)
    {
        imageArray[slideIndex-1].classList.add("addOnloadStyleZDexTwo");
        imageArray[slideIndex-2].classList.add("addOnloadStyleZDexOneLeft");
        imageArray[0].classList.add("addOnloadStyleZDexOneRight"); 
        imageArray[slideIndex-1].classList.remove("addOnloadDislay");
        imageArray[slideIndex-2].classList.remove("addOnloadDislay");
        imageArray[0].classList.remove("addOnloadDislay");
    }
    else
    {
        imageArray[slideIndex-1].classList.add("addOnloadStyleZDexTwo");
        imageArray[4].classList.add("addOnloadStyleZDexOneLeft");
        imageArray[slideIndex].classList.add("addOnloadStyleZDexOneRight");
        imageArray[slideIndex-1].classList.remove("addOnloadDislay");
        imageArray[4].classList.remove("addOnloadDislay");
        imageArray[slideIndex].classList.remove("addOnloadDislay");
    }
    
}
function onloadImgShow()
{
    imageArray[0].classList.remove("addOnloadDislay");
    imageArray[4].classList.remove("addOnloadDislay");
    imageArray[1].classList.remove("addOnloadDislay");
    imageArray[0].classList.add("addOnloadStyleZDexTwo");
    imageArray[4].classList.add("addOnloadStyleZDexOneLeft");
    imageArray[1].classList.add("addOnloadStyleZDexOneRight");
}
function midAddFev()
{
    let midImgShowDiv=getId();
 //   midImgShowDiv.addEventListener("click",addImgFav)
    let id =midImgShowDiv.id;
    midImgShowDiv.addEventListener("click",function(){openNewWidow(id)});
    
}
function midAddFevFunctionRemove()
{
    // let midImgShowDiv=document.getElementById("cImagShow");
    // midImgShowDiv.removeEventListener("click",function foo(){addImgFav(num)});
    let midImgShowDiv=getId();
    midImgShowDiv.removeEventListener("click",addImgFav)
}
function getId()
{
    return document.querySelector(".addOnloadStyleZDexTwo");
    // let id = "cImag"+slideIndex;
    // return id;
}

    //random function you want to call
function myFunc(msg) { console.log("I'm a function in the parent window："+msg); }
function openNewWidow(id)
{
    let newWindowHref;
    if (id=="cImag1"){newWindowHref="./cImag01.html";}
    else if (id=="cImag2"){newWindowHref="./cImag02.html";}
    else if (id=="cImag3"){newWindowHref="./cImag03.html";}
    else if (id=="cImag4"){newWindowHref="./cImag04.html";}
    else if (id=="cImag5"){newWindowHref="./cImag05.html";}
    if(windowObjectReference == null || windowObjectReference.closed)
    /* if the pointer to the window object in memory does not exist
     or if such pointer exists but the window was closed */
    {
    windowObjectReference = window.open(newWindowHref,
   "BestViewer", "resizable,scrollbars,status");
    /* then create it. The new window will be created and
       will be brought on top of any other window. */
    }
    else {
        windowObjectReference.focus();
        /* else the window reference must exist and the window
        is not closed; therefore, we can bring it back on top of any other
        window with the focus() method. There would be no need to re-create
        the window or to reload the referenced resource. */
    };
    // windowObjectReference.postMessage("id: "+id, windowObjectReference);
    windowObjectReference.onload = function() { windowObjectReference.RunCallbackFunction = myFunc; };
    
}

function checkDuplication(baseNode,childNode)
{
    let checkContainNodes=baseNode.children;
    if (checkContainNodes.length!=0)
    {
        for (let i=0;i<checkContainNodes.length;i++)
        {
            if (childNode.getAttribute("id")==checkContainNodes[i].getAttribute("id"))
            {
                return true;
            }
        }
    }
    return false;
}
function addFunctionToSingle(checkResult,copyNode,favBan)
{
    if (!checkResult)
    {
        favBan.appendChild(copyNode);
        copyNode.addEventListener("click",function foo(){removeImgFav(copyNode.id)});
    }
    else
    {
        window.alert("this picture has been added");
    }
}
//#endregion