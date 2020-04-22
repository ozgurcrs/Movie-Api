import React from 'react'

class KeepMovie extends React.Component {

    state = {
        favourite: [],
        controlFav: false,
        message: ""
    }

    componentDidMount() {
        const result = localStorage.getItem("favouriteInfo");
        const response = JSON.parse(result);
        if (this.state.favourite == '')
            this.state.favourite = this.state.favourite.concat(this.state.favourite, response);

    }

    favMovie = () => {
        const info = {
            title: this.props.name.title,
            image: this.props.name.image,
            year: this.props.name.year,
            description: this.props.name.description,
            imdb: this.props.name.imdb
        }

        if (info.year == "") {
            console.log("Film Yok");
            this.setState({
                message: "Movie or Series not found"
            })
            this.props.name.description = ""
        }
        else {
            this.setState({
                controlFav: true,
                message: "Added your favourite list"
            });
            this.props.name.searhBind = false;
            this.state.favourite.push(info);
            localStorage.setItem("favouriteInfo", JSON.stringify(this.state.favourite));
        }
    }

    render() {

        return (
            <div className="container mt-4 ">
                <h5 style={{ color: "#333" }}><i className="far fa-grin-stars"></i>
                    {this.state.message == "Movie or Series not found" ?
                        <div className="alert alert-danger">{this.state.message}</div>
                        : this.props.name.imagination}</h5>
                <hr />
                <div className="row d-flex justify-content-center ">
                    <div className="card mb-3 mb-5" style={{ maxWidth: "80vh" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={this.props.name.image == "N/A" ? process.env.PUBLIC_URL + "/default-movie.jpg"
                                    : this.props.name.image}
                                    className="card-img" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.name.title}</h5>
                                    <p className="card-text"><strong>Year</strong>: {this.props.name.year}</p>
                                    <p className="card-text"><strong>Plot</strong>: {this.props.name.description}</p>
                                    <p className="card-text"><strong>Imdb</strong>: {this.props.name.imdb}</p>
                                </div>
                            </div>
                        </div>
                        {
                            this.props.name.searhBind == true ? <button
                                ref="button"
                                onClick={this.favMovie.bind(this)}
                                className="btn btn-danger btn-block rounded-0"><i className="far fa-heart"></i></button> :
                                <div className="alert alert-success mb-0" >{this.state.message}</div>
                        }
                    </div>
                </div>
            </div>

        )
    }

}
export default KeepMovie