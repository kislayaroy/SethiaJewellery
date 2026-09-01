import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { collections, retailPieces } from '../data'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Family jewellers</p>
          <h1>Jewellery for every occasion.</h1>
          <p>
            Sethia Jewellers deals in all types of jewellery — gold, diamond,
            bridal, and everyday pieces. Retail jewellery is available
            in-store, chosen to wear now and keep for years.
          </p>
          <a className="btn" href="#collections">
            View collections
          </a>
        </div>
        <div className="hero-art">
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=80"
            alt="Gold jewellery on display"
          />
        </div>
      </section>

      <section className="section" id="collections">
        <div className="section-head">
          <h2>All types of jewellery</h2>
          <p className="eyebrow">Gold · Diamond · Bridal</p>
        </div>
        <div className="grid">
          {collections.map((item) => {
            const inner = (
              <>
                <img src={item.image} alt={item.name} />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </div>
              </>
            )

            return item.href ? (
              <Link className="card card-link" to={item.href} key={item.name}>
                {inner}
              </Link>
            ) : (
              <article className="card" key={item.name}>
                {inner}
              </article>
            )
          })}
        </div>
      </section>

      <section className="section retail" id="retail">
        <div className="section-head">
          <h2>Retail jewellery</h2>
          <p className="eyebrow">Available in store</p>
        </div>
        <p className="section-lead">
          Walk in and choose from ready retail jewellery — bangles, everyday
          gold, and pieces you can take home the same day.
        </p>
        <div className="grid">
          {retailPieces.map((item) => (
            <article className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <h3>{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="about">
          <img
            className="about-photo"
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80"
            alt="Jewellery counter with rings and gold pieces"
          />
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Started by Champak Lal, continued by Aman Sethia.</h2>
            <p>
              Sethia Jewellers was started by Champak Lal. The house is now
              run by his son, Aman Sethia, who continues the same care for
              craft, trust, and a full range of jewellery for families and
              everyday wear.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
