import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(./img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/Christalpena/'>
                <img src="./img/github.png" alt='Github' />
            </a>
            <a href='https://www.linkedin.com/in/christal-pe%C3%B1a-p%C3%A9rez/'>
                <img src="./img/linkedIn.png" alt='LinkedIn' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="./img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer