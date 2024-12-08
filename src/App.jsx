import HeroMobile from './assets/hero-mobile.jpg'
import HeroDesktop from './assets/hero-desktop.jpg'
import IconError from './components/IconError'
import IconArrow from './components/IconArrow'
import './App.pcss'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useEffect } from 'react'

const RE_EMAIL =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

export default function App() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [inputCls, setInputCls] = useState([])

  useEffect(() => {
    setInputCls([
      twMerge(clsx(error ? 'text-red-600 my-[12.5px] mr-[15px]' : 'hidden')),
      twMerge(clsx(error ? 'text-red-600' : 'hidden'))
    ])
  }, [error])

  /**
   * @param {React.FormEvent<HTMLFormElement>} ev
   */
  const handleSubmit = (ev) => {
    ev.preventDefault()

    if (!email.match(RE_EMAIL)) {
      setError(true)
      return
    }

    setEmail('')
    setTimeout(() => {
      setError(!!error)
    }, 10000)
  }

  useEffect

  return (
    <main className='container'>
      <header className='container__header'>
        <img src='/logo.svg' alt='Logo of the enterprise' />
      </header>
      <section className='container__hero'>
        <picture className='container__hero__image'>
          <source media='(min-width: 800px)' srcSet={HeroDesktop} />
          <img src={HeroMobile} alt='Hero image in screen mobile' />
        </picture>
      </section>
      <section className='container__info'>
        <h1 className='container__info__title'>
          <span>We&apos;re</span> coming soon
        </h1>
        <p className='container__info__desc'>
          Hello fellow shoppers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </p>
        <form className='container__info__form' onSubmit={handleSubmit}>
          <div className='container__info__form__contain'>
            <input
              placeholder='Email Addres'
              className='container__info__form__contain__input'
              value={email}
              onChange={(ev) => setEmail(ev.currentTarget.value)}
            />
            <div className={inputCls[0]}>
              <IconError />
            </div>
            <button className='container__info__form__contain__input__button'>
              <IconArrow />
            </button>
          </div>
          <div className={inputCls[1]}>Please provide a valid email</div>
        </form>
      </section>
    </main>
  )
}
