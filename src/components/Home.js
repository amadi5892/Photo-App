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
            selectedImage: pawImages[0],
            email: '',
            password: '',
            formCompleted: false
        }
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleFormSubmission = (e) => {
        e.preventDefault()
        this.setState({
            formCompleted: true
        })
        console.log("Form is submitted")
    }

    handleThumbClick(selectedImage) {
            this.setState({
            selectedImage
        })
    }

    render() {
        const { images, selectedImage } = this.state
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Login
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" value={this.state.email} onChange={this.onEmailChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" value={this.state.password} onChange={this.onPasswordChange} class="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" onClick={this.handleFormSubmission} class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
                    <div >
                    {this.state.formCompleted === true ?(
                    <div className="container">
                        <h1>Hello {this.state.email}</h1>
                        <div className="display-img" >
                            <div>
                                <img src={selectedImage} alt=""></img>
                            </div>
                        </div>
                        <div className="selection">
                            {images.map((image, index) => (
                                <div key={index} onClick={this.handleThumbClick.bind(this, image)} >
                                    <img src={image} alt=""></img>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
                </div>
            </div>
        )
    }
}
