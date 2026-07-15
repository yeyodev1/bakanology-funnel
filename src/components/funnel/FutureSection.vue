<template>
  <section class="future section-pad">
    <div class="funnel-container future__inner">
      <div class="future__copy"><p class="eyebrow eyebrow--light"><span></span> IMAGINA TU NUEVA REALIDAD</p><h2>Abres tu celular y los clientes ya están llegando.</h2><p>En lugar de sentir ese nudo por no saber de dónde saldrá la próxima venta, encuentras cinco reuniones nuevas en tu calendario o quince mensajes en WhatsApp listos para comprar.</p><a class="primary-button" href="#oferta">QUIERO UN SISTEMA PREDECIBLE <span>↑</span></a></div>
      <div class="future__dashboard"><small>HOY · TU SISTEMA</small><article><span>REUNIONES NUEVAS</span><strong>+5</strong></article><article><span>CONVERSACIONES EN WHATSAPP</span><strong>+15</strong></article><div><i></i><p>Captación activa</p></div></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.future { background: $secondary-dark; color: $white; }
.future__inner { gap: clamp(2rem, 6vw, 6rem); }
.future__copy, .future__dashboard { display: flex; flex: 1 1 0; flex-direction: column; align-items: center; width: 100%; gap: 1.4rem; text-align: center; }
.future h2 { color: $white; }
.future__copy > p:not(.eyebrow) { color: rgba($white, 0.75); font-size: 1.05rem; line-height: 1.7; }
.future__dashboard { max-width: 32rem; padding: 2rem; border: 1px solid rgba($white, 0.17); border-radius: 1.2rem; background: rgba($primary-dark, 0.5); box-shadow: 0 2rem 4rem rgba($primary-dark, 0.24); }
.future__dashboard > small { color: $primary; font-weight: 900; letter-spacing: 0.14em; }
.future__dashboard article { display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 1rem; padding: 1.2rem; border-radius: 0.7rem; background: rgba($white, 0.08); text-align: left; }
.future__dashboard article span { color: rgba($white, 0.76); font-size: 0.82rem; font-weight: 800; line-height: 1.4; }
.future__dashboard article strong { color: $BAKANO-GREEN; font-size: 2rem; }
.future__dashboard > div { display: flex; align-items: center; width: 100%; gap: 0.6rem; color: rgba($white, 0.68); }
.future__dashboard i { width: 0.6rem; height: 0.6rem; border-radius: 50%; background: $BAKANO-GREEN; box-shadow: 0 0 0 0.35rem rgba($BAKANO-GREEN, 0.14); }
@media (max-width: 800px) { .future__inner { flex-direction: column; } .future__dashboard { max-width: none; } }
</style>
