import { Component } from 'react';
import PetFormView from '../PetFormView/PetFormView';

import * as petsService from '../../services/petsService';

class CreatePetNew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            imageURL: '',
            category: '',
            likes: 0,
        }
    }

    onCreateSubmitHandler (e) {
        e.preventDefault();
               
        const { name, description, imageURL, category } = e.target;
        petsService.create(name.value, description.value, imageURL.value, category.value)
            .then(() => {
                this.props.history.push('/');
            });
    }

    render() {
        return (
            <section className="create">
                <PetFormView
                    onSubmitHandler={this.onCreateSubmitHandler.bind(this)}
                    petName={this.state.name}
                    setPetName={(name) => this.setState({ name })}
                    description={this.state.description}
                    setDescription={(description) => this.setState({ description })}
                    imageURL={this.state.imageURL}
                    setImageURL={(imageURL) => this.setState({ imageURL })}
                    category={this.state.category}
                    setCategory={(category) => this.setState({ category })}
                    formTitle='Add Pet'
                />
            </section>
        );
    }
}

export default CreatePetNew;