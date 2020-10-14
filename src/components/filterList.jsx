import React from 'react'

export default function filterList({categories, selected, filterPerCategory}) {
    return (
        <select className="form-control select" multiple defaultValue={[selected]} onChange={filterPerCategory}>
            {
                categories.map((item, index) => {
                    return <option key={index} value={item} > {item} </option>
                })
            }
        </select>
    )
}
