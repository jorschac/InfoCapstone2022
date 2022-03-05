import React from 'react'
import {AutoComplete, Input} from 'antd'

const {Search} = Input

export default function SearchBar(props:any) {
    const {list,width} = props
    return(
        <div style={{width: '100%'}} className='barInner'>
            <AutoComplete 
                onSelect={redirect}
                style={{width: width, borderRadius: '25px'}}
                dataSource={list}
            >
                <Search 
                    placeholder='Search for course titles e.g MATH 124'
                    size='large'
                />
            </AutoComplete>
        </div>
    );
}

function redirect(val:any, obj?:Object):void {
    console.log('aloha! ', val)
}
