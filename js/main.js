var sections = ['title', 'message', 'features', 'faq'];

for (var i=0, l=sections.length-1; i<l; i++){
  $('#' + sections[i]).click((function(next){
    return function(){
      $('html, body').animate({
          scrollTop: $("#" + next).offset().top
      }, 500);
    };
  })(sections[i+1])); 
}