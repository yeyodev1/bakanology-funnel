<script setup lang="ts">
const valueItems = [
  { number: '01', title: 'Curso de Ventas por WhatsApp', text: 'Convierte conversaciones en ventas con un proceso claro.', value: 197 },
  { number: '02', title: 'Tráfico para WhatsApp', text: 'Lleva compradores potenciales directo a tu chat.', value: 197 },
  { number: '03', title: 'Tráfico para Landing Pages', text: 'Crea campañas que filtran y generan reuniones calificadas.', value: 197 },
  { number: '04', title: 'Pase VIP semanal', text: 'Acceso a expertos en tecnología, ventas y Meta Ads.', value: 500 },
] as const
const totalStackValue = valueItems.reduce((total, item) => total + item.value, 0)
</script>

<template>
  <section class="value-stack section-pad">
    <div class="funnel-container value-stack__inner">
      <div class="value-stack__heading"><p class="eyebrow"><span></span> TODO LO QUE DESCUBRIRÁS</p><h2>El valor es incalculable cuando el sistema empieza a vender.</h2><p class="section-lead">Recibes el conocimiento, los guiones y los procesos que usamos en Bakano.ec para que puedas construir por tu cuenta una fuente predecible de clientes.</p></div>
      <div class="value-stack__items"><article v-for="item in valueItems" :key="item.number"><span>{{ item.number }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p><div><small>VALOR</small><strong>${{ item.value }}</strong></div></article></div>
      <div class="value-stack__summary">
        <p>VALOR REFERENCIAL POR SEPARADO</p><del>${{ totalStackValue }}</del><span>El valor de saber captar clientes de forma predecible no tiene techo.</span>
        <div><span class="value-stack__recommended"><small>ACCESO MENSUAL</small><strong>$37/mes</strong></span><b>O</b><span><small>UN SOLO PAGO · PARA SIEMPRE</small><strong>$297</strong></span></div>
      </div>
      <div class="vip-upgrade">
        <div class="vip-upgrade__copy"><p class="eyebrow eyebrow--light"><span></span> DOS POTENCIADORES OPCIONALES</p><h2>Acelera la implementación.</h2><p>Suma infraestructura y acompañamiento directo sin convertir tu operación en otro proyecto interminable.</p><div><article><span>01</span><div><strong>CRM Bakanology</strong><p>Centraliza prospectos y seguimiento. Valorado en $1,164; agrégalo por $15.</p></div></article><article><span>02</span><div><strong>Telegram VIP</strong><p>Conecta con dueños de negocio y recibe soporte cercano por $15.</p></div></article></div></div>
        <div class="vip-upgrade__offer"><span>ACCESO DE POR VIDA</span><div><sup>$</sup><strong>297</strong></div><p>Un único pago para llevarte todo para siempre, sin suscripciones.</p><a href="#oferta">VER OPCIÓN DE POR VIDA <span>→</span></a><small>Incluye CRM Bakanology y Telegram VIP.</small></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.value-stack { background: $white; }
.value-stack__inner { flex-direction: column; gap: 2.5rem; }
.value-stack__heading { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 54rem; gap: 1rem; text-align: center; }
.value-stack__items { display: flex; flex-wrap: wrap; width: 100%; gap: 1rem; }
.value-stack__items > article { display: flex; flex: 1 1 15rem; flex-direction: column; align-items: center; width: 100%; gap: 0.8rem; padding: 1.6rem; border: 1px solid rgba($secondary, 0.18); border-radius: 1rem; background: $primary-surface; text-align: center; }
.value-stack__items > article > span { color: $primary; font-size: 0.82rem; font-weight: 900; }
.value-stack__items h3 { width: 100%; font-size: 1.1rem; }
.value-stack__items p { width: 100%; color: $text-secondary; font-size: 0.9rem; line-height: 1.55; }
.value-stack__items article > div { display: flex; justify-content: center; align-items: center; width: 100%; gap: 0.5rem; margin-top: auto; padding-top: 0.8rem; border-top: 1px solid rgba($primary-dark, 0.08); }
.value-stack__items article > div small { color: $text-secondary; font-size: 0.78rem; font-weight: 900; }
.value-stack__items article > div strong { color: $secondary-dark; }
.value-stack__summary { display: flex; flex-direction: column; align-items: center; width: 100%; gap: 1.2rem; padding: clamp(2rem, 5vw, 3.5rem); border-radius: 1.2rem; background: $primary-dark; color: $white; text-align: center; }
.value-stack__summary > p { color: $primary; font-size: 0.82rem; font-weight: 900; letter-spacing: 0.09em; }
.value-stack__summary > del { color: rgba($white, 0.5); font-size: 1.5rem; font-weight: 900; }
.value-stack__summary > span { color: rgba($white, 0.76); font-size: 0.9rem; line-height: 1.5; }
.value-stack__summary > div { display: flex; justify-content: center; align-items: stretch; width: 100%; gap: clamp(1.5rem, 5vw, 4rem); margin-top: 0.8rem; }
.value-stack__summary > div > span { display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; max-width: 23rem; min-height: 9rem; gap: 0.8rem; padding: 1.2rem 1.5rem; }
.value-stack__summary small { display: flex; justify-content: center; align-items: center; min-height: 2.4rem; color: rgba($white, 0.76); font-size: 0.82rem; line-height: 1.4; }
.value-stack__summary strong { color: $primary; font-size: clamp(2.8rem, 6vw, 4.4rem); line-height: 1; white-space: nowrap; }
.value-stack__summary b { align-self: center; flex-shrink: 0; }
.value-stack__recommended { border: 1px solid $primary; border-radius: 0.7rem; background: rgba($primary, 0.1); }
.vip-upgrade { display: flex; width: 100%; margin-top: 1rem; overflow: hidden; border-radius: 1.3rem; background: $secondary-dark; color: $white; }
.vip-upgrade__copy, .vip-upgrade__offer { display: flex; flex: 1 1 0; flex-direction: column; align-items: center; width: 100%; gap: 1rem; padding: clamp(1.5rem, 5vw, 3rem); text-align: center; }
.vip-upgrade h2 { color: $white; }
.vip-upgrade__copy > p:not(.eyebrow) { color: rgba($white, 0.72); line-height: 1.6; }
.vip-upgrade__copy > div { display: flex; flex-wrap: wrap; width: 100%; gap: 0.7rem; }
.vip-upgrade__copy article { display: flex; flex: 1 1 13rem; width: 100%; gap: 0.7rem; padding: 1rem; border: 1px solid rgba($white, 0.14); border-radius: 0.7rem; text-align: left; }
.vip-upgrade__copy article > span { color: $primary; font-size: 0.78rem; font-weight: 900; }
.vip-upgrade__copy article > div { display: flex; flex-direction: column; width: 100%; gap: 0.3rem; }
.vip-upgrade__copy article p { color: rgba($white, 0.76); font-size: 0.86rem; line-height: 1.55; }
.vip-upgrade__offer { justify-content: center; background: $primary-light; color: $primary-dark; }
.vip-upgrade__offer > span { color: $secondary-dark; font-size: 0.82rem; font-weight: 900; letter-spacing: 0.08em; }
.vip-upgrade__offer > div { display: flex; justify-content: center; align-items: flex-start; width: 100%; }
.vip-upgrade__offer sup { color: $secondary-dark; font-size: 1.5rem; font-weight: 900; }
.vip-upgrade__offer strong { font-size: clamp(4rem, 10vw, 6rem); line-height: 0.9; }
.vip-upgrade__offer a { display: flex; justify-content: center; width: 100%; padding: 1rem; border-radius: 0.6rem; background: $primary-dark; color: $white; font-weight: 900; text-decoration: none; }
.vip-upgrade__offer small { color: $text-secondary; font-size: 0.82rem; line-height: 1.5; }
@media (max-width: 760px) { .value-stack__summary > div, .vip-upgrade { flex-direction: column; } .value-stack__summary > div { gap: 0.8rem; } .value-stack__summary > div > span { max-width: none; min-height: 0; } }
</style>
