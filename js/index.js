define(['jquery','../lib/swiper','movie','../lib/template-native','../lib/iscroll5'],function($,Swiper,tplfile,tpl,iscroll5){

/*console.log(tplfile);*/
   /* console.log(tpl);*/
    var main=new IScroll("#main")
   var req=$.ajax({
       url:"data/data.json"
   })
    req.done(function(data){
        var movielist=data.data.movie_data;
        /*console.log(movielist);*/
        var rand=tpl.compile(tplfile);
        var html=rand({imagelist:movielist});
        $('.nav').html(html);
        var textarea=$("#mtql");
        var rand1=tpl.compile(textarea.val());
        var html1=rand1({list:movielist});
        main.refresh();
        $('.main').find('.con').html(html1);



        var mySwiper = new Swiper('.swiper-container',{
            slidesPerView:"auto",
            freeMode:true,
            /* onTap:function(e,i){
             /!*console.log(e.clickedSlide)*!/
             console.log(i)
             $("m-items").each(function(i,item){
             $(this).removeClass("active");

             })
             var cls=e.clickedSlide.className;
             if(cls.indexOf("active")==-1){
             e.clickedSlide.className+=" active";
s
             }
             mySwiper.slideTo(e.clickedSlide,1000,function(){

             })

             }*/
            onTap:function (s, e) {
                var slides = document.querySelectorAll('.swiper-slide');
                for(var i=0; i<slides.length; i++){
                    slides[i].className = slides[i].className.replace('active','')
                }

                /*console.log(s.clickedSlide);
                 console.log(e);*/

                /*$('.m-item').each(function (i,item) {
                 $(this).removeClass('active')
                 });*/
                var str = s.clickedSlide && s.clickedSlide.className;
                if(str && str.indexOf('active')==-1){
                    s.clickedSlide.className = str + ' active';
                }
            if(mySwiper.slideTo){
                mySwiper.slideTo(s.clickedIndex,300,function (a) {
                    console.log(a)
                })
            }
            }
        })
    })



})