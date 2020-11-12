$(function(){

  $("#intro p").hide().fadeIn(1000)
  //setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
  $("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行

  function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
    $("#intro").fadeOut(1000,contentAnime);
  }

  function contentAnime(){
    setTimeout(backAnime,300);//0.3秒後backAnime実行
    setTimeout(inosisiAnime,400);//2秒後inosisiAnime実行
    setTimeout(woodAnime,400);//2秒後woodAnime実行
    setTimeout(uriboAnime,400);//2秒後uriboAnime実行
    setTimeout(foodAnime,1500);//3秒後foodAnime実行
  }
  
  //以下のアニメはCSSでやってみる
  //ここではanimeクラスつけるだけ
  function backAnime(){
    $("#back").addClass("anime")
  }

  function inosisiAnime(){
    $("#inosisi").addClass("anime")
  }

  function woodAnime(){
    $("#wood").addClass("anime")
  }

  function uriboAnime(){
    $("#uribo").addClass("anime")
  }

  function foodAnime(){
    $("#food").addClass("anime")
  }

})