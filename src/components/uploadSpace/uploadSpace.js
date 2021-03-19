import Dropzone from 'react-dropzone'
import React from 'react'
import Axios from 'axios'

export default function uploadPage() {

    const onDrop = (files) => {
        const config = {
            header: {'content-type': 'mulipart/form-data'}
        }
        let formdata = new FormData()
        formdata.append("file", files[0])

        Axios.post('http://localhost:5000/file', formdata, config)
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
            <Dropzone
                multiple={false}
                onDrop={onDrop}
            >
                {
                    ({getRootProps, getInputProps}) => (
                        <div style={{width: '100vh', height: '60vh', border:'2px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center'}} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <h1 style={{fontSize:"4rem", color:"gray"}}>+</h1>

                        </div>
                    )
                }
            </Dropzone>
        </div>
    )
}