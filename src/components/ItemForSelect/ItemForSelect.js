import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const ItemforSelect = ({name, option}) => {
    const [isSelected, setIsSelected] = useState(false)
    
    const toggle = () => {setIsSelected(previous => !previous)}
    const type = (option ^ isSelected) ? "primary" : "secondary"

    return (
        <Button type={type} onClick={toggle}>
            {name}
        </Button>
    )
}

export default ItemforSelect