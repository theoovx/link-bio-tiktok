(function(){
  var bg=document.getElementById("bg");
  if(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches){bg.removeAttribute("autoplay");bg.pause();}
  else{var pl=bg.play();if(pl&&pl.catch)pl.catch(function(){});}
  var WA_NUMBER="62881022234499";
  var DISCORD="fre4kyperson";
  var CHANNEL_URL="https://whatsapp.com/channel/0029Vb3cXucLikgFn4HL9L1I";
  var AVATAR="avatar.jpg";
  var AM_NUMBER="6285835974167";
  var AM_MESSAGE="mau langganan am theo";

  document.getElementById("wa").href="https://wa.me/"+WA_NUMBER;
  document.getElementById("ch").href=CHANNEL_URL;
  document.getElementById("am").href="https://wa.me/"+AM_NUMBER+"?text="+encodeURIComponent(AM_MESSAGE);
  if(AVATAR){var p=document.getElementById("pic");p.style.backgroundImage="url('"+AVATAR+"')";p.textContent="";}

  var dc=document.getElementById("dc"),go=document.getElementById("dcgo"),t;
  function done(){go.textContent="Tersalin";clearTimeout(t);t=setTimeout(function(){go.textContent="↗"},1800);}
  function fallback(){
    var a=document.createElement("textarea");a.value=DISCORD;a.style.position="fixed";a.style.opacity="0";
    document.body.appendChild(a);a.select();
    try{document.execCommand("copy");done();}catch(e){go.textContent=DISCORD;}
    document.body.removeChild(a);
  }
  dc.addEventListener("click",function(){
    try{navigator.clipboard.writeText(DISCORD).then(done,fallback);}catch(e){fallback();}
  });
})();
