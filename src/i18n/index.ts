import spanish from './es.json'

const LANGUAGES = {
  SPANISH: 'es'
}

export const getI18N = ({
  currentLocale = 'es'
}: {
  currentLocale: string | undefined
}) => {

  if (currentLocale === LANGUAGES.SPANISH) return spanish
  return spanish
}