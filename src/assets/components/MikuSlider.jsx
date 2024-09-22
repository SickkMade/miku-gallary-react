import UpDownArrows from "./UpDownArrows"
import PropTypes from "prop-types"
import VerticalGallary from "./VerticalGallary"
import { useState } from "react"

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

  return (
    <>
    <div>MikuSlider</div>
    <VerticalGallary data={data} imageIndex={imageIndex} />
    <UpDownArrows setImageIndex={setImageIndex} imageIndex={imageIndex}/>
    </>
  )
}

MikuSlider.propTypes = {
    data: PropTypes.array,
}

export default MikuSlider