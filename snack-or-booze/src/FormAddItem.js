import React, { useState } from "react";
import "./FormAddItem.css";
import SnackOrBoozeApi from "./Api";


/**
 * 
 * @param {categories} categories can be drinks or snacks, items is the array of the category passed 
 * @returns 
 */
function FormAddItem({ categories }) {

    const INITIAL_STATE = { id: "", name: "", description: "", recipe: "", serve: "", category: "drinks" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    async function addItem() {
        console.log(formData.category);

        let newItem = {
          "id": (formData.id).replace(/\s+/g, '-'),
          "name": formData.name,
          "description": formData.description,
          "recipe": formData.recipe,
          "serve": formData.serve
        }
    
        await SnackOrBoozeApi.setItem(formData.category, newItem);
      }


        /**  clear form. */
        const handleSubmit = evt => {
            
            evt.preventDefault();
            console.log(formData)
            addItem();
            setFormData(INITIAL_STATE);
        };

    /** Update local state w/curr state of input elem */

    const handleChange = evt => {
        
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="category">Category:</label>

            <select id="category" name="category" value={formData.category} onChange={handleChange}>
                <option value="drinks">drinks</option>
                <option value="snacks">snacks</option>
            </select>

            <label htmlFor="id">Id:</label>
            <input
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
            />

            <label htmlFor="name">Name:</label>
            <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="description">Description:</label>
            <input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />

            <label htmlFor="recipe">Recipe:</label>
            <input
                id="recipe"
                name="recipe"
                value={formData.recipe}
                onChange={handleChange}
            />
            <label htmlFor="serve">Serve:</label>
            <input
                id="serve"
                name="serve"
                value={formData.serve}
                onChange={handleChange}
            />
            <button>Add a new Item!</button>
        </form>
    );
}

//<Link to={`/snacks/${snack.id}`} key={snack.id}>

export default FormAddItem;
