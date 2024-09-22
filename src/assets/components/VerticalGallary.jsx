import PropTypes from "prop-types"
import '../css/verticalgallary.css'

function VerticalGallary({data, imageIndex}) {

  return (
    <div className="verticalgallary">
        {data.map((image, i) => {
                return <img style={{transform: `translateY(${imageIndex * -100}%)`}} className="verticalgallary--image" src={image.image} key={"image "+i}/>
            })}
    </div>
    )
}

VerticalGallary.propTypes = {
    data: PropTypes.array,
    imageIndex: PropTypes.number,
}

export default VerticalGallary