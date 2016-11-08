/*
var mySwiper = new Swiper('.swiper-container',{
    slidesPerView:"auto",
    freeMode:true,
   /!* onTap:function(e,i){
        /!*console.log(e.clickedSlide)*!/
         console.log(i)
        $("m-items").each(function(i,item){
            $(this).removeClass("active");

        })
        var cls=e.clickedSlide.className;
        if(cls.indexOf("active")==-1){
            e.clickedSlide.className+=" active";

        }
        mySwiper.slideTo(e.clickedSlide,1000,function(){

        })

    }*!/
    onTap:function (s, e) {
        var slides = document.querySelectorAll('.swiper-slide');
        for(var i=0; i<slides.length; i++){
            slides[i].className = slides[i].className.replace('active','')
        }

        /!*console.log(s.clickedSlide);
         console.log(e);*!/

        /!*$('.m-item').each(function (i,item) {
         $(this).removeClass('active')
         });*!/
        var str = s.clickedSlide && s.clickedSlide.className;
        if(str && str.indexOf('active')==-1){
            s.clickedSlide.className = str + ' active';
        }

        mySwiper.slideTo(s.clickedIndex,300,function (a) {
            console.log(a)
        })
    }
})*/
