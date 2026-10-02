(function(){
  var top=document.getElementById('top'),dock=document.querySelector('.dock'),hero=document.getElementById('home');
  function onScroll(){var y=scrollY,h=hero.offsetHeight;top.classList.toggle('solid',y>h*.6);dock.classList.toggle('show',y>h*.7)}
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  function set(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
  b.addEventListener('click',function(){set(!m.classList.contains('open'))});
  [].forEach.call(m.querySelectorAll('a'),function(a){a.addEventListener('click',function(){set(false)})});

  var els=[].slice.call(document.querySelectorAll('.rv'));
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)})}
  else els.forEach(function(e){e.classList.add('in')});

  document.getElementById('enquiry').addEventListener('submit',function(e){e.preventDefault();var f=e.target.elements;
    var t='Hello Awesome Place! I would like to book an event.\nName: '+f.name.value+'\nContact: '+f.contact.value+'\nEvent: '+f.type.value+'\nDate: '+(f.date.value||'TBD')+'\n'+f.msg.value;
    window.open('https://wa.me/233558362423?text='+encodeURIComponent(t),'_blank','noopener')});
  document.getElementById('yr').textContent=new Date().getFullYear();
})();
