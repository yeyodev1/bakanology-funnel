<script setup lang="ts">
import aleBarretoLogo from '@/assets/testimonials/ale-barreto.png'
import ayWearDizLogo from '@/assets/testimonials/ay-wear-diz.png'
import megaprinterLogo from '@/assets/testimonials/megaprinter.png'
import parrilladaNatoCover from '@/assets/testimonials/parrillada-del-nato.png'
import tequecruncheeseLogo from '@/assets/testimonials/tequecruncheese.png'

const testimonials = [
  {
    name: 'Tequecruncheese',
    category: 'Gastronomía',
    before: '$9K',
    after: '$19K',
    growth: '+111%',
    image: tequecruncheeseLogo,
    url: 'https://www.instagram.com/p/DVByycLETon/',
  },
  {
    name: 'Ale Barreto Studio',
    category: 'Diseño y mobiliario',
    before: '$2K',
    after: '$10K',
    growth: '5X',
    image: aleBarretoLogo,
    url: 'https://www.instagram.com/p/DXfYBCekYQZ/',
  },
  {
    name: 'Megaprinter',
    category: 'Tecnología',
    before: '$50K',
    after: '$100K',
    growth: '2X',
    image: megaprinterLogo,
    url: 'https://www.instagram.com/p/DYneDjbAZb3/',
  },
  {
    name: 'Parrillada del Ñato',
    category: 'Restaurantes',
    before: '$220K',
    after: '$350K',
    growth: '+59%',
    image: parrilladaNatoCover,
    url: 'https://www.instagram.com/p/DZsWWZZGFrn/',
  },
  {
    name: 'Ay Wear DIZ',
    category: 'Moda circular',
    before: '$6K',
    after: '$8K',
    growth: '+33%',
    image: ayWearDizLogo,
    url: 'https://www.instagram.com/p/DadgYfnjeN9/',
  },
] as const
</script>

<template>
  <section class="testimonials section-pad">
    <div class="funnel-container testimonials__inner">
      <div class="testimonials__heading">
        <p class="eyebrow"><span></span> RESULTADOS REALES DE NEGOCIOS REALES</p>
        <h2>No nos creas a nosotros. Mira lo que pasó con ellos.</h2>
        <p>Marcas de industrias distintas instalaron un sistema de crecimiento y llevaron su facturación a un nuevo nivel.</p>
      </div>

      <div class="testimonials__rail">
        <a
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="testimonial-card"
          :href="testimonial.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Ver testimonio de ${testimonial.name} en Instagram`"
        >
          <div class="testimonial-card__brand">
            <img
              :class="{ 'testimonial-card__image--cover': testimonial.name === 'Parrillada del Ñato' }"
              :src="testimonial.image"
              :alt="`Logo de ${testimonial.name}`"
              loading="lazy"
            >
            <span>{{ testimonial.growth }}</span>
          </div>
          <div class="testimonial-card__body">
            <small>{{ testimonial.category }}</small>
            <h3>{{ testimonial.name }}</h3>
            <div class="testimonial-card__result">
              <span><small>ANTES</small>{{ testimonial.before }}</span>
              <b>→</b>
              <span><small>DESPUÉS</small>{{ testimonial.after }}</span>
            </div>
            <p>en facturación mensual</p>
            <strong>VER TESTIMONIO <span>↗</span></strong>
          </div>
        </a>
      </div>

      <div class="testimonials__proof">
        <span>5 negocios</span>
        <i></i>
        <span>5 mercados distintos</span>
        <i></i>
        <strong>Un mismo sistema</strong>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials { background: $primary-light; }
.testimonials__inner { flex-direction: column; align-items: center; gap: 2.5rem; }
.testimonials__heading { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 58rem; gap: 1rem; text-align: center; }
.testimonials__heading > p:last-child { width: 100%; max-width: 46rem; color: $text-secondary; font-size: 1.08rem; line-height: 1.7; }
.testimonials__rail { display: flex; flex-wrap: wrap; justify-content: center; width: 100%; gap: 1rem; }
.testimonial-card { display: flex; flex: 1 1 20rem; min-width: 0; max-width: 25rem; overflow: hidden; border: 1px solid rgba($primary-dark, 0.09); border-radius: 1rem; background: $white; color: $primary-dark; box-shadow: 0 1.1rem 3rem rgba($primary-dark, 0.07); text-decoration: none; transition: transform 180ms ease, box-shadow 180ms ease; }
.testimonial-card:hover { transform: translateY(-0.35rem); box-shadow: 0 1.4rem 3.5rem rgba($primary-dark, 0.13); }
.testimonial-card__brand { position: relative; display: flex; align-items: center; justify-content: center; width: 38%; min-height: 17rem; padding: 1.25rem; background: $primary-surface; }
.testimonial-card__brand img { width: 7.5rem; height: 7.5rem; border-radius: 50%; object-fit: contain; background: $white; box-shadow: 0 0.7rem 1.8rem rgba($primary-dark, 0.1); }
.testimonial-card__brand .testimonial-card__image--cover { width: 100%; height: 100%; border-radius: 0; object-fit: cover; box-shadow: none; }
.testimonial-card__brand > span { position: absolute; top: 0.9rem; right: 0.7rem; padding: 0.38rem 0.65rem; border-radius: 99rem; background: $primary; color: $white; font-size: 0.76rem; font-weight: 900; letter-spacing: 0.04em; }
.testimonial-card__body { display: flex; flex-direction: column; justify-content: center; width: 62%; gap: 0.55rem; padding: 1.35rem; }
.testimonial-card__body > small { color: $primary; font-size: 0.68rem; font-weight: 900; letter-spacing: 0.1em; text-transform: uppercase; }
.testimonial-card h3 { width: 100%; font-size: 1.28rem; line-height: 1.15; }
.testimonial-card__result { display: flex; align-items: flex-end; width: 100%; gap: 0.55rem; margin-top: 0.35rem; }
.testimonial-card__result span { display: flex; flex-direction: column; color: $text-secondary; font-size: 1.2rem; font-weight: 900; }
.testimonial-card__result span:last-child { color: $primary-dark; font-size: 1.65rem; }
.testimonial-card__result small { font-size: 0.55rem; letter-spacing: 0.1em; }
.testimonial-card__result b { padding-bottom: 0.18rem; color: $primary; }
.testimonial-card__body > p { color: $text-secondary; font-size: 0.72rem; }
.testimonial-card__body > strong { margin-top: 0.55rem; color: $primary; font-size: 0.72rem; letter-spacing: 0.06em; }
.testimonials__proof { display: flex; align-items: center; justify-content: center; width: 100%; gap: 1rem; color: $text-secondary; font-size: 0.88rem; font-weight: 800; text-transform: uppercase; }
.testimonials__proof i { width: 0.3rem; height: 0.3rem; border-radius: 50%; background: $primary; }
.testimonials__proof strong { color: $primary-dark; }
@media (max-width: 720px) { .testimonial-card { flex-basis: 100%; max-width: 32rem; } .testimonials__proof { flex-wrap: wrap; gap: 0.65rem; text-align: center; } }
@media (max-width: 420px) { .testimonial-card { flex-direction: column; } .testimonial-card__brand, .testimonial-card__body { width: 100%; } .testimonial-card__brand { min-height: 11rem; } .testimonial-card__brand .testimonial-card__image--cover { position: absolute; inset: 0; } }
</style>
