const TESTING_FRONTEND_HOST = 'testing-storybrand-frontend.bakano.ec'
const PUBLIC_ACADEMY_URL = 'https://bakanology.com/'

export type AppEnvironment = 'local' | 'testing' | 'production'

export function getAppEnvironment(hostname = window.location.hostname): AppEnvironment {
  if (hostname === 'localhost' || hostname === '127.0.0.1') return 'local'
  if (hostname === TESTING_FRONTEND_HOST) return 'testing'
  return 'production'
}

export function shouldResetOfferState(): boolean {
  return getAppEnvironment() !== 'production'
}

export function getFrontendBaseUrl(): string {
  return window.location.origin
}

export function getPaymentResponseUrl(): string {
  return `${getFrontendBaseUrl()}/pay-response`
}

export function getApiBaseUrl(): string {
  const environment = getAppEnvironment()
  if (environment === 'local') return 'http://localhost:8101'
  if (environment === 'testing') return 'https://testing-storybrand-backapp.bakano.ec'
  return 'https://bakanology-backapp.vercel.app'
}

export function getAcademyLoginUrl(): string {
  return PUBLIC_ACADEMY_URL
}
