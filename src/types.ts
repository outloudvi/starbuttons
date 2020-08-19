export interface NameWithL10n {
  name: string
  name_l10n?: { [key: string]: string }
  order?: number
}

export interface Sound extends NameWithL10n {
  file: string | string[]
  type: string
  category?: string | string[]
}

export interface Categories {
  [slug: string]: NameWithL10n
}

export interface SoundCategory {
  name: string
  sounds: Sound[]
}

export interface CategorizedSounds {
  [slug: string]: Sound[]
}
