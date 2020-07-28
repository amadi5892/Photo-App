import React from 'react'
import axios from 'axios'

const pawImages = [
    
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    
]

class Bookmark extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: pawImages,
            
        }
    }
    
    render() {
        const {images} = this.state
        return (
            <div>
                <h1 className="book">Saved Photos</h1>
                <div className="selection">
                            {images.map((image, index) => (
                                <div key={index}  >
                                    <img src={image} alt=""></img>
                                </div>
                            ))}
                        </div>
            </div>
        )
    }
}

export default Bookmark