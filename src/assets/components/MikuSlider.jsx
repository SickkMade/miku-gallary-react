import UpDownArrows from "./UpDownArrows"
import PropTypes from "prop-types"
import VerticalGallary from "./VerticalGallary"
import { useState, useRef } from "react"
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
   const appRef = useRef(null)

    const addRipple = () => {
        appRef.current.classList.add('app--active');
        setTimeout(() => appRef.current.classList.remove('app--active'), 1000)
    }

    const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
    <CreateText appRef={appRef} data={data} imageIndex={imageIndex}/>
    <VerticalGallary data={data} imageIndex={imageIndex} />
    <UpDownArrows setImageIndex={setImageIndex} imageIndex={imageIndex} addRipple={addRipple}/>
    </>
  )
}

MikuSlider.propTypes = {
    data: PropTypes.array,
}

export default MikuSlider