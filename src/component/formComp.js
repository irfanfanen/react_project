import React, { useState } from 'react';

const FormComp = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');

        const { username, password } = formData;

        if(username.trim() === '' || password.trim() === '') {
            alert('Username dan password harus diisi.');
        }else{
            alert(`Welcome, ${username}!`);
        }
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
          });
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                /></label><br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /></label><br />
            <button type="submit">Submit</button>
        </form>
    );
}

export { FormComp };
