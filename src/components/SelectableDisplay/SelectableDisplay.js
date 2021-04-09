import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Space } from 'antd';
import ItemforSelect from '../ItemForSelect/ItemForSelect';

const SelectableDisplay = ({array}) => {
    const [isSelected, setIsSelected] = useState(false)
    
    const toggle = () => {setIsSelected(previous => !previous)}

    return (
        <>
        <Button type="secondary" onClick={toggle}>
            [ ]
        </Button>

        <br></br>
        <Space size={[16, 16]} wrap style={{margin:"50px"}}>
            {array.map((name, index) => (
                <ItemforSelect key={index} name={name} option={isSelected}/>
            ))}
        </Space>
        </>
    )
}

export default SelectableDisplay