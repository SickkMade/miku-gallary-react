import PropTypes from "prop-types"
import '../css/createtext.css'

function CreateText({data, imageIndex, appRef, isMovingUp}) {
    const whichClass = (i) => {
        if (imageIndex === i) return 'app--active';
        
        const diff = Math.abs(imageIndex - i);
        if (diff === 1 && ((isMovingUp && imageIndex < i) || (!isMovingUp && imageIndex > i))) {
          return 'createtext--behind';
        }
      
        return 'createtext--invisible';
      };
      

  return (
    <div ref={appRef} className="createtext--main" >
        {data.map((innerObject, i) => {
            return (<div className={`createtext--instance ${whichClass(i)}`} style={{backgroundColor: data[i].color}} key={'textContent ' + i}>
                <div className="createtext--instance--textwrapper">
                    <h1>{innerObject.header}</h1>
                    <p>{innerObject.description}</p>
                </div>
            </div>)
        })}
    </div>
        
  )
}

CreateText.propTypes = {
    data: PropTypes.array,
    imageIndex: PropTypes.number,
    appRef: PropTypes.any,
    isMovingUp: PropTypes.bool,
}

export default CreateText