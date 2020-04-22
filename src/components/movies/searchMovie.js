import React from 'react'
import axios from 'axios'
import KeepMovie from './keepMovie'
class searchMovie extends React.Component {

    state = {
        keepText: "",
        title: "",
        year: "",
        imdb: "",
        image: "",
        description: "",
        imagination: "",
        searhBind: true,
    }

    textMovie = (event) => {
        this.keepText = event.target.value;
    }

    searchMovie = () => {

        if (this.state.keepText != null) {
            const urlMovie = "http://www.omdbapi.com/?t=" + this.keepText + "&apikey=40345c55";
            axios.get(urlMovie).then(response => {
                //   console.log(response);
                if (response.data.Response == "True") {
                    this.setState({
                        title: response.data.Title,
                        year: response.data.Year,
                        imdb: response.data.imdbRating,
                        image: response.data.Poster,
                        description: response.data.Plot,
                        imagination: response.data.Genre
                    });

                }
                else {
                    console.log("Film bulunamadı");
                    this.setState({
                        title: "Film Bulunamadı",
                        year: "",
                        imdb: "",
                        image: process.env.PUBLIC_URL + "/default-movie.jpg",
                    });

                }
            });
            this.setState({
                searhBind: true
            })
        }
        else {
            this.setState({
                title: "Boş bırakırsan bulamam",
                year: "",
                imdb: "",
                image: process.env.PUBLIC_URL + "/default-movie.jpg",
            });
        }
        this.refs.textInput.value = "";

    }
    render() {
        return (
            <div>
                <div className="container d-flex flex-column justify-content-center mt-5" style={{ minWidth: "60%", minHeight: "65vh" }}>
                    <div className="row">
                        <div className="col-12">
                            <span className="d-flex justify-content-center">
                                <i style={{ color: "#ffa41b", fontSize: "50px" }} className="fab fa-youtube">
                                    <strong style={{ color: "#333" }}> Bi</strong><b>Film</b></i>
                            </span>
                            <hr />
                        </div>
                        <div className="col-10 offset-1">
                            <div className="form-inline form-xl">
                                <input className="form-control form-control-lg w-100"
                                    type="text"
                                    ref="textInput"
                                    onChange={this.textMovie.bind(this)}
                                    onKeyPress={(e) => {
                                        if (e.key == 'Enter')
                                            this.searchMovie();
                                    }}
                                    placeholder="Search..."
                                    aria-label="Search" />
                            </div>
                        </div>
                    </div>
                    {this.keepText != null ? <KeepMovie name={this.state} /> : ""}
                </div>

            </div>
        )
    }
}


export default searchMovie;