import React from 'react'

const Partners = () => {
    return (
        <div className="client-section mt-2 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="client-wrap d-flex flex-wrap justify-content-center align-items-center">
                        <div className="col-6 col-sm-6 col-md-3 clients-img-inner text-center mb-3 mb-md-0">
                            <a href="https://www.amazon.de/stores/page/CCA0B835-FD3E-4385-B9A7-F1296FD82E9A" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src="assets/assets/img/client/AMAZON.png" 
                                    alt="Amazon" 
                                    className="img-fluid px-4 px-md-2" 
                                />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-3 clients-img-inner text-center mb-3 mb-md-0">
                            <a href="https://www.ebay.de/usr/beacraftyde" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src="assets/assets/img/client/EBAY.png" 
                                    alt="Ebay" 
                                    className="img-fluid px-4 px-md-2" 
                                />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-3 clients-img-inner text-center mb-3 mb-md-0">
                            <a href="https://www.etsy.com/shop/BeacraftyDE" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src="assets/assets/img/client/ETSY.png" 
                                    alt="Etsy" 
                                    className="img-fluid px-4 px-md-2" 
                                />
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-3 clients-img-inner text-center">
                            <a href="https://www.productswithlove.de/store/beacrafty" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src="assets/assets/img/client/PWL.png" 
                                    alt="PWL" 
                                    className="img-fluid px-4 px-md-2" 
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
