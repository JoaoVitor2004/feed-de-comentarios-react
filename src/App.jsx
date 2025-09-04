import { useState } from "react"
import Toastify from "toastify-js"
import styles from "./styles/App.module.css"
import "./styles/Modal.css";
import Logo from "./assets/images/react.svg"

export default function App() {

  const [feed, setFeed] = useState([])
  const [hide, setHide] = useState("hide")
  const [messageError, setMessageError] = useState("")
  const [email, setEmail] = useState("")
  const [coment, setComent] = useState("")

  const showAndHideModal = () => {
    setHide((prev) => prev === "hide" ? "" : "hide")
  }

  const submitFormComent = () => {

    const verify = email.match(/^[a-zA-Z-_]+@+[a-zA-Z]+\.+[a-z]{1,3}/)

    if (!verify) {
      showAndHideModal()
      setMessageError("Email invalido!")
      return
    }

    if (coment === "") {
      showAndHideModal()
      setMessageError("Escreva um comemtario!")
      return
    }

    Toastify({
      text: "Comentario enviado com sucesso!",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        width: "600px",
        maxWidth: "90%",
        background: "#2c2c2c",
        color: "#fff"
      },
      onClick: function () { } // Callback after click
    }).showToast();

    const obj = {
      valueEmail: email,
      valueComemt: coment
    }

    setFeed(prev => [...prev, obj])
  }

  return (
    <>
      <div className={`fade ${hide}`}>
        <div className={`modal ${hide}`}>
          <button onClick={showAndHideModal} className="btnClose">X</button>
          <h2>{messageError}</h2>
        </div>
      </div>
      <main className={styles.app}>
        <img className={styles.logo} src={Logo} alt="Logo react" />
        <div className={styles.container}>
          <h1 className={styles.title}>Feed de comentarios</h1>
          <form action="#" onSubmit={(event) => {
            event.preventDefault()
            submitFormComent()
          }}>

            <input type="email" id="email" onChange={(prev) => setEmail(prev.target.value)} placeholder="Digite seu melhor email" />

            <textarea id="coments" placeholder="Digite seu melhor comentario" onChange={(prev) => setComent(prev.target.value)}></textarea>

            <input type="submit" value="Submit" className={`${styles.btn}`} />

          </form>
          <p className={styles.info}>Envie seu primeiro comentario!</p>
          {
            feed.map((item) => (
              <div key={item.valueEmail} className={styles.comentario}>
                <p><strong>Email</strong>: {item.valueEmail}</p>
                <p><strong>Comentario</strong>: {item.valueComemt}</p>
              </div>
            ))
          }
        </div>
      </main>
    </>
  )
}