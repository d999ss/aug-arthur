import localFont from 'next/font/local'

export const styreneA = localFont({
  src: '../public/__styreneA_403256-normal-500-100.ttf',
  variable: '--font-styrene-a',
  weight: '500',
  display: 'swap',
})

export const styreneB = localFont({
  src: [
    {
      path: '../public/__styreneB_57fc85-normal-400-100.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/__styreneB_57fc85-normal-500-100.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-styrene-b',
  display: 'swap',
})

export const tiempos = localFont({
  src: '../public/Tiempos Text Regular-normal-400-100.ttf',
  variable: '--font-tiempos',
  weight: '400',
  display: 'swap',
})