import { QRCodeSVG } from 'qrcode.react'
import { siteUrl } from './data'

function productUrl(item) {
  return `${siteUrl}/earrings/${item.slug}`
}

function ProductQr({ item, size = 140 }) {
  const url = productUrl(item)

  return (
    <div className="qr-block">
      <QRCodeSVG
        value={url}
        size={size}
        level="M"
        includeMargin
        bgColor="#fffdf8"
        fgColor="#1a1612"
      />
      <p className="qr-caption">Scan to open this piece</p>
    </div>
  )
}

export { productUrl }
export default ProductQr
