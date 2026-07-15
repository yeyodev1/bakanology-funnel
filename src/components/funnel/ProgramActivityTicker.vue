<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const outcomes = ['Calendario de ventas lleno', '10 ventas por WhatsApp', '5 reuniones nuevas', '15 conversaciones calificadas'] as const
const currentIndex = ref(0)
const currentOutcome = computed(() => outcomes[currentIndex.value] ?? outcomes[0])
let intervalId: ReturnType<typeof window.setInterval> | undefined

onMounted(() => { intervalId = window.setInterval(() => { currentIndex.value = (currentIndex.value + 1) % outcomes.length }, 6000) })
onUnmounted(() => { if (intervalId !== undefined) window.clearInterval(intervalId) })
</script>

<template><aside class="program-activity" aria-live="polite"><div class="program-activity__icon">↗</div><div><small><span></span> EL RESULTADO QUE BUSCAMOS</small><Transition name="activity" mode="out-in"><strong :key="currentIndex">{{ currentOutcome }}</strong></Transition></div></aside></template>

<style lang="scss" scoped>
.program-activity { position: fixed; bottom: 5.8rem; left: 1rem; z-index: 18; display: flex; align-items: center; width: 100%; max-width: 24rem; gap: 0.9rem; padding: 1rem 1.15rem; border: 1px solid rgba($primary, 0.7); border-radius: 1rem; background: rgba($primary-dark, 0.96); color: $white; box-shadow: 0 18px 50px rgba($primary-dark, 0.4); }
.program-activity__icon { display: flex; justify-content: center; align-items: center; width: 3.4rem; height: 3.4rem; flex-shrink: 0; border-radius: 50%; background: $primary; font-size: 1.4rem; font-weight: 900; }
.program-activity > div:last-child { display: flex; flex-direction: column; width: 100%; gap: 0.35rem; }
.program-activity small { display: flex; align-items: center; width: 100%; gap: 0.4rem; color: $primary; font-size: 0.8rem; font-weight: 900; letter-spacing: 0.06em; }
.program-activity small span { width: 0.42rem; height: 0.42rem; border-radius: 50%; background: $BAKANO-GREEN; }
.program-activity strong { width: 100%; }
.activity-enter-active, .activity-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.activity-enter-from { opacity: 0; transform: translateY(0.3rem); }
.activity-leave-to { opacity: 0; transform: translateY(-0.3rem); }
@media (max-width: 600px) { .program-activity { bottom: 5.2rem; left: 0.5rem; max-width: calc(100% - 1rem); } }
</style>
