import React, { useState } from 'react'

const ProductForm = ({addProducts}) => {
    const [formdata, setFormData] = useState({
        title: "",
        price: "",
        category: "",
        description: "",
        image: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addProducts(formdata)
        setFormData({
            title: "",
            price: "",
            category: "",
            description: "",
            image: ""
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formdata.title} name='title' placeholder='Enter title' onChange={handleChange} />
                <input type="number" value={formdata.price} name='price' placeholder='price' onChange={handleChange} />
                <input type="text" value={formdata.category} name='category' placeholder='Enter Category' onChange={handleChange} />
                <input type="text" value={formdata.description} name='description' placeholder='Description' onChange={handleChange} />
                <input type="text" value={formdata.image} name='image' placeholder='Enter image URL' onChange={handleChange} />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default ProductForm