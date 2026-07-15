/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VIP_UPGRADE_PRICE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
