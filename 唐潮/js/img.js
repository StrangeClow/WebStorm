function DrawImage_s(divID){
	var F_W = $(divID).parent().width();
	var F_H = $(divID).parent().height();
	DrawImage(divID, F_W, F_H)
}

function DrawImage_d(divID,percent){
	var F_W = $(divID).parent().width();
	var F_H = F_W*percent;
	$(divID).parent().height(F_H);
	DrawImage(divID, F_W, F_H)
}





function DrawImage(ImgID, width_s, height_s) {
    var image = new Image();
    image.src = ImgID.src;
    if (image.width > 0 && image.height > 0) {
        flag = true;
        if (image.width / image.height <= width_s / height_s) {
            ImgID.width = width_s;
            var height = (image.height * width_s) / image.width;
            ImgID.height = height;
            ImgID.style.marginTop = -(height - height_s)/2 + "px";
        } else {
            ImgID.height = height_s;
            var width = (image.width * height_s) / image.height;
            ImgID.width = width;
            ImgID.style.marginLeft = -(width - width_s)/2 + "px";
        }
    }
}

/*添加js后，在html文件的<img>标签里进行更改：

<img onload="DrawImage(this)" src="">


需要在img的父级定图片的限定宽高

*/
