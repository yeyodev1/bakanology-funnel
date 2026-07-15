<script setup lang="ts">
import { brandImages } from '@/config/funnelContent'
</script>

<template>
  <section class="hero">
    <div class="hero__orb hero__orb--one"></div>
    <div class="hero__orb hero__orb--two"></div>
    <div class="hero__inner funnel-container">
      <div class="hero__copy">
        <p class="eyebrow eyebrow--light"><span></span> BAKANO.EC PRESENTA</p>
        <h1>Deja de rogar por clientes. Instala un sistema que <em>vende todos los días.</em></h1>
        <p class="hero__lead">Aprende por tu cuenta todo lo que aplicamos en nuestra agencia para atraer, cualificar y convertir clientes con un sistema predecible.</p>
        <a class="primary-button" href="#oferta">QUIERO INSTALAR EL MÉTODO BAKANO <span>→</span></a>
        <div class="hero__proof"><strong>50+</strong><span>negocios acompañados<br>con sistemas de captación</span></div>
      </div>
      <div class="hero__visual">
        <img :src="brandImages.luisFounder" alt="Luis Reyes, cofundador de Bakano.ec" fetchpriority="high">
        <div class="hero__badge"><small>COFUNDADOR · BAKANO.EC</small><strong>Luis Reyes</strong><span>Datos que se convierten en decisiones.</span></div>
        <div class="hero__method"><span>ANUNCIO</span><i>→</i><span>FILTRO</span><i>→</i><span>VENTA</span></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero { position: relative; display: flex; justify-content: center; align-items: center; width: 100%; min-height: 100vh; overflow: hidden; background: $primary-dark; }
.hero__orb { position: absolute; width: 30rem; height: 30rem; border-radius: 50%; filter: blur(100px); pointer-events: none; }
.hero__orb--one { top: -14rem; left: -8rem; background: rgba($secondary, 0.38); }
.hero__orb--two { right: -12rem; bottom: -15rem; background: rgba($primary, 0.28); }
.hero__inner { position: relative; flex-direction: row; gap: clamp(2rem, 6vw, 6rem); padding-top: 5rem; padding-bottom: 5rem; }
.hero__copy, .hero__visual { display: flex; flex: 1 1 0; flex-direction: column; align-items: center; width: 100%; gap: 1.5rem; text-align: center; }
.hero h1 { width: 100%; color: $white; font-size: clamp(2.8rem, 5.6vw, 5rem); line-height: 0.96; letter-spacing: -0.06em; }
.hero h1 em { color: $primary; font-style: normal; }
.hero__lead { width: 100%; max-width: 42rem; color: rgba($white, 0.72); font-size: clamp(1rem, 1.8vw, 1.2rem); line-height: 1.65; }
.hero__proof { display: flex; justify-content: center; align-items: center; width: 100%; gap: 0.8rem; color: rgba($white, 0.72); font-size: 0.88rem; line-height: 1.45; text-align: left; }
.hero__proof strong { color: $BAKANO-GREEN; font-size: 1.8rem; }
.hero__visual { position: relative; max-width: 31rem; overflow: hidden; border: 1px solid rgba($white, 0.16); border-radius: 1.5rem; background: $white; box-shadow: 0 2rem 5rem rgba(#000, 0.3); }
.hero__visual > img { width: 100%; height: 39rem; object-fit: cover; object-position: 50% 18%; }
.hero__badge { position: absolute; right: 1rem; bottom: 4.6rem; left: 1rem; display: flex; flex-direction: column; width: calc(100% - 2rem); gap: 0.2rem; padding: 1rem; border: 1px solid rgba($white, 0.14); border-radius: 0.8rem; background: rgba($primary-dark, 0.9); color: $white; backdrop-filter: blur(10px); }
.hero__badge small { color: $primary; font-size: 0.8rem; font-weight: 900; letter-spacing: 0.08em; }
.hero__badge strong { font-size: 1.25rem; }
.hero__badge span { color: rgba($white, 0.74); font-size: 0.84rem; }
.hero__method { position: absolute; right: 0; bottom: 0; left: 0; display: flex; justify-content: center; width: 100%; gap: 0.5rem; padding: 1.1rem; background: $primary; color: $white; font-size: 0.8rem; font-weight: 900; letter-spacing: 0.06em; }
.hero__method i { font-style: normal; }
@media (max-width: 800px) { .hero__inner { flex-direction: column; padding-top: 3rem; } .hero__visual { max-width: 30rem; } .hero__visual > img { height: 34rem; } }
</style>
