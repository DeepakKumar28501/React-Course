import React from 'react';
import PropTypes from 'prop-types';

export default function Body(props){
    return(
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner max-h" >
  <style>{"\
        .max-h{\
          height:100%;\
        }\
      "}</style>

    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>{props.heading}</h5>
        <p>{props.comment}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" classNameName="d-block w-100" alt="... /" />
      <div className="carousel-caption d-none d-md-block">
      <h5>{props.heading}</h5>
        <p>{props.comment}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h5>{props.heading}</h5>
        <p>{props.comment}</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

Body.propTypes={heading: PropTypes.string.isRequired,//when we use is required then the proper must we put calling time,
                comment: PropTypes.string
                }

// default props
Body.defaultProps={
    heading: 'This is default comment',
    aboutText: 'this is default comment'
}