import React, {useState, useContext, useEffect} from 'react';
import projectData from '../store/projectData'
import {Context} from '../store/store'
import {useWindowDimensions} from '../utilities'

export default function Filters() {
    const [state, dispatch] = useContext(Context)

    const updateFilters = (e) => {
        const tagsArray = state.activeTags
        let updatedTags = []

        if(e.target.id.includes('box')){
            const selectedTag = e.target.name
            if(tagsArray.includes(selectedTag)){
                updatedTags = tagsArray.filter(tag => tag != selectedTag)
            }
            else{
                updatedTags = [...tagsArray, selectedTag]
            }
        }
        else{
            const selectedTag = e.target[e.target.selectedIndex].value
            selectedTag != "all" ? updatedTags = [selectedTag] : updatedTags = []
        }
        dispatch ({type: 'UPDATE_TAGS', payload: updatedTags})
    }

    if(useWindowDimensions().width < 768){
        return(
            <select name="categories" className="dropdown-filters" id="categories" onChange={(e) => updateFilters(e)}>
                <option value="all">All</option>
                {projectData.categories.map((category, i) => {
                    const key = `dropdown--${i}`

                    return(
                        <option key={key} className="dropdown-filters__option" value={category.tag}>{category.name}</option>
                    )
                })}
            </select>
        )
        
    }
    else{
        return(
            <div className="checkbox-filters">
                {projectData.categories.map((category, i) => {
                    const key = `checkbox--${i}`
        
                    return(
                        <label key={key} className="checkbox-filters__category"> <input onClick={(e) => updateFilters(e)} className="checkbox-filters__checkbox" id={`box-${category.tag}`} name={category.tag} type="checkbox" /> {category.name}</label>
                    )
                })}
            </div>
        )
    }
}