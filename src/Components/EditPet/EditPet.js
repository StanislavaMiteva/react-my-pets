import { Component } from 'react';
import PetFormView from '../PetFormView/PetFormView';

import * as petsService from '../../services/petsService';

class EditPet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            imageURL: '',
            category: '',
        }
    }

    componentDidMount() {
        petsService.getOne(this.props.match.params.petId)
        .then(pet => this.setState(pet))        
    }

    onEditSubmitHandler (e) {
        e.preventDefault();
        const petId=this.props.match.params.petId;        
        const updatedPet = {
            ...this.state,
            id: petId,
            name: e.target.name.value,
            description: e.target.description.value,
            imageURL: e.target.imageURL.value,
            category: e.target.category.value, 
        };
                
        petsService.update(updatedPet)
            .then(() => {
                this.props.history.push(`/pets/details/${updatedPet.id}`);
            })
    }

    render() {
        return (
            <section className="detailsMyPet">
                <h3>{this.state.name}</h3>
                <p>Pet counter: <i className="fas fa-heart"></i> {this.state.likes}</p>
                <p className="img"><img src={this.state.imageURL} /></p>
            <PetFormView 
                onSubmitHandler={this.onEditSubmitHandler.bind(this)}
                petName={this.state.name}
                setPetName={(name) => this.setState({name})}
                description={this.state.description}
                setDescription={(description) => this.setState({description})}
                imageURL={this.state.imageURL}
                setImageURL={(imageURL) => this.setState({imageURL})}
                category={this.state.category}
                setCategory={(category) => this.setState({category})}
                formTitle='Edit Pet'
            />
            </section>
        );
    }
}

export default EditPet;