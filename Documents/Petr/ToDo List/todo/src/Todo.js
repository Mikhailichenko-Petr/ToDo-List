import { useEffect, useState } from "react"

export const Todo=({addTask})=>{
    const[value,setValue]=useState('')
    
    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                type="text"
                onChange={handleChange}
                placeholder="добавить значение"
            />        
            <button>Сохранить</button>
        </form>
    )
}