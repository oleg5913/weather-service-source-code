import React, { FC, SyntheticEvent, useState } from 'react'
import './Modal.css'

interface propsInterface {
    getWeatherInCity: any,
    toggleModal: any
}

const Modal: FC<propsInterface> = (props) => {
    const [value, setValue] = useState<string>("")
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const handleSubmit = () => {
        props.getWeatherInCity(value)
        props.toggleModal()
    }
    return (
        <div className="modalWrap">
            <div className="modal">
                <div className="modalHeader">
                    <h4>Добавление города</h4>
                    <span onClick={() => props.toggleModal()}>&times;</span>
                </div>
                <input
                    type="text"
                    onChange={handleChange}
                    value={value}
                />
                <button onClick={() => handleSubmit()}>Добавить</button>
            </div>
        </div>

    )
}
export default Modal