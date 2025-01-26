import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-12 text-center">
                        <h6>Keep In Touch</h6>
                        <small>Buea, Cameroon</small> <br></br>
                        <a href="mailto:yuvenb5@gmail.com" className="h6 ">yuvenb5@gmail.com</a>
                        <div className="mt-3 h5">
                            <a href=""><i className="bi bi-whatsapp "></i></a>
                            <a href=""><i className="bi bi-telegram mx-2 "></i></a>
                            <a href=""><i className="bi bi-linkedin "></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="container footer">
          <div className="text-center">
              <p className='small p-0'> &copy; 2024 <img src="images/logo.png" width="80" alt=""></img> </p>
          </div>
          <div className="multicolored-line">
              <div className="color-block"></div>
              <div className="color-block"></div>
              <div className="color-block"></div>
              <div className="color-block"></div>
          </div>
        </div>
    </>
   
  )
}

export default Footer