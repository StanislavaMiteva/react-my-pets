const PetFormView = ({
    onSubmitHandler,
    petName,
    setPetName,
    description,
    setDescription,
    imageURL,
    setImageURL,
    category,
    setCategory,
    formTitle,
}) => {

    return (
        <form onSubmit={onSubmitHandler}>
            <fieldset>
                <legend>{formTitle}</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input
                            type="text"
                            name="name"
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)}
                            id="name"
                            placeholder="Name" />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea
                            rows="4"
                            cols="45"
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="description"
                            placeholder="Description"></textarea>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input
                            type="text"
                            name="imageURL"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                            id="image"
                            placeholder="Image" />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="category">Category</label>
                    <span className="input">
                        <select type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Parrot">Parrot</option>
                            <option value="Reptile">Reptile</option>
                            <option value="Other">Other</option>
                        </select>
                        <span className="actions"></span>
                    </span>
                </p>
                <input className="button" type="submit" value={formTitle} />
            </fieldset>
        </form>
    );
}

export default PetFormView;