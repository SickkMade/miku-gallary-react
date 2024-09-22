import PropTypes from "prop-types"
import '../css/createtext.css'

function CreateText({data, imageIndex, appRef, isMovingUp}) {
    const whichClass = (i) => {
        if(Math.abs(imageIndex - i) === 1){
            if(isMovingUp && imageIndex - i === -1)
                return 'createtext--behind'
            else if(!isMovingUp && imageIndex - i === 1)
                return 'createtext--behind'
            else{
                return 'createtext--invisible'
            }
        } else if(imageIndex != i) {
            return 'createtext--invisible'
        }else{
            return 'app--active'
        }
    }
  return (
    <div ref={appRef} className="createtext--main" >
        {data.map((innerObject, i) => {
            return (<div className={`createtext--instance ${whichClass(i)}`} style={{backgroundColor: data[i].color}} key={'textContent ' + i}>
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
    isMovingUp: PropTypes.bool,
}

export default CreateText