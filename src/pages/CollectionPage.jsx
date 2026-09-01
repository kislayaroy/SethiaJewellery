import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function CollectionPage({ title, eyebrow, lead, items }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [title])

  return (
    <main>
      <section className="section collection-page">
        <p className="eyebrow">
          <Link to="/#collections">Collections</Link>
          {' / '}
          {title}
        </p>
        <div className="section-head">
          <h2>{title}</h2>
          <p className="eyebrow">{eyebrow}</p>
        </div>
        <p className="section-lead">{lead}</p>
        <div className="grid product-grid">
          {items.map((item) => (
            <article className="card product" key={item.name}>
              <img
                className={
                  item.image.startsWith('/images/')
                    ? 'catalog-photo'
                    : undefined
                }
                src={item.image}
                alt={item.name}
              />
              <div className="card-body">
                <h3>{item.name}</h3>
                <ul className="specs">
                  <li>
                    <span>Purity</span>
                    <strong>{item.karat}</strong>
                  </li>
                  <li>
                    <span>Gold weight</span>
                    <strong>{item.weight}</strong>
                  </li>
                  <li>
                    <span>Size</span>
                    <strong>{item.size}</strong>
                  </li>
                </ul>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CollectionPage
