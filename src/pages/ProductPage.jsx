import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { earrings } from '../data'
import ProductQr from '../ProductQr'

function ProductPage({ items = earrings, collectionTitle, collectionPath }) {
  const { slug } = useParams()
  const item = items.find((entry) => entry.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!item) {
    return (
      <main>
        <section className="section collection-page">
          <h2>Piece not found</h2>
          <p className="section-lead">
            <Link to={collectionPath}>Back to {collectionTitle}</Link>
          </p>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="section product-page">
        <p className="eyebrow">
          <Link to="/#collections">Collections</Link>
          {' / '}
          <Link to={collectionPath}>{collectionTitle}</Link>
          {' / '}
          {item.name}
        </p>
        <div className="product-hero">
          <img
            className="product-hero-photo"
            src={item.image}
            alt={item.name}
          />
          <div>
            <h2>{item.name}</h2>
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
            <ProductQr item={item} size={168} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductPage
