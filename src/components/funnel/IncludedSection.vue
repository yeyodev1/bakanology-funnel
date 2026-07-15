<script setup lang="ts">
import { includedItems } from '@/config/funnelContent'
</script>

<template>
  <section class="included section-pad">
    <div class="funnel-container included__inner">
      <div class="included__visual">
        <small>BAKANOLOGY</small>
        <strong>Tu sistema de captación, empaquetado.</strong>
        <div><span>ADS</span><i>→</i><span>LEADS</span><i>→</i><span>VENTAS</span></div>
        <b>MÉTODO BAKANO</b>
      </div>
      <div class="included__copy">
        <p class="eyebrow"><span></span> TODO DENTRO DE BAKANOLOGY</p>
        <h2>Copia el sistema que usamos en nuestra agencia.</h2>
        <p class="section-lead">No necesitas estudiar marketing durante años. Necesitas saber qué anuncio lanzar, cómo filtrar y qué pasos automatizar.</p>
        <div class="included__list"><div v-for="item in includedItems" :key="item"><span>✓</span><p>{{ item }}</p></div></div>
        <a href="#oferta" class="primary-button">QUIERO ACCESO A BAKANOLOGY <span>↓</span></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.included { background: $primary-surface; }
.included__inner { flex-direction: row; gap: clamp(2.5rem, 7vw, 7rem); }
.included__visual, .included__copy { display: flex; flex: 1 1 0; flex-direction: column; align-items: center; width: 100%; gap: 1.4rem; text-align: center; }
.included__visual { justify-content: center; max-width: 31rem; min-height: 34rem; padding: 2.2rem; border-radius: 1.5rem; background: radial-gradient(circle at 80% 10%, rgba($primary, 0.45), transparent 28%), linear-gradient(145deg, $secondary-dark, $primary-dark); color: $white; box-shadow: 0 2rem 4rem rgba($primary-dark, 0.2); }
.included__visual > small { color: $primary; font-weight: 900; letter-spacing: 0.18em; }
.included__visual > strong { width: 100%; font-size: clamp(2rem, 5vw, 3.4rem); line-height: 1.02; }
.included__visual > div { display: flex; justify-content: center; flex-wrap: wrap; width: 100%; gap: 0.55rem; }
.included__visual > div span { padding: 0.65rem; border: 1px solid rgba($white, 0.2); border-radius: 0.55rem; font-size: 0.8rem; font-weight: 900; }
.included__visual i { color: $primary; font-style: normal; }
.included__visual b { padding: 0.7rem 1rem; border-radius: 999px; background: $BAKANO-GREEN; color: $primary-dark; font-size: 0.8rem; letter-spacing: 0.07em; }
.included__list { display: flex; flex-direction: column; width: 100%; gap: 0.7rem; }
.included__list > div { display: flex; align-items: center; width: 100%; gap: 0.8rem; }
.included__list span { display: flex; justify-content: center; align-items: center; width: 1.7rem; height: 1.7rem; flex-shrink: 0; border-radius: 50%; background: $primary; color: $white; font-weight: 900; }
.included__list p { width: 100%; color: $primary-dark; font-weight: 650; text-align: left; }
@media (max-width: 800px) { .included__inner { flex-direction: column; } .included__visual { max-width: 30rem; min-height: 27rem; } }
</style>
