import { useState, useEffect } from 'react';
import * as petsService from '../../services/petsService'

import InputError from '../Shared/InputError/InputError';


const EditPetDetails = ({
    match,
    history
}) => {
    const [pet, setPet] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        petsService.getOne(match.params.petId)
            .then(res => setPet(res))
    }, [])

    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();

        const updatedPet = {...pet, description: e.target.description.value};

        petsService.update(updatedPet)
            .then(() => {
                history.push(`/pets/details/${updatedPet.id}`);
                //return; ??
            })
    }

    const onDescriptionChangeHandler = (e) => {
        if (e.target.value.length < 10) {
            setErrorMessage('Description too short.')
        }
        else {
            setErrorMessage('');
        }
    }

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img"><img src={pet.imageURL} /></p>
            <form onSubmit={onDescriptionSaveSubmit}>
                <textarea
                    type="text"
                    name="description"
                    defaultValue={pet.description}
                    onBlur={onDescriptionChangeHandler}
                >
                </textarea>
                <InputError>{errorMessage}</InputError>
                <button className="button"> Save</button>
            </form>
        </section>
    );
}

export default EditPetDetails;