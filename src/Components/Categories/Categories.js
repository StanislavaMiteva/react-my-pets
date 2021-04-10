import { Component } from 'react';
//import firebase from '../../utils/firebase';

import * as petsService from '../../services/petsService';

import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import PetCard from "../PetCard/PetCard";

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all',
        }
    }

    componentDidMount() {
        petsService.getAll()
            .then(res => this.setState({ pets: res }));

        // const petsRef = firebase.database().ref('pets');
        // petsRef.on('value', (snapshot) => {
        //     let pets=snapshot.val();
        //     let newState=[];
        //     for (let pet in pets) {
        //         newState.push({
        //             id: pets[pet].id,
        //             name: pets[pet].name,
        //             description:pets[pet].description,
        //             imageURL: pets[pet].imageURL,
        //             likes: pets[pet].likes,
        //             category: pets[pet].category,
        //         });
        //     }
        //     this.setState({pets: newState})
        // });

    };

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;

        if (prevProps.match.params.category === category) {
            return;
        }

        petsService.getAll(category)
            .then(res => {
                this.setState({ pets: res, currentCategory: category })
            })
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(pet =>
                        <PetCard key={pet.id} {...pet} />
                    )}
                </ul>
            </section>
        );
    }
}

export default Categories;