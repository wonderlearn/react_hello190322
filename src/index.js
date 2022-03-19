import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function MyDetails() {
    return (
        <h1>"I'm learning React"</h1>

    )

}


function MyPage(){
  return(
      <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
       </div>
  )
}

//console.log(page)


ReactDOM.render(
    <div>
        <Navbar />
        <MyDetails />
        <MyPage />
    </div>,
    document.getElementById("root")
)

//Navbar example structure
const page = (
    <div>
        <img src={"wonderlearn.jpg"} width={50} height={50} alt="Wonderlearn Logo"/>

        <h1>Fun Facts About React</h1>
        <ul >
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>IS maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

//document.getElementById("root").append()

ReactDOM.render(page, document.getElementById('root'));