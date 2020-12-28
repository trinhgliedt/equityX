import React, {useState} from 'react';


const ContactForm = ({ displayContactForm }) => { 
    const [companyEmail, setCompanyEmail] = useState("");
    const [typeOfOrg, setTypeOfOrg] = useState("");
    const [orgLocation, setOrgLocation] = useState("");
    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);

    const handleCancel=() => {
        displayContactForm( false )
    }
    const handleSubmit= (event) => {
        event.preventDefault();
        let sError ={};
        let errorText = {
            blank: 'This field is required',
            notSelected: 'Please make a selection',
            invalid: 'Please enter a valid value',
        };
        // validate:
        if (companyEmail.length === 0) sError.companyEmail = errorText.blank;
        if (typeOfOrg.length === 0) sError.typeOfOrg = errorText.blank;
        if (orgLocation.length === 0) sError.orgLocation = errorText.notSelected;
        setError(sError);
        // console.log("orgLocation: ", orgLocation);
        if (Object.keys(sError).length === 0) {
            setSuccess(true);
            setTimeout(function() {

                displayContactForm( false );
            }, 2500);
        }
    }
    console.log("error: ", error);
    return (
        <div className="rowFlex rowCenterContent">
            <form className="row">
                <div className="rowFlex">
                    <input placeholder="Company email" type="email" 
                    name="companyEmail" 
                    required
                    error={error.companyEmail}
                    onChange={(event) => {
                        setCompanyEmail(event.target.value);
                    }}
                    />
                </div>
                {error.companyEmail &&
                    <div className="redFont">{error.companyEmail}
                    </div> }
                <div className="rowFlex">
                    <input placeholder="Type of organization"  type="text" name="organizationType" 
                    error={error.typeOfOrg}
                    onChange={(event) => {
                        setTypeOfOrg(event.target.value);
                    }}
                    />
                </div>
                {error.typeOfOrg &&
                    <div className="redFont">{error.typeOfOrg}
                    </div> }
                <div className="rowFlex rowSpaceBetweenContent">
                    <label >Organization location: </label>
                    <select name="states" required
                    error={error.orgLocation}
                    defaultValue={0}
                    onChange={(event) => {
                        setOrgLocation(event.target.value);
                    }}
                    >
                        <option value="0" disabled>Please select</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                {error.orgLocation &&
                    <div className="redFont">{error.orgLocation}
                    </div> }
                <div className="rowFlex rowCenterContent">
                    <button className="demoButton"
                    onClick={(event) => handleSubmit(event)}
                    >Request a Demo</button>
                    <button type="reset"
                    onClick={() => handleCancel()}
                    className="cancelButton">Cancel</button>
                </div>
                {success &&
                    <div className="successMsg">Thanks for your request! A member of our team will reach out to you soon!
                    </div> }
            </form>
        </div>
    );

};

export default ContactForm;