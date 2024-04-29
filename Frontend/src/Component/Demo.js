import {React, useState} from 'react'
import '../Css/Demo.css'
const Demo = ({onClose}) => {

    const [profileName, setProfileName] = useState('');
  const [gender, setGender] = useState('');
  const [jobDesignation, setJobDesignation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    // You can access form data: profileName, gender, jobDesignation
    // Then you can reset the form and close the popup
    console.log("Submitted:", { profileName, gender, jobDesignation });
    setProfileName('');
    setGender('');
    setJobDesignation('');
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <span className="close-btn" onClick={onClose}>X  </span>
        <h3 className='heading'> Add User Card</h3>
        <div className='line' ></div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={profileName} onChange={(e) => setProfileName(e.target.value)} />
          </label>


        
          <label>
             Domain:
            <input type="text" value={jobDesignation} onChange={(e) => setJobDesignation(e.target.value)} />
          </label>
   
  <label>
    Gender:
          <div class="custom-select-wrapper">
  <select class="custom-select"  value={gender} onChange={(e) => setGender(e.target.value)}>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>

</div>
</label>



          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );

}

export default Demo