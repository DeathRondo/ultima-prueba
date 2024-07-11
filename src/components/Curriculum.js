import React from 'react'

export const Curriculum = () => {
  return (
    <main className='layout__content'>
      <section className='headernav content__resume'>
        <header className='resume__header'>
          <h1 className='resume__title'>Curriculum</h1>
        </header>

        <div className='resume__container'>
          <section className='resume__left'>
            <header className='resume__subheader'>
              <h2 className='resume__subtitle'>Formación</h2>
            </header>
            <div className='resume__timelines'>
              <article className='timelines__timeline'>

                <header  className='timeline__header'>
                  <h4 className='timeline__year'>2018</h4>
                  <span className='timeline__company'>IP La Araucana</span>
                </header>

              <div className='timeline__divider'></div>

              <div className='timeline__description'>
                <h3 className='timeline__title'>Técnico en computación e informática</h3>
                <p className='timeline__text'>
                Titulo de técnico en computación e informática
                </p>
              </div>
              </article>

              <article className='timelines__timeline'>

                <header  className='timeline__header'>
                  <h4 className='timeline__year'>2022</h4>
                  <span className='timeline__company'>IP Santo Tomas</span>
                </header>

              <div className='timeline__divider'></div>

              <div className='timeline__description'>
                <h3 className='timeline__title'>Ingeniería en informática</h3>
                <p className='timeline__text'>
                  Titulado como ingeniero en informática
                </p>
              </div>
              </article>
            </div>


            {/* experiencia laboral */}
            <header className='resume__subheader'>
              <h2 className='resume__subtitle'>Experiencia</h2>
            </header>
            <div className='resume__timelines'>
              <article className='timelines__timeline'>

                <header  className='timeline__header'>
                  <h4 className='timeline__year'>2022 - Actualidad</h4>
                  <span className='timeline__company'>Tecnico informatico 1B</span>
                </header>

              <div className='timeline__divider'></div>

              <div className='timeline__description'>
                <h3 className='timeline__title'>Tecnico informatico 1B</h3>
                <p className='timeline__description'>
                  Soporte especializado residente en oficina ubicada en las condes, me desempeño realizando soporte de software ofimática, de uso interno empresarial y hardware, gestion de tickets e inventario
                </p>
              </div>
              </article>

              <article className='timelines__timeline'>

                <header  className='timeline__header'>
                  <h4 className='timeline__year'>2022</h4>
                  <span className='timeline__company'>IP Santo Tomas</span>
                </header>

              <div className='timeline__divider'></div>

              <div className='timeline__description'>
                <h3 className='timeline__title'>Adecco - Wom</h3>
                <p className='timeline__description'>
                  Resolución de tickets con Jira a problemas y solicitudes como: movimiento de usuarios, reset de contraseña, permisos de active directory
                </p>
              </div>
              </article>
            </div>
          </section>

          <section className='resume__right'>
            <header className='resume__subheader'>
              <h2 className='resume__subtitle'>Habilidades</h2>
            </header>

          <div className='resume__skills'>
            <article className='skills__title'>
              <h4 className='skills__text'>HTML</h4>
              <span className='skills_number'>60%</span>
            </article>
            <div className='skills__progressbar'>
                <div className='skills_percentage skills__percentage--p1'></div>
              </div>

            <article className='skills__title'>
              <h4 className='skills__text'>CSS</h4>
              <span className='skills_number'>40%</span>
              
            </article>
            <div className='skills__progressbar'>
                <div className='skills_percentage skills__percentage--p2'></div>
              </div>

            <article className='skills__title'>
              <h4 className='skills__text'>Javascript</h4>
              <span className='skills_number'>45%</span>
            </article>
            <div className='skills__progressbar'>
                <div className='skills_percentage skills__percentage--p3'></div>
              </div>

              <article className='skills__title'>
                <h4 className='skills__text'>SQL</h4>
                <span className='skills_number'>35%</span>
              </article>
              <div className='skills__progressbar'>
                <div className='skills_percentage skills__percentage--p6'></div>
              </div>
              <article className='skills__title'>
                <h4 className='skills__text'>Git</h4>
                <span className='skills_number'>40%</span>
              </article>
              <div className='skills__progressbar'>
                <div className='skills_percentage skills__percentage--p5'></div>
              </div>

              
            <article className='skills__title'>
              <h4 className='skills__text'>React</h4>
              <span className='skills_number'>25%</span>
            </article>
            <div className='skills__progressbar'>
                <div className='skills_percentage skills__percentage--p4'></div>
              </div>
          </div>

          <div className='resume__knowledge'>
            <ul className='knowledges__list'>
              <li className='knowledge__option'>Programacion</li>
              <li className='knowledge__option'>Frontend</li>
              <li className='knowledge__option'>Desarrollo Web</li>
              <li className='knowledge__option'>Diseño Web</li>
              <li className='knowledge__option'>Maquetacion</li>
            </ul>
          </div>

          </section>

        </div>

        <div className='resume__certificates'>
        <header className='resume__subheader'>
          <h1 className='resume__subtitle'>Certificados</h1>
        </header>
        <section className='certificates__container'>
          <article className='certificates__certificate'>
            <div className='certificates__logo'>
              <img alt='logo udemy' src='certificado-1.png'/>
            </div>
            <div className='certificates__content'>
              <h4 className='certificates__title'>Javascript Moderno - Guia para dominar el lenguaje</h4>
              <span className='certificates__id'></span>
              <span className='certificates_date'>14-11-2023</span>
            </div>
          </article>

          <article className='certificates__certificate'>
            <div className='certificates__logo'>
              <img alt='logo academia' src='holamundologo.png'/>
            </div>
            <div className='certificates__content'>
              <h4 className='certificates__title'>Ultimate Javascript</h4>
              <span className='certificates__id'></span>
              <span className='certificates_date'>14-11-2023</span>
            </div>
          </article>

          <article className='certificates__certificate'>
            <div className='certificates__logo'>
              <img alt='logo academia' src='holamundologo.png'/>
            </div>
            <div className='certificates__content'>
              <h4 className='certificates__title'>Ultimate GIT - GitHub</h4>
              <span className='certificates__id'></span>
              <span className='certificates_date'>14-11-2023</span>
            </div>
          </article>

          {/* 
          Article para futuros certificados
          <article className='certificates__certificate'>
            <div className='certificates__logo'>

            </div>
            <div className='certificates__content'>
              <h4 className='certificates__title'>Javascript</h4>
              <span className='certificates__id'></span>
              <span className='certificates_date'></span>
            </div>
          </article> */}


        </section>
        </div>
      </section>
    </main>
  )
}
