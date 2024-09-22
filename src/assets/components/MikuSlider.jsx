import UpDownArrows from "./UpDownArrows"
import PropTypes from "prop-types"
import VerticalGallary from "./VerticalGallary"
import { useState } from "react"
import CreateText from "./CreateText"

function MikuSlider({ data }) {
    /*
    data array is of format:
        {
            image,
            header,
            description,
            color
        }
    */

    const [imageIndex, setImageIndex] = useState(0);
    const [isMovingUp, setIsMovingUp] = useState(false);

  return (
    <>
    <CreateText data={data} imageIndex={imageIndex} isMovingUp={isMovingUp}/>
    <VerticalGallary data={data} imageIndex={imageIndex} />
    <UpDownArrows setImageIndex={setImageIndex} imageIndex={imageIndex} setIsMovingUp={setIsMovingUp}/>
    </>
  )
}

MikuSlider.propTypes = {
    data: PropTypes.array,
}

export default MikuSlider