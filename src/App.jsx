import HeroMobile from './assets/hero-mobile.jpg'
import HeroDesktop from './assets/hero-desktop.jpg'
import IconError from './components/IconError'
import IconArrow from './components/IconArrow'
import './App.pcss'

const RE_EMAIL =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

export default function App() {
  return (
    <main className='container'>
      <header className='container__header'>
        <img src='/logo.svg' alt='' />
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
        <form className='container__info__form'>
          <div className='container__info__form__contain'>
            <input
              placeholder='Email Addres'
              className='container__info__form__contain__input'
            />
            <div hidden>
              <IconError />
            </div>
            <button className='container__info__form__contain__input__button'>
              <IconArrow />
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
