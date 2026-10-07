(function(){
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('is-open');b.setAttribute('aria-expanded',o?'true':'false');});
    n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('is-open');b.setAttribute('aria-expanded','false');}});}
  document.querySelectorAll('.copy').forEach(function(btn){
    btn.addEventListener('click',function(){
      var el=document.getElementById(btn.getAttribute('data-copy'));if(!el)return;
      var t=el.textContent.trim();
      function done(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy';},1500);}
      if(navigator.clipboard){navigator.clipboard.writeText(t).then(done,done);}else{done();}
    });
  });
})();
