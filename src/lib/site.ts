// Dados do escritório usados em todo o site.
// Para alterar telefone, e-mail etc., mude só aqui.

export const site = {
  name: 'Da Cas Advocacia',
  legalName: 'Esmerio Da Cas Sociedade Individual de Advocacia',
  lawyer: 'Marcelo Esmerio Da Cas',
  oab: 'OAB/RS nº 54.005',
  url: 'https://www.marcelodacas.com.br',
  email: 'contato@marcelodacas.com.br',
  phoneDisplay: '(51) 99722-1500',
  phoneHref: 'tel:+5551997221500',
  whatsappHref:
    'https://wa.me/5551997221500?text=' +
    encodeURIComponent('Olá, Dr. Marcelo! Vim pelo site e gostaria de conversar.'),
  // Preencher quando o Marcelo confirmar:
  address: null as string | null,
  hours: null as string | null,
}

export const navLinks = [
  { href: '/', label: 'Quem somos' },
  { href: '/o-que-fazemos', label: 'O que fazemos' },
  { href: '/contato', label: 'Contato' },
]

export const practiceAreas = [
  {
    title: 'Direito Civil',
    text: 'Orientação e atuação em questões do dia a dia, como responsabilidade civil, indenizações e obrigações.',
    icon: 'scale',
  },
  {
    title: 'Direito Empresarial',
    text: 'Apoio jurídico à rotina da empresa, da estruturação do negócio às relações com sócios e parceiros.',
    icon: 'building',
  },
  {
    title: 'Direito Contratual',
    text: 'Elaboração, revisão e negociação de contratos claros e seguros para todas as partes.',
    icon: 'document',
  },
  {
    title: 'Direito Imobiliário',
    text: 'Compra, venda, locação e regularização de imóveis com segurança jurídica.',
    icon: 'home',
  },
  {
    title: 'Famílias e Sucessões',
    text: 'Divórcio, guarda, pensão, inventário e planejamento sucessório, com cuidado e discrição.',
    icon: 'people',
  },
  {
    title: 'Cobranças e Execuções',
    text: 'Recuperação de crédito pela via extrajudicial e judicial, com estratégia em cada etapa.',
    icon: 'coins',
  },
] as const

export const services = [
  'Recuperação de crédito',
  'Acompanhamento de processos judiciais e administrativos',
  'Elaboração, revisão e negociação de contratos',
  'Consultoria jurídica para empresas e pessoas físicas',
]
