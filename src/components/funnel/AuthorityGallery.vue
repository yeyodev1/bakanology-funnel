<script setup lang="ts">
import { brandImages } from '@/config/funnelContent'

const founders = [
  {
    name: 'Denisse Quimi',
    role: 'Cofundadora · Arquitectura de marca',
    text: 'Arquitecta de marcas que conectan. Campañas de alto impacto que convierten audiencias en comunidades.',
    image: brandImages.denisseCofounder,
  },
  {
    name: 'Luis Reyes',
    role: 'Cofundador · Datos y crecimiento',
    text: 'Más de 5 años transformando negocios con datos. Convierte números en decisiones que mueven la aguja.',
    image: brandImages.luisCoach,
  },
] as const
</script>

<template>
  <section class="authority section-pad">
    <div class="funnel-container authority__inner">
      <div class="authority__heading"><p class="eyebrow eyebrow--light"><span></span> LAS PERSONAS DETRÁS DE BAKANO.EC</p><h2>Te enseñamos lo que aplicamos todos los días en nuestra agencia.</h2><p>No son tácticas de manual ni teoría acumulada. Bakanology empaqueta nuestro proceso real para que puedas atraer, filtrar y convertir clientes por tu cuenta.</p></div>
      <div class="authority__founders">
        <article v-for="founder in founders" :key="founder.name">
          <img :src="founder.image" :alt="`${founder.name}, ${founder.role}`" loading="lazy">
          <div><small>{{ founder.role }}</small><h3>{{ founder.name }}</h3><p>{{ founder.text }}</p></div>
        </article>
      </div>
      <div class="authority__statement"><strong>Agencia primero. Academia después.</strong><span>Solo enseñamos procesos que usamos para mover campañas, conversaciones y facturación en negocios reales.</span></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.authority { background: $primary-dark; color: $white; }
.authority__inner { flex-direction: column; gap: 2.5rem; }
.authority__heading { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 60rem; gap: 1rem; text-align: center; }
.authority h2 { color: $white; }
.authority__heading > p:last-child { width: 100%; max-width: 48rem; color: rgba($white, 0.66); font-size: 1.05rem; line-height: 1.7; }
.authority__founders { display: flex; width: 100%; gap: 1rem; }
.authority__founders article { display: flex; flex: 1 1 0; min-width: 0; overflow: hidden; border: 1px solid rgba($white, 0.13); border-radius: 1rem; background: rgba($white, 0.04); }
.authority__founders img { width: 45%; min-width: 0; height: 25rem; object-fit: cover; object-position: center 20%; }
.authority__founders article > div { display: flex; flex-direction: column; justify-content: center; width: 55%; gap: 0.7rem; padding: clamp(1.2rem, 3vw, 2rem); }
.authority__founders small { color: $primary; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.07em; line-height: 1.45; text-transform: uppercase; }
.authority__founders h3 { width: 100%; font-size: clamp(1.5rem, 3vw, 2.3rem); }
.authority__founders p { width: 100%; color: rgba($white, 0.68); line-height: 1.6; }
.authority__statement { display: flex; align-items: center; width: 100%; gap: 1rem; padding: 1.5rem; border-left: 0.3rem solid $primary; background: rgba($white, 0.04); text-align: center; }
.authority__statement strong { width: 100%; color: $primary; font-size: 1.2rem; }
.authority__statement span { width: 100%; color: rgba($white, 0.7); }
@media (max-width: 900px) { .authority__founders { flex-direction: column; } .authority__founders article { flex: none; } }
@media (max-width: 560px) { .authority__founders article { flex-direction: column; } .authority__founders img, .authority__founders article > div { width: 100%; } .authority__founders img { height: 20rem; } .authority__statement { flex-direction: column; } }
</style>
