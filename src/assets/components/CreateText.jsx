import PropTypes from "prop-types"
import '../css/createtext.css'

function CreateText({data, imageIndex, appRef}) {
  return (
    <div ref={appRef} className="createtext--main" >
        {data.map((innerObject, i) => {
            return (<div className={`createtext--instance ${imageIndex!=i ? 'createtext--invisible' : 'app--active'}`} style={{backgroundColor: data[i].color}} key={'textContent ' + i}>
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