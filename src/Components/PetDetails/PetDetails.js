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

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}
                <Link to="#"><button className="button"><i className="fas fa-heart"></i>
                    Pet</button>
                </Link>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div class="pet-info">
                <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
                <a href="#"><button className="button">Delete</button></a>
                <i className="fas fa-heart"></i> <span>5</span>
            </div>
        </section>
    );
}

export default PetDetails;