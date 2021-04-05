import { useState, useEffect } from 'react';
import * as petsService from '../../services/petsService'


const EditPetDetails = ({
    match,
    history
}) => {
    const [pet, setPet] = useState({});

    useEffect(() => {
        petsService.getOne(match.params.petId)
            .then(res => setPet(res))
    }, [])

    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();
        
        const updatedPet = {
            id: pet.id,
            name: pet.name,            
            description: e.target.description.value,
            imageURL: pet.imageURL,
            category: pet.category,
            likes: pet.likes,
        }

        petsService.update(updatedPet)
        .then(()=> {
            history.push('/');
        } )
    }
    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img"><img
                src={pet.imageURL} /></p>
            <form onSubmit={onDescriptionSaveSubmit}>
                <textarea type="text" name="description" defaultValue={pet.description}></textarea>
                <button className="button"> Save</button>
            </form>
        </section>
    );
}

export default EditPetDetails;