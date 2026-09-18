const en = {
    // Common
    'common.present': 'Present',
} as const

export default en

export type TranslationKey = keyof typeof en
