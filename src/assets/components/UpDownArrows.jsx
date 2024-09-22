import PropTypes from "prop-types"
import '../css/updownarrows.css'
import { ArrowUp } from "lucide-react"
import { ArrowDown } from "lucide-react"

function UpDownArrows({ setImageIndex, imageIndex, setIsMovingUp}) {

    const handleUpClick = () => {
        if(imageIndex === 0){
            setImageIndex(5)
        }
        else{
            setImageIndex(imageIndex-1)
            setIsMovingUp(true);
        }
    }

    const handleDownClick = () => {
        setImageIndex((imageIndex+1) % 6)
        setIsMovingUp(false);
    }

  return (
    <div className="updownarrows">
        <button className="updownarrows--button" onClick={handleUpClick}><ArrowUp /></button>
        <button className="updownarrows--button" onClick={handleDownClick}><ArrowDown /></button>
    </div>
  )
}

UpDownArrows.propTypes = {
    setImageIndex: PropTypes.func,
    imageIndex: PropTypes.number,
    setIsMovingUp: PropTypes.func,
}

export default UpDownArrows