/* Не мой варинт*/

function sitBtn_Cliced()
{
    var imagsUrls_arr = [
                            '../res/lbw3/img/r1.jpg',
                            '../res/lbw3/img/r2.jpg',
                            '../res/lbw3/img/r3.jpg',
                            '../res/lbw3/img/r4.jpg',
                            '../res/lbw3/img/r5.jpg',
                            '../res/lbw3/img/r6.jpg',
                            '../res/lbw3/img/r7.jpg',
                            '../res/lbw3/img/r8.jpg',
                            '../res/lbw3/img/r9.jpg',
                            '../res/lbw3/img/r10.jpg'
                        ];

    var min=1; 
    var max=10;
    var randomVal = -1;
    
    do
    {
        randomVal = Math.floor(Math.random() * (+max - +min)) + +min;
    }while (sitBtn_Cliced.privRandValue == randomVal)

    //alert(randomVal);
    
    document.images["img_inTableImage"].src = imagsUrls_arr[randomVal];
    document.getElementById("img_infoBar").innerHTML = ("Вы открыли глаза и увидели:" + randomVal);

    sitBtn_Cliced.privRandValue = randomVal;
}

sitBtn_Cliced.privRandValue = -1;


/* Мой варинт*/
function imageSelectable_Clicked(imgPositionId)
{

    var allImagSelectors_arr =  document.getElementById("imageTable").children;

    for(var ix = 0; ix < allImagSelectors_arr.length; ix = ix + 1)
    {
        allImagSelectors_arr[ix].style.border  = '5px solid gray';
    }

    allImagSelectors_arr[imgPositionId].style.border  = '5px solid red';

    imageSelectable_Clicked.currentSelectedImg_num = imgPositionId;

    document.getElementById('image_left_btn').disabled  = false;
    document.getElementById('image_rigth_btn').disabled = false;
}

imageSelectable_Clicked.currentSelectedImg_num = -1;

function left_Btn_Cliced()
{
    if(imageSelectable_Clicked.currentSelectedImg_num != -1)
    if(imageSelectable_Clicked.currentSelectedImg_num != 0)
    {
        //alert(imageSelectable_Clicked.currentSelectedImg_num);
        swapImgs_funct(imageSelectable_Clicked.currentSelectedImg_num,imageSelectable_Clicked.currentSelectedImg_num-1);
    }
}

function rigth_Btn_Cliced()
{
    if(imageSelectable_Clicked.currentSelectedImg_num != -1)
    if(imageSelectable_Clicked.currentSelectedImg_num != (document.getElementById("imageTable").children.length-1))
    {
        //alert(imageSelectable_Clicked.currentSelectedImg_num);
        swapImgs_funct(imageSelectable_Clicked.currentSelectedImg_num,imageSelectable_Clicked.currentSelectedImg_num+1);
    }
}

function swapImgs_funct(source_SwpId, dist_SwpId)
{
    var allImagSelectors_arr =  document.getElementById("imageTable").children;

    allImagSelectors_arr[source_SwpId].style.border = '5px solid gray';
    allImagSelectors_arr[dist_SwpId].style.border   = '5px solid red';

    imageSelectable_Clicked.currentSelectedImg_num  = dist_SwpId;



    imgSrc_tmp = allImagSelectors_arr[dist_SwpId].src;

    allImagSelectors_arr[dist_SwpId].src   = allImagSelectors_arr[source_SwpId].src;
    allImagSelectors_arr[source_SwpId].src = imgSrc_tmp;
}

function rs_Btn_Cliced()
{
    slectableImagesResize_funct(10);
}
function dw_Btn_Cliced()
{
    slectableImagesResize_funct(-10);
}

function slectableImagesResize_funct(value)
{
    var allImagSelectors_arr =  document.getElementById("imageTable").children;

    for(var ix = 0; ix < allImagSelectors_arr.length; ix = ix + 1)
    {
        allImagSelectors_arr[ix].style.width  = (allImagSelectors_arr[ix].width  + value) + "px";
        allImagSelectors_arr[ix].style.height = (allImagSelectors_arr[ix].height + value) + "px";
    }

    //allImagSelectors_arr[0].width = 300;

   // alert( allImagSelectors_arr[0].width );
}