// Medicao: empurra eventos pro dataLayer. O GTM le daqui e repassa pro GA4 e pro Google Ads.
// Eventos:
//   whatsapp_click  -> qualquer link wa.me (cta_location = data-cta do link ou area da pagina)
//   generate_lead   -> envio do formulario de contato (form_name)
//   agent_download  -> clique em "Baixar agente" (cliente existente, NAO e conversao)
//   tool_used       -> uso das ferramentas do diagnostico (tool_name)
window.dataLayer = window.dataLayer || [];
window.cascoTrack = function (event, params) {
  window.dataLayer.push(Object.assign({ event: event }, params || {}));
};

document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href]');
  if (!a) return;
  var href = a.getAttribute('href') || '';
  var where = a.dataset.cta ||
    (a.closest('footer') ? 'rodape' : (a.closest('section[id]') || {}).id || 'outro');
  if (href.indexOf('wa.me/') !== -1) {
    window.cascoTrack('whatsapp_click', { cta_location: where });
  } else if (/\.exe($|\?)/.test(href)) {
    window.cascoTrack('agent_download', { cta_location: where });
  }
}, true);
