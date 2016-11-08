define([],function(){
return '<ul class="swiper-wrapper">'+
      ' <% for(var i=0;i<imagelist.length;i++){%>'+
    '<li class="swiper-slide m-items"><img src="<%= imagelist[i].movie_img_url%>" alt=""></li>'+
'<%}%>'+
       ' </ul>'

})