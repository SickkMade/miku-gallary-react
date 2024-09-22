import PropTypes from "prop-types"
import '../css/createtext.css'

function CreateText({data, imageIndex}) {
  return (
    <div className="createtext--main">
        {data.map((innerObject, i) => {
            return (<div className={imageIndex!=i && 'createtext--invisible'} key={'textContent ' + i}>
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
}

export default CreateText