'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Info = () => {
  const t = useTranslations('AboutMe')

  return (
    <ul className="list-none font-semibold text-lg whitespace-pre">
      <li>
        {t('name-title')}:{' '}
        <span className="opacity-50 font-thin">{t('name')}</span>
      </li>
      <li>
        {t('date-title')}:{' '}
        <span className="opacity-50 font-thin">05.10.2005</span>
      </li>
      <li>
        {t('email-title')}:{' '}
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL as string}`}
          className="opacity-50 font-thin underline"
        >
          {process.env.NEXT_PUBLIC_EMAIL}
        </Link>
      </li>
      <li>
        {t('phone-title')}:{' '}
        <Link
          href={`tel:+380953424041`}
          className="opacity-50 font-thin underline"
        >
          {'+38(095)342-40-41'}
        </Link>
      </li>
      <li>
        {t('location-title')}:{' '}
        <span className="opacity-50 font-thin">{t('location')}</span>
      </li>
    </ul>
  )
}

export default Info
