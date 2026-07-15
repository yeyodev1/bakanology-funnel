<script setup lang="ts">
import { computed, onUnmounted, reactive, ref, watch } from 'vue'
import { useAnimatedNumber } from '@/composables/useAnimatedNumber'
import { paymentService } from '@/services/paymentService'
import type { CheckoutExtra } from '@/services/paymentService'

const props = defineProps<{ open: boolean; plan: 'monthly' | 'lifetime'; lifetimePrice: number }>()
const emit = defineEmits<{ close: [] }>()
const addTelegram = ref(false)
const addCrm = ref(false)
const errorMessage = ref('')
const loading = ref(false)
const form = reactive({ name: '', lastName: '', email: '' })
const telegramPrice = Math.min(Math.max(Number(import.meta.env.VITE_VIP_UPGRADE_PRICE) || 15, 0), 15)
const crmPrice = 15
const isLifetime = computed(() => props.plan === 'lifetime')
const basePrice = computed(() => isLifetime.value ? props.lifetimePrice : 37)
const total = computed(() => basePrice.value
  + (!isLifetime.value && addTelegram.value ? telegramPrice : 0)
  + (!isLifetime.value && addCrm.value ? crmPrice : 0))
const displayedTotal = useAnimatedNumber(total)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const close = () => { if (!loading.value) emit('close') }

const startCheckout = async () => {
  errorMessage.value = ''
  if (!form.name.trim() || !form.lastName.trim() || !form.email.trim()) {
    errorMessage.value = 'Completa tu nombre, apellido y correo para continuar.'
    return
  }
  if (!emailPattern.test(form.email.trim())) {
    errorMessage.value = 'Ingresa un correo electrónico válido para crear tu cuenta.'
    return
  }

  const extras: CheckoutExtra[] = []
  if (!isLifetime.value && addCrm.value) extras.push('crm')
  if (!isLifetime.value && addTelegram.value) extras.push('telegram_vip')
  loading.value = true

  try {
    const response = await paymentService.createCheckoutSession({
      name: form.name.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      plan: props.plan,
      extras,
    })
    const checkoutUrl = response.data.data.url
    if (!checkoutUrl) throw new Error('Stripe no devolvió una URL de pago.')
    window.location.assign(checkoutUrl)
  } catch (error) {
    const apiError = error as { message?: string }
    errorMessage.value = apiError.message || 'No fue posible iniciar el pago seguro con Stripe.'
    loading.value = false
  }
}

watch(() => props.open, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (!open) return
  addTelegram.value = false
  addCrm.value = false
  errorMessage.value = ''
  loading.value = false
  form.name = ''
  form.lastName = ''
  form.email = ''
})

onUnmounted(() => { document.body.style.overflow = '' })
</script>

<template>
  <Teleport to="body">
    <Transition name="checkout-transition">
      <div v-if="open" class="checkout-overlay" role="presentation" @click.self="close">
        <section class="checkout-modal" :class="{ 'checkout-modal--preparing': loading }" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
          <button v-if="!loading" type="button" class="checkout-modal__close" aria-label="Cerrar checkout" @click="close">×</button>
          <Transition name="checkout-stage" mode="out-in">
            <div v-if="loading" key="preparing" class="checkout-modal__preparing" aria-live="polite"><span></span><strong>Conectando con Stripe</strong><small>te llevamos al pago seguro</small></div>
            <div v-else key="checkout" class="checkout-modal__content">
              <div class="checkout-modal__headline"><span>{{ isLifetime ? 'UN ÚNICO PAGO' : 'ACCESO MENSUAL' }}</span><strong>{{ isLifetime ? 'Bakanology para siempre por $297' : 'Aplica el sistema de Bakano.ec por $37 al mes' }}</strong></div>
              <p class="checkout-modal__eyebrow">TU ACCESO A BAKANOLOGY</p>
              <h2 id="checkout-title">{{ isLifetime ? 'Todo el sistema. Para siempre.' : 'Instala el Método Bakano.' }}</h2>
              <p class="checkout-modal__intro">{{ isLifetime ? 'Incluye CRM Bakanology y Telegram VIP sin pagos adicionales.' : 'Elige si quieres sumar las herramientas que aceleran tu implementación.' }}</p>
              <div v-if="!isLifetime" class="checkout-modal__upgrades">
                <label class="checkout-modal__upgrade" :class="{ 'checkout-modal__upgrade--selected': addCrm }"><input v-model="addCrm" type="checkbox"><span><em>INFRAESTRUCTURA</em><strong>CRM Bakanology</strong><small>Organiza prospectos y seguimiento en un solo lugar.</small></span><b>+$15</b></label>
                <label class="checkout-modal__upgrade" :class="{ 'checkout-modal__upgrade--selected': addTelegram }"><input v-model="addTelegram" type="checkbox"><span><em>ACOMPAÑAMIENTO</em><strong>Telegram VIP</strong><small>Grupo privado para dueños de negocios.</small></span><b>+${{ telegramPrice }}</b></label>
              </div>
              <div v-else class="checkout-modal__included"><p><span>✓</span>Acceso de por vida a Bakanology</p><p><span>✓</span>CRM Bakanology incluido</p><p><span>✓</span>Telegram VIP incluido</p></div>
              <div class="checkout-modal__details"><p>Crea tu acceso seguro</p><div><label><span>Nombre</span><input v-model="form.name" type="text" autocomplete="given-name" placeholder="Tu nombre"></label><label><span>Apellido</span><input v-model="form.lastName" type="text" autocomplete="family-name" placeholder="Tu apellido"></label></div><label><span>Correo electrónico</span><input v-model="form.email" type="email" autocomplete="email" placeholder="tu@email.com"></label></div>
              <div class="checkout-modal__total"><span>TOTAL DE TU SELECCIÓN<small>{{ isLifetime ? 'PAGO ÚNICO' : 'PRIMER PAGO' }}</small></span><strong :aria-label="`Total $${total}`">${{ displayedTotal }}</strong></div>
              <p v-if="errorMessage" class="checkout-modal__error">{{ errorMessage }}</p>
              <button type="button" class="checkout-modal__continue" :disabled="loading" @click="startCheckout">CONTINUAR AL PAGO SEGURO <span>→</span></button>
              <small class="checkout-modal__legal">{{ isLifetime ? 'Pago único de $297 con acceso de por vida. Serás redirigido a Stripe.' : 'Membresía de $37 al mes. Los extras se cobran una sola vez en el primer pago.' }}</small>
            </div>
          </Transition>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.checkout-overlay { position: fixed; inset: 0; z-index: 100; display: flex; justify-content: center; align-items: safe center; width: 100%; padding: 1rem; overflow-y: auto; background: rgba($primary-dark, 0.86); backdrop-filter: blur(10px); }
.checkout-modal { position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 58rem; max-height: calc(100dvh - 2rem); overflow-y: auto; border: 1px solid rgba($secondary, 0.18); border-radius: 1.3rem; background: $white; box-shadow: 0 30px 90px rgba($primary-dark, 0.36); }
.checkout-modal--preparing { max-width: 12rem; min-height: 12rem; max-height: 12rem; overflow: hidden; border: 2px solid $primary; border-radius: 50%; background: $primary-dark; }
.checkout-modal__preparing { display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 12rem; gap: 0.25rem; color: $white; text-align: center; }
.checkout-modal__preparing > span { width: 2.8rem; height: 2.8rem; margin-bottom: 0.5rem; border: 0.25rem solid rgba($white, 0.2); border-top-color: $primary; border-radius: 50%; animation: spin 0.8s linear infinite; }
.checkout-modal__preparing strong { color: $primary; font-size: 0.82rem; text-transform: uppercase; }
.checkout-modal__preparing small { color: rgba($white, 0.74); font-size: 0.8rem; }
.checkout-modal__close { position: sticky; top: 0.8rem; z-index: 2; align-self: flex-end; width: 2.5rem; height: 2.5rem; margin: 0.8rem 0.8rem -3.3rem 0; border: 0; border-radius: 50%; background: $primary-dark; color: $white; font-size: 1.5rem; cursor: pointer; }
.checkout-modal__content { display: flex; flex-direction: column; align-items: center; width: 100%; gap: 0.8rem; padding: 1.4rem 1.6rem; text-align: center; }
.checkout-modal__headline { display: flex; flex-direction: column; width: 100%; gap: 0.3rem; padding: 1.1rem 3.5rem 1.1rem 1rem; border-radius: 0.8rem; background: linear-gradient(110deg, $primary-dark, $secondary-dark); color: $white; text-align: left; }
.checkout-modal__headline span, .checkout-modal__eyebrow { color: $primary; font-size: 0.8rem; font-weight: 900; letter-spacing: 0.08em; }
.checkout-modal__headline strong { font-size: clamp(1.1rem, 3vw, 1.5rem); }
.checkout-modal h2 { max-width: 40rem; font-size: clamp(2rem, 5vw, 3.3rem); }
.checkout-modal__intro { color: $text-secondary; line-height: 1.5; }
.checkout-modal__upgrades { display: flex; width: 100%; gap: 0.8rem; }
.checkout-modal__upgrade { display: flex; flex: 1 1 0; align-items: center; width: 100%; gap: 0.8rem; padding: 1rem; border: 1px solid rgba($primary-dark, 0.14); border-radius: 0.7rem; cursor: pointer; transition: 0.25s ease; }
.checkout-modal__upgrade--selected { border-color: $primary; background: linear-gradient(135deg, $secondary-dark, $primary-dark); color: $white; }
.checkout-modal__upgrade input { width: 1.2rem; height: 1.2rem; flex-shrink: 0; accent-color: $primary; }
.checkout-modal__upgrade > span { display: flex; flex-direction: column; width: 100%; text-align: left; }
.checkout-modal__upgrade em { color: $secondary-dark; font-size: 0.8rem; font-style: normal; font-weight: 900; }
.checkout-modal__upgrade small { color: $text-secondary; font-size: 0.84rem; line-height: 1.5; }
.checkout-modal__upgrade b { color: $secondary-dark; }
.checkout-modal__upgrade--selected em, .checkout-modal__upgrade--selected b { color: $primary; }
.checkout-modal__upgrade--selected small { color: rgba($white, 0.7); }
.checkout-modal__included { display: flex; flex-direction: column; width: 100%; gap: 0.6rem; padding: 1.1rem; border-radius: 0.8rem; background: $primary-light; }
.checkout-modal__included p { display: flex; justify-content: center; width: 100%; gap: 0.6rem; }
.checkout-modal__included span { color: $BAKANO-GREEN; font-weight: 900; }
.checkout-modal__details { display: flex; flex-direction: column; width: 100%; gap: 0.65rem; padding: 1rem; border: 1px solid rgba($primary-dark, 0.12); border-radius: 0.7rem; background: $primary-surface; }
.checkout-modal__details > p { width: 100%; font-weight: 900; text-align: left; }
.checkout-modal__details > div { display: flex; width: 100%; gap: 0.8rem; }
.checkout-modal__details label { display: flex; flex: 1 1 0; flex-direction: column; width: 100%; gap: 0.2rem; text-align: left; }
.checkout-modal__details label span { color: $text-secondary; font-size: 0.82rem; font-weight: 800; }
.checkout-modal__details input { width: 100%; padding: 0.65rem; border: 1px solid rgba($primary-dark, 0.14); border-radius: 0.5rem; font: inherit; }
.checkout-modal__details input:focus { outline: 2px solid rgba($primary, 0.3); border-color: $primary; }
.checkout-modal__total { display: flex; justify-content: center; align-items: center; width: 100%; gap: 1rem; padding-top: 0.5rem; border-top: 1px solid rgba($primary-dark, 0.12); }
.checkout-modal__total > span { display: flex; flex-direction: column; color: $text-secondary; font-size: 0.82rem; font-weight: 900; letter-spacing: 0.07em; }
.checkout-modal__total small { color: $secondary-dark; }
.checkout-modal__total strong { font-size: 2.2rem; }
.checkout-modal__continue { display: flex; justify-content: center; width: 100%; gap: 0.6rem; padding: 0.9rem; border: 0; border-radius: 0.6rem; background: $primary; color: $white; font-weight: 900; cursor: pointer; box-shadow: 0 0.7rem 1.4rem rgba($primary, 0.24); }
.checkout-modal__continue:disabled { opacity: 0.65; cursor: wait; }
.checkout-modal__legal { color: $text-secondary; font-size: 0.8rem; line-height: 1.5; }
.checkout-modal__error { width: 100%; padding: 0.8rem; border-radius: 0.5rem; background: $alert-error-bg; color: $alert-error; }
.checkout-transition-enter-active, .checkout-transition-leave-active, .checkout-stage-enter-active, .checkout-stage-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.checkout-transition-enter-from, .checkout-transition-leave-to, .checkout-stage-enter-from, .checkout-stage-leave-to { opacity: 0; }
@keyframes spin { to { transform: rotate(360deg); } }
@media (max-width: 600px) { .checkout-overlay { padding: 0.5rem; } .checkout-modal__content { padding: 0.8rem 1rem; } .checkout-modal__upgrades, .checkout-modal__details > div { flex-direction: column; } }
</style>
