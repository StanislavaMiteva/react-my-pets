import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as petsSerice from '../../services/petsService';

const PetDetails = ({
    match
}) => {
    let [pet, setPet] = useState({});

    useEffect(() => {
        petsSerice.getOne(match.params.petId)
            .then(res => setPet(res))
    }, []);

    const onPetButtonClickHandler = () => {
        let updatedLikes = Number(pet.likes) + 1;

        petsSerice.updateLikes(pet.id, updatedLikes)
            .then(updatedPet => setPet(updatedPet))
    }

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}
                <button className="button" onClick={onPetButtonClickHandler}><i className="fas fa-heart"></i>
                    Pet
                </button>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div class="pet-info">
                <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
                <Link to={`/pets/${pet.id}/edit`}><button className="button">Edit New</button></Link>
                <a href="#"><button className="button">Delete</button></a>
                <i className="fas fa-heart"></i> <span>{pet.likes}</span>
            </div>
        </section>
    );
}

export default PetDetails;