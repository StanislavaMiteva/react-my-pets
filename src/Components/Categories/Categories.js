import { Component } from 'react';

import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/pets')
        .then(resp => resp.json())
        .then(data => this.setState({pets: data}))        
        .catch(error => console.log(error));

        console.log(this.state.pets)
    }
    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    <li className="otherPet">
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p className="description">This is not my cat Gosho</p>
                        <div className="pet-info">
                            <a href="#"><button className="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button className="button">Details</button></a>
                            <i class="fas fa-heart"></i> <span> 2</span>
                        </div>
                    </li>
                    <li class="otherPet">
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p class="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                            <i class="fas fa-heart"></i> <span> 2</span>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Categories;