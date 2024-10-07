import { useState } from "react";

export default function MyForm(){

    const [formdata, setFormdata] = useState({
        name: '',
        email: "",
        age: "",
        gender: "",
        hobbies: [],
        country: '',
        bio: ""
    })

    function handleChange(e){
        const {name, value, type, checked} = e.target
        if (type === "checkbox") {
            setFormdata((prevData) => ({
                ...prevData, hobbies: checked 
                ? [...prevData.hobbies, value]
                : prevData.hobbies.filter((hobby) => hobby !== value)
            }))
        } else {
            setFormdata((prevData) => ({
                ...prevData, [name]: value
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data Submitted:", formdata)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input 
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email: 
                <input 
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Age: 
                <input 
                type="number"
                name="age"
                value={formdata.age}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Gender: 
                <input 
                type="radio"
                name="gender"
                value="male"
                checked={formdata.gender === "male"}
                onChange={handleChange}
                /> Male
                <input 
                type="radio"
                name="gender"
                value="female"
                checked={formdata.gender === "female"}
                onChange={handleChange}
                /> Female
            </label>
            <br />
            <label>
                Hobbies: 
                <input 
                type="checkbox"
                name="hobbies"
                value="reading"
                checked={formdata.hobbies.includes("reading")}
                onChange={handleChange}
                /> Reading
                <input 
                type="checkbox"
                name="hobbies"
                value="traveling"
                checked={formdata.hobbies.includes("traveling")}
                onChange={handleChange}
                /> Traveling
                <input 
                type="checkbox"
                name="hobbies"
                value="sports"
                checked={formdata.hobbies.includes("sports")}
                onChange={handleChange}
                /> Sports
            </label>
            <br />
            <label>
                Country:
                <select 
                name="country"
                value={formdata.country}
                onChange={handleChange}
                >
                    <option value="">Select your country</option>
                    <option value="saudi">Saudi Arabia</option>
                    <option value="egypt">Egypt</option>
                    <option value="usa">USA</option>
                </select>
            </label>
            <br />
            <label>
                Bio:
                <textarea
                name="bio"
                value={formdata.bio}
                onChange={handleChange}
                ></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}