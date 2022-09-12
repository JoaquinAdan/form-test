
function App() {

  return (
    <>
    <h1>Contactame</h1>
    <form action="https://formsubmit.co/rodriguezjdev@gmail.com" method="post">
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" name="nombre" id="nombre" required />
      <br/>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" required/>
      <br/>
      <label htmlFor="mensaje">Mensaje:</label>
      <textarea name="mensaje" id="mensaje" cols="30" rows="10" required></textarea>
      <br/>
      <button type="submit" value="Enviar" />
    </form>
    </>
  )
}

export default App
