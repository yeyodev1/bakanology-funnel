<script setup lang="ts">
import { ref } from 'vue'
import { faqItems } from '@/config/funnelContent'

const openIndex = ref(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section id="faq" class="faq section-pad">
    <div class="funnel-container faq__inner">
      <div class="faq__heading">
        <p class="eyebrow"><span></span> PREGUNTAS FRECUENTES</p>
        <h2>Lo que necesitas saber antes de instalar el sistema.</h2>
        <p class="section-lead">Bakanology funciona para negocios de productos y servicios, incluso si hoy no dominas la tecnología.</p>
      </div>
      <div class="faq__list">
        <article v-for="(item, index) in faqItems" :key="item.question" class="faq__item" :class="{ 'faq__item--open': openIndex === index }">
          <button type="button" :aria-expanded="openIndex === index" @click="toggle(index)">
            <span>{{ item.question }}</span><b>{{ openIndex === index ? '−' : '+' }}</b>
          </button>
          <div class="faq__answer"><p>{{ item.answer }}</p></div>
        </article>
      </div>
      <div class="faq__close">
        <strong>Tu próximo cliente no debería depender de la suerte.</strong>
        <a href="#oferta" class="primary-button">QUIERO DOBLAR MI FACTURACIÓN <span>↑</span></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  background: $white;

  &__inner { flex-direction: column; justify-content: center; align-items: center; gap: 2.5rem; }
  &__heading { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 46rem; gap: 1rem; text-align: center; }
  &__list { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 52rem; gap: 0.7rem; }
  &__item { display: flex; flex-direction: column; width: 100%; overflow: hidden; border: 1px solid rgba($primary-dark, 0.1); border-radius: 0.8rem; transition: border-color 0.25s ease, background 0.25s ease; }
  &__item--open { border-color: $primary; background: $primary-surface; }
  button { display: flex; justify-content: center; align-items: center; width: 100%; gap: 1rem; padding: 1.2rem; border: 0; background: transparent; color: $primary-dark; font: inherit; font-weight: 800; text-align: center; cursor: pointer; }
  button span { width: 100%; }
  button b { color: $primary; font-size: 1.5rem; }
  &__answer { display: flex; width: 100%; max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
  &__answer p { width: 100%; padding: 0 1.2rem 1.2rem; color: $text-secondary; line-height: 1.65; text-align: center; }
  &__item--open &__answer { max-height: 12rem; }
  &__close { display: flex; justify-content: center; align-items: center; width: 100%; max-width: 52rem; gap: 1.5rem; padding: 1.5rem; border-radius: 1rem; background: $primary-dark; }
  &__close strong { width: 100%; color: $white; font-size: clamp(1.1rem, 3vw, 1.5rem); text-align: center; }
  &__close .primary-button { max-width: 18rem; }
}

@media (max-width: 750px) {
  .faq {
    &__inner, &__close { flex-direction: column; align-items: center; }
    &__heading { max-width: none; }
    &__close .primary-button { max-width: none; }
  }
}
</style>
