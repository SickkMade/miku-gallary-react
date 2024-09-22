import PropTypes from "prop-types"
import '../css/createtext.css'

function CreateText({data, imageIndex, appRef}) {
  return (
    <div ref={appRef} className="createtext--main" style={{backgroundColor: data[imageIndex].color}}>
        {data.map((innerObject, i) => {
            return (<div className={imageIndex!=i ? 'createtext--invisible' : ''} key={'textContent ' + i}>
                <h1>{innerObject.header}</h1>
                <p>{innerObject.description}</p>
            </div>)
        })}
    </div>
        
  )
}

CreateText.propTypes = {
    data: PropTypes.array,
    imageIndex: PropTypes.number,
    appRef: PropTypes.any,
}

export default CreateText