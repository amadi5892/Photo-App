import React from 'react'

const pawImages = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
]

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: pawImages,
            selectedImages: pawImages[0],
            email: '',
            password: '',
            formCompleted: false
        }
    }

    render() {
        const { images, selectedImages } = this.state
        return (
            <div>
                <h1>Home</h1>
                <div >
                    <div className="container">
                        <div className="display-img" >
                            <div>
                                <img src={selectedImages} alt=""></img>
                            </div>
                        </div>
                        <div className="selection">
                            {images.map((image, index) => (
                                <div key={index} >
                                    <img src={image} alt=""></img>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
