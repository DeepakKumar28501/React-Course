import React from 'react';
import PropTypes from 'prop-types';

export default function Body(props){
    return(
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner max-h" >
  <style>{"\
        .max-h{\
          height:100%;\
        }\
      "}</style>

    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>{props.heading}</h5>
        <p>{props.comment}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="... /" />
      <div class="carousel-caption d-none d-md-block">
      <h5>{props.heading}</h5>
        <p>{props.comment}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <h5>{props.heading}</h5>
        <p>{props.comment}</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
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