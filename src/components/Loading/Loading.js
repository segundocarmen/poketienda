import React from 'react'

class Loading extends React.Component{
    render(){
        return(
            <div 
                className="loading-component" 
                style={{
                    position: 'fixed', 
                    width: '100%', 
                    height: '100%', 
                    top: 0, 
                    left: 0, 
                    background: 'rgba(255,255,255,0.5)',
                    zIndex: 10,
                    paddingTop: '200px'
                }}
            >
                <div>
                    <div className="d-flex justify-content-center">
                        <p style={{lineHeight: '35px', marginLeft: '10px', width: '100%', textAlign: 'center', fontSize: '32px', color: 'red'}}>Cargando...</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;