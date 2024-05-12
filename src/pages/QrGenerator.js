import "./QrGenerator.css"

import { useState } from 'react'
import { Link } from "react-router-dom"

const QrGenerator = () => {

  const [input, setInput] = useState("")
  const [qrCode, setQrCode] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getQrCode = async event => {
    event.preventDefault()
    try {
      setIsLoading(true)
      const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`)
      setQrCode(res.url)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setIsLoading(false)
    }
  }

  return <>
    <header>
      <h2 className="qr-title">QR generátor kódu</h2>
    </header>
    <main>
      <section className="qr-form">
        <div className="generating-gr">
          <p className="qr-form-title">Vložte URL nebo text</p>
          <form onSubmit={getQrCode}>
            <label for="url-form"></label>
            <input id="url-form"
              type="text"
              placeholder="URL nebo text"
              value={input}
              onChange={event => setInput(event.target.value)}
              required />
            <input type="submit" value="Generovat QR kód"></input>
          </form>
        </div>
        <div className="result-qr">
          {isLoading && <p>Nahrávám...</p>}
          <p className="your-qr-title">Váš QR kód</p>
          {!isLoading && (qrCode ? <div><img src={qrCode} alt="QR kód"></img></div> : <div></div>)}
        </div>
      </section>
    </main>
    <footer>
      <p><Link className="link-styles" to="/">Zpět na domovskou stránku</Link></p>
    </footer>
  </>
}

export default QrGenerator