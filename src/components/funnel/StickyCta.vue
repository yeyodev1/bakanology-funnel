<template>
  <aside class="sticky-cta">
    <div class="sticky-cta__inner funnel-container">
      <div class="sticky-cta__offer"><span>BAKANOLOGY</span><strong>$37</strong><small>al mes</small></div>
      <div class="sticky-cta__lifetime"><strong>$297</strong><small>PARA SIEMPRE</small></div>
      <a href="#oferta">QUIERO ENTRAR <span>↑</span></a>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sticky-cta { position: fixed; right: 0; bottom: 0; left: 0; z-index: 20; display: flex; justify-content: center; width: 100%; padding: 0.65rem 0; border-top: 1px solid rgba($primary, 0.35); background: rgba($primary-dark, 0.94); backdrop-filter: blur(12px); }
.sticky-cta__inner { gap: 1rem; }
.sticky-cta__offer { display: flex; justify-content: center; align-items: baseline; width: 100%; gap: 0.5rem; color: $white; }
.sticky-cta__offer > span { color: $primary; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.07em; }
.sticky-cta__offer strong { font-size: 1.7rem; }
.sticky-cta__offer small { color: rgba($white, 0.55); }
.sticky-cta__lifetime { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 7rem; color: $white; }
.sticky-cta__lifetime strong { font-size: 1.1rem; }
.sticky-cta__lifetime small { color: rgba($white, 0.76); font-size: 0.78rem; }
.sticky-cta a { display: flex; justify-content: center; align-items: center; width: 100%; max-width: 15rem; gap: 0.5rem; padding: 0.8rem 1rem; border-radius: 0.5rem; background: $primary; color: $white; font-size: 0.88rem; font-weight: 900; text-decoration: none; }
@media (max-width: 600px) { .sticky-cta__offer > span, .sticky-cta__offer small, .sticky-cta__lifetime small { display: none; } .sticky-cta__offer { max-width: 4rem; } .sticky-cta__lifetime { max-width: 4rem; } .sticky-cta a { max-width: none; } }
</style>
