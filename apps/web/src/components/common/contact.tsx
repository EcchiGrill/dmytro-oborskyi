'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { toast } from 'react-toastify'
import { useTranslations } from 'next-intl'
import { SendHorizontal, Loader2 } from 'lucide-react'
import { sendEmail } from '@/api/email'

const Contact = () => {
  const t = useTranslations('Contact')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !name || !content) return toast.error(t('fields'))

    setIsLoading(true)

    try {
      await sendEmail(email, name, content)
    } catch (error) {
      console.error('Error sending email:', error)
      return toast.error(t('error'))
    }

    setIsLoading(false)
    setEmail('')
    setName('')
    setContent('')

    toast.success(t('success'))
  }
  return (
    <div className="relative">
      <section
        className="relative w-screen snap-center h-screen bg-contact bg-cover bg-center place-content-center bg-no-repeat flex md:place-content-end place-items-center px-[6rem] lg:px-[20rem]"
        id="contact"
      >
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-8 w-full min-w-[22rem] max-w-lg rounded-lg bg-white p-7 sm:p-10 sm:py-20 py-14 shadow-lg shadow-slate-400/50 mx-2"
        >
          <h2 className="text-5xl text-center mb-10">{t('title')}</h2>
          <Input
            placeholder={t('email')}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <Input
            placeholder={t('name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
          />
          <Textarea
            placeholder={t('content')}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isLoading}
          />
          <Button
            type="submit"
            variant={'secondary'}
            className="py-5 text-base flex place-items-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t('sending')}
              </>
            ) : (
              <>
                {t('submit')} <SendHorizontal className="mt-0.5" />
              </>
            )}
          </Button>
        </form>
      </section>
      <div className="absolute bottom-0 flex place-items-center py-3 h-16 place-content-center w-full bg-gray-200 text-black/70">
        © 2025 Dmytro Oborskyi. All rights reserved.
      </div>
    </div>
  )
}

export default Contact
