import PropTypes from "prop-types"
import '../css/updownarrows.css'

function UpDownArrows({ setImageIndex, imageIndex}) {

    const handleUpClick = () => {
        if(imageIndex === 0){
            setImageIndex(5)
        }
        else{
            setImageIndex(imageIndex-1)
        }
    }

    const handleDownClick = () => {
        setImageIndex((imageIndex+1) % 6)
    }

  return (
    <div className="updownarrows">
        <button className="updownarrows--button" onClick={handleUpClick}>UP</button>
        <button className="updownarrows--button" onClick={handleDownClick}>DOWN</button>
    </div>
  )
}

UpDownArrows.propTypes = {
    setImageIndex: PropTypes.func,
    imageIndex: PropTypes.number,
}

export default UpDownArrows