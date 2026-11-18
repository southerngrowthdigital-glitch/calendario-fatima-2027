(function(){
  var C = window.OFERTA || {};
  var qs = new URLSearchParams(location.search);

  /* --- guarda UTMs/fbclid da primeira visita para repassar até o checkout --- */
  var TRACK = ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","fbclid","src"];
  var trk = {};
  try { trk = JSON.parse(sessionStorage.getItem("trk") || "{}"); } catch(e){}
  TRACK.forEach(function(k){ if (qs.get(k)) trk[k] = qs.get(k); });
  try { sessionStorage.setItem("trk", JSON.stringify(trk)); } catch(e){}
  window.__trk = trk;

  /* --- Meta Pixel (só se configurado) --- */
  if (C.pixelId) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', C.pixelId); fbq('track', 'PageView');
  }
  window.track = function(ev, data){ if (window.fbq) fbq('track', ev, data || {}); };

  /* --- preenche preços, itens e textos configuráveis --- */
  function setAll(sel, val){ document.querySelectorAll(sel).forEach(function(el){ el.textContent = val; }); }
  Object.keys(C.opcoes || {}).forEach(function(id){
    var o = C.opcoes[id];
    setAll('[data-por="'+id+'"]', "R$ " + o.por);
    setAll('[data-de="'+id+'"]', o.de ? "De R$ " + o.de : "");
    setAll('[data-nome="'+id+'"]', o.nome);
  });
  if (C.empresa) Object.keys(C.empresa).forEach(function(k){ setAll('[data-empresa="'+k+'"]', C.empresa[k]); });
  document.querySelectorAll("[data-validade]").forEach(function(el){
    if (C.precoValidoAte) el.textContent = "Preço promocional válido até " + C.precoValidoAte + ".";
    else el.remove();
  });
  document.querySelectorAll("[data-tiragem]").forEach(function(el){
    if (C.tiragem) el.textContent = C.tiragem; else el.remove();
  });
  if (!C.depoimentosIlustrativos) document.querySelectorAll(".aviso-ilustr").forEach(function(el){ el.remove(); });

  /* --- links de compra levam ao formulário de endereço com a opção escolhida --- */
  document.querySelectorAll("[data-comprar]").forEach(function(a){
    var p = new URLSearchParams(trk); p.set("opcao", a.getAttribute("data-comprar"));
    a.href = "endereco.html?" + p.toString();
    a.addEventListener("click", function(){
      var o = (C.opcoes || {})[a.getAttribute("data-comprar")] || {};
      track("AddToCart", {value: parseFloat(String(o.por || "0").replace(",", ".")), currency: "BRL"});
    });
  });
})();
