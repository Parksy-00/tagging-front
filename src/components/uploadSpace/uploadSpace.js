import Dropzone from 'react-dropzone'
import React from 'react'
// import Axios from 'axios'
import {selectedTags, relatedTags} from "../../atoms/tags"
import { useRecoilValue, useRecoilState } from 'recoil'

export default function UploadPage() {
    const selected = useRecoilValue(selectedTags)
    const [related, relatedSet] = useRecoilState(relatedTags)

    const onDrop = (files) => {
        // const config = {
        //     header: {'content-type': 'mulipart/form-data'}
        // }
        // let formdata = new FormData()
        // formdata.append("file", files[0])

        // Axios.post('http://localhost:5000/file', formdata, config)
        //     .then(res => {
        //         console.log(res)
        //     })

        selected.forEach((tag, index, selected) => {
            if(!related.has(tag)) {
                relatedSet((old) => {   
                    let updated = new Map(old)
                    return updated.set(tag, 
                                       [...selected.slice(0, index),
                                        ...selected.slice(index + 1)])
                })
            }
        });
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