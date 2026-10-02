(function(){
  var slides=[].slice.call(document.querySelectorAll('.slide')),dots=[].slice.call(document.querySelectorAll('.dots i')),n=0,t;
  function go(i){slides[n].classList.remove('on');dots[n].classList.remove('on');n=(i+slides.length)%slides.length;
    var s=slides[n];s.style.animation='none';void s.offsetWidth;s.style.animation='';s.classList.add('on');dots[n].classList.add('on')}
  function start(){clearInterval(t);t=setInterval(function(){go(n+1)},6500)}
  dots.forEach(function(d,i){d.addEventListener('click',function(){go(i);start()})});start();

  var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
  [].forEach.call(document.querySelectorAll('.reveal'),function(el){io?io.observe(el):el.classList.add('in')});

  var links=[].slice.call(document.querySelectorAll('.sidebar nav a')),secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
  addEventListener('scroll',function(){var y=scrollY+innerHeight/3,k=0;secs.forEach(function(s,i){if(s&&s.offsetTop<=y)k=i});links.forEach(function(a,i){a.classList.toggle('active',i===k)})},{passive:true});

  var side=document.getElementById('sidebar'),tog=document.querySelector('.menu-toggle');
  function close(){side.classList.remove('open');tog.setAttribute('aria-expanded','false')}
  tog.addEventListener('click',function(){var o=side.classList.toggle('open');tog.setAttribute('aria-expanded',o)});
  links.forEach(function(a){a.addEventListener('click',close)});

  document.getElementById('enquiry').addEventListener('submit',function(e){e.preventDefault();var f=e.target.elements;
    var m='Hello Awesome Place! I would like to book an event.\nName: '+f.name.value+'\nContact: '+f.contact.value+'\nEvent: '+f.type.value+'\nDate: '+(f.date.value||'TBD')+'\n'+f.msg.value;
    window.open('https://wa.me/233558362423?text='+encodeURIComponent(m),'_blank','noopener')});
  document.getElementById('yr').textContent=new Date().getFullYear();
})();
