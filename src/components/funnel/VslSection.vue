<script setup lang="ts">
import { brandImages } from '@/config/funnelContent'
</script>

<template>
  <section class="vsl section-pad">
    <div class="funnel-container vsl__inner">
      <p class="eyebrow"><span></span> LA PIEZA QUE TE FALTA</p>
      <h2>Tu negocio no necesita más likes. Necesita una tubería de clientes.</h2>
      <p class="section-lead">Bakanology te entrega el mismo sistema que aplicamos en Bakano.ec, organizado para que puedas instalarlo por tu cuenta sin convertirte en especialista de marketing.</p>
      <div class="vsl__stage">
        <img :src="brandImages.backTshirt" alt="Uniforme del equipo Bakano.ec" loading="lazy">
        <div><small>EL MÉTODO BAKANO</small><p><strong>ANUNCIO</strong><span>→</span><strong>FILTRO</strong><span>→</span><strong>VENTA</strong></p><b>Procesos reales de agencia, explicados paso a paso.</b></div>
      </div>
      <p class="vsl__note">Si hoy dependes de publicar, perseguir contactos o esperar recomendaciones, aquí aprenderás a construir una fuente de demanda más predecible.</p>
      <a class="primary-button" href="#oferta">QUIERO HACERLO POR MI CUENTA <span>→</span></a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.vsl { background: $primary-light; }
.vsl__inner { flex-direction: column; gap: 1.5rem; text-align: center; }
.vsl h2 { max-width: 58rem; }
.vsl__stage { position: relative; display: flex; justify-content: center; align-items: center; width: 100%; max-width: 58rem; min-height: 27rem; margin-top: 1rem; overflow: hidden; border: 0.55rem solid $white; border-radius: 1.4rem; background: $primary-dark; box-shadow: 0 25px 70px rgba($primary-dark, 0.18); }
.vsl__stage > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0.32; }
.vsl__stage > div { position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; gap: 1rem; padding: clamp(2rem, 7vw, 5rem); color: $white; }
.vsl__stage small { color: $primary; font-weight: 900; letter-spacing: 0.16em; }
.vsl__stage p { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; width: 100%; gap: 1rem; }
.vsl__stage strong { font-size: clamp(1.2rem, 4vw, 2.3rem); }
.vsl__stage p span { color: $primary; font-size: 1.8rem; }
.vsl__stage b { width: 100%; color: rgba($white, 0.74); font-size: 0.9rem; }
.vsl__note { width: 100%; max-width: 44rem; color: $text-secondary; font-size: 0.86rem; line-height: 1.6; }
</style>
