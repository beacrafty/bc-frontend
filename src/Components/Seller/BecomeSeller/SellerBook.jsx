import WrapperComponent from '@/Components/Widgets/WrapperComponent'
import React from 'react'

const SellerBook = () => {
    return (
        <WrapperComponent classes={{ sectionClass: "about-page section-b-space", fluidClass: "container" }} customCol={true}>
            <iframe
                allowFullScreen={true}
                scrolling="no"
                className="fp-iframe"
                style={{ border: '0px' ,borderRadius: '18px', width: '100%', height: '800px' }}
                src="https://heyzine.com/flip-book/0023503b2a.html"
            />
        </WrapperComponent>
    )
}

export default SellerBook