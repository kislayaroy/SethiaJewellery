import './App.css'

const collections = [
  {
    name: 'Gold Jewellery',
    note: 'Traditional and contemporary gold for every occasion.',
    image:
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Diamond Jewellery',
    note: 'Rings, pendants, and sets set with fine diamonds.',
    image:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bridal Sets',
    note: 'Complete sets for weddings and festive wear.',
    image:
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Rings',
    note: 'Solitaires, bands, and everyday gold rings.',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Necklaces',
    note: 'Chains, pendants, and statement necklaces.',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Earrings',
    note: 'Studs, jhumkas, hoops, and drop silhouettes.',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
  },
]

const retailPieces = [
  {
    name: 'Bangles & Bracelets',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Everyday Wear',
    image:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'In-store Selection',
    image:
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  return (
    <div className="page">
      <header className="nav">
        <a className="brand" href="#top">
          <span className="logo">Sethia Jewellers</span>
          <span className="owner">Owned by Aman Sethia</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#collections">Collections</a>
            </li>
            <li>
              <a href="#retail">Retail</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#visit">Visit</a>
            </li>
          </ul>
        </nav>
      </header>

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
            {collections.map((item) => (
              <article className="card" key={item.name}>
                <img src={item.image} alt={item.name} />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
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

      <footer className="footer" id="visit">
        <span>Sethia Jewellers</span>
        <span>Started by Champak Lal · Run by Aman Sethia</span>
      </footer>
    </div>
  )
}

export default App
