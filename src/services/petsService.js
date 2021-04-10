const url = 'http://localhost:5000/pets';

export const getAll = (category = '') => {
    let petsUrl = url + ((category && category !== 'all') ? `?category=${category}` : '');

    return fetch(petsUrl)
        .then(res => res.json())
        .catch(error => console.log(error));

    // return fetch('https://react-my-pets-a321d-default-rtdb.firebaseio.com', {
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    //             'mode': 'no-cors'
    //         }
    //     })
    //     .then(res => res.json())
    //     .catch(error => console.log(error));
};

export const getOne = (petId) => {
    return fetch(`${url}/${petId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const create = (petName, description, imageURL, category) => {
    let pet = {
        name: petName,
        description,
        imageURL,
        category,
        likes: 0,
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
    })
        .then(getAll())
        .catch(error => {
            console.log(error, 'Error - create pet');
        });
}

export const update = (pet) => {
    return fetch(`${url}/${pet.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
    })
        .catch(error => {
            console.log(error, 'Error - create pet');
        });
}

export const updateLikes = (petId, likes) => {
    return fetch(`${url}/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes })
    })
        .then(res => res.json())
        .catch(error => {
            console.log(error, 'Error - create pet');
        });
}