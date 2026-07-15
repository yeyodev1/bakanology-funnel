<script setup lang="ts">
import { methodSteps } from '@/config/funnelContent'

const painPoints = [
  'Publicas contenido que no conecta y termina sin generar ventas.',
  'Escribes a tus contactos en WhatsApp esperando cerrar algo.',
  'Pagas marketing que nunca se refleja en tu facturación.',
] as const
</script>

<template>
  <section class="problem section-pad">
    <div class="funnel-container problem__inner">
      <div class="problem__intro">
        <div class="problem__copy">
          <p class="eyebrow"><span></span> NO ES TU CULPA</p>
          <h2>Te enseñaron estrategias lentas para un negocio que necesita vender hoy.</h2>
          <p class="section-lead">No necesitas convertirte en influencer. Necesitas una estructura capaz de traer personas calificadas todos los días.</p>
          <div class="problem__pains"><div v-for="pain in painPoints" :key="pain"><span>×</span><p>{{ pain }}</p></div></div>
        </div>
        <aside class="problem__truth">
          <small>LA VERDAD INCÓMODA</small>
          <strong>El contenido orgánico no es un sistema de captación.</strong>
          <p>Cuando cada venta depende de publicar, perseguir o esperar, tu facturación también depende de tu energía y de la suerte.</p>
          <b>Likes ≠ clientes</b>
        </aside>
      </div>
      <div class="method">
        <div class="method__heading"><p class="eyebrow"><span></span> EL MÉTODO BAKANO</p><h2>Una tubería simple que puedes instalar en tu negocio.</h2></div>
        <div class="method__steps"><article v-for="step in methodSteps" :key="step.number"><span>{{ step.number }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></article></div>
        <div class="method__flow"><strong>ATRAE</strong><span>→</span><strong>CUALIFICA</strong><span>→</span><strong>CONVIERTE</strong><span>→</span><strong>ESCALA</strong></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.problem { background: $white; }
.problem__inner { flex-direction: column; gap: 7rem; }
.problem__intro { display: flex; width: 100%; gap: clamp(2rem, 6vw, 6rem); }
.problem__copy, .problem__truth { display: flex; flex: 1 1 0; flex-direction: column; align-items: center; width: 100%; gap: 1.35rem; text-align: center; }
.problem__pains { display: flex; flex-direction: column; width: 100%; gap: 0.75rem; }
.problem__pains > div { display: flex; align-items: center; width: 100%; gap: 0.8rem; padding: 1rem; border: 1px solid rgba($primary-dark, 0.09); border-radius: 0.7rem; color: $text-secondary; }
.problem__pains span { color: $primary; font-size: 1.5rem; font-weight: 900; }
.problem__pains p { width: 100%; text-align: left; }
.problem__truth { justify-content: center; padding: clamp(2rem, 5vw, 4rem); border-radius: 1.4rem; background: $primary-dark; color: $white; }
.problem__truth small { color: $primary; font-weight: 900; letter-spacing: 0.14em; }
.problem__truth strong { width: 100%; font-size: clamp(1.8rem, 4vw, 3rem); line-height: 1.05; }
.problem__truth p { width: 100%; color: rgba($white, 0.68); line-height: 1.65; }
.problem__truth b { padding: 0.65rem 1rem; border-radius: 999px; background: rgba($primary, 0.14); color: $primary; }
.method { display: flex; flex-direction: column; width: 100%; gap: 2rem; }
.method__heading { display: flex; flex-direction: column; align-items: center; width: 100%; gap: 0.8rem; text-align: center; }
.method__steps { display: flex; flex-wrap: wrap; width: 100%; gap: 1rem; }
.method__steps article { display: flex; flex: 1 1 15rem; flex-direction: column; align-items: center; width: 100%; gap: 1rem; padding: 1.7rem; border-radius: 1rem; background: $primary-dark; color: $white; text-align: center; }
.method__steps article > span { color: $primary; font-size: 0.82rem; font-weight: 900; }
.method__steps h3 { width: 100%; font-size: 1.35rem; }
.method__steps p { width: 100%; color: rgba($white, 0.68); line-height: 1.55; }
.method__flow { display: flex; justify-content: center; flex-wrap: wrap; width: 100%; gap: 0.9rem; padding: 1.4rem; border-radius: 1rem; background: $primary-light; }
.method__flow span { color: $primary; }
@media (max-width: 800px) { .problem__inner { gap: 4rem; } .problem__intro { flex-direction: column; } }
</style>
