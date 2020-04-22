import React from 'react'
import ReactDOM from 'react-dom'


class Favourite extends React.Component {
    state = {
        fav: [],
        message: "Remove all favourite movies"
    }
    componentDidMount() {
        const result = localStorage.getItem("favouriteInfo");
        const response = JSON.parse(result);
        if (response != null) {
            response.shift();
            this.setState({
                fav: response
            })
        }
        else {
            this.setState({
                message: "Hey Firstly add favourite a movie"
            })
        }
    }
    render() {
        return (
            <div>
                <div className="container mt-4 ">
                    {this.state.message == "Remove all favourite movies" ?
                        <h5 style={{ color: "#333" }}>{this.state.message} &nbsp;
                        <button onClick={() => {
                                localStorage.removeItem("favouriteInfo");
                                window.location.reload();
                            }}
                                className="btn btn-sm bg-danger text-light">
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </h5> : <h5 style={{ color: "#333" }}>{this.state.message} &nbsp;
                        <a href="/"
                                className="btn btn-sm bg-secondary text-light">
                                <i className="fas fa-plus"></i>
                            </a>
                        </h5>
                    }
                    <hr />
                    <div className="row ">
                        {this.state.fav.map(item => (
                            <div className="col-md-6" key={item.description}>
                                <div className="card mb-3 mb-5" style={{ maxWidth: "80vh" }}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={item.image}
                                                className="card-img" />
                                        </div>
                                        <div className="col-md-8 shadow-sm">
                                            <div className="card-body">
                                                <h5 style={{ color: "#ffa41b" }} className="card-title">{item.title}</h5>
                                                <p className="card-text"><strong>Year: </strong>{item.year}</p>
                                                <p className="card-text"><strong>Plot: </strong>{item.description}</p>
                                                <p className="card-text"><strong>Imdb: </strong>{item.imdb}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Favourite;