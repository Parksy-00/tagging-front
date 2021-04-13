import 'antd/dist/antd.css'
import './style.css'
import { Avatar, List, Tag, Typography } from 'antd'
import React, { useEffect } from 'react'


const FileList = ({selectedItems, setSelectedItems, unionedMatch, setIsAllEnabled}) => {

    if(unionedMatch.length != 0 && selectedItems.length == unionedMatch.length) setIsAllEnabled(true)
    else setIsAllEnabled(false)

    useEffect(() => {
        const reset = (e) => {
            const t = e.target
            const list = document.querySelector('.ant-list-items')
            if(t.closest('.ant-list-items') == list) return
            if(t.closest('.anticon-check-square')) return
            if(t.closest('.addSearch')) return
            if(t.closest('.ant-select-selector')) return
            if(t.closest('.ant-tag')) return
            if(t.closest('.ant-btn')) return
            for(const item of list.children) {
                item.classList.remove('selected')
            }
            setSelectedItems([])
        }
        document.body.addEventListener('click', reset)
        
        return () => {
            setSelectedItems([])
            document.body.removeEventListener('click', reset)
        }
    }, [])

    const tagSpace = (file) => (
        <div style={{marginRight:'10vw', width:'350px'}}>
            {file.tags.map((tag, index) => <Tag color="geekblue" style={{margin:'0 10px', userSelect:'none'}} key={index}>{tag}</Tag>)}
        </div>
    )

    const onClick = (e, file) => {
        e.currentTarget.classList.toggle('selected')
        if(selectedItems.some(_ => _.name == file.name)) {
            setSelectedItems(selectedItems.filter(_ => _.name != file.name))
        }
        else {
            setSelectedItems(oldstate => [...oldstate, file])
        }
        
    }

    const item = (name, num) => (
        <div>
            <Avatar style={{margin:'0 15px', userSelect:'none'}}>{num}</Avatar>
            <Typography.Text className="file-name" style={{fontSize:'16px', verticalAlign:'middle'}}>{name}</Typography.Text>
        </div>
    )

    return (
        <div className="list-container">
            <List
                className="list"
                itemLayout='horizontal'
                dataSource={unionedMatch}
                bordered
                renderItem={(file, i) => (
                    <List.Item
                        className="item"
                        key={i}
                        extra={tagSpace(file)}
                        style={{borderBottom:"0.5px solid #d9d9d9"}}
                        onClick={(e) => onClick(e, file)}
                    >
                        {item(file.name, i+1)}
                    </List.Item>
                )}
            />
        </div>
        
    )
};

export default FileList