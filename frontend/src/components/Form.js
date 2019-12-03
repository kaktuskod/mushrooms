import React from 'react';
import { withFormik } from 'formik';

const buildMushroomInputs = (props) => {
    const mystyle = {
        color: "white",
        backgroundColor: "#336584",
        padding: "10px",
        width: "100px",
        fontSize: "9pt",
        height: "20px",
      };
    const {
        handleChange
    } = props

    const mushroomsAttributes = {
        "cap-shape": ["CONVEX", "BELL", "CONICAL", "FLAT", "KNOBBED", "SUNKEN"],
        "cap-surface": ["FIBROUS", "GROOVES", "SCALY", "SMOOTH"],
        "cap-color": ["BROWN", "BUFF", "CINNAMON", "GRAY", "GREEN", "PINK", "PURPLE", "RED", "WHITE", "YELLOW"],
        "bruises": ["BRUISES", "NO"],
        "odor": ["ALMOND", "ANISE", "CREOSOTE", "FISHY", "FOUL", "MUSTY", "NONE", "PUNGENT", "SPICY"],
        "gill-attachment": ["ATTACHED", "FREE"],
        "gill-spacing": ["CLOSE", "CROWDED"],
        "gill-size": ["BROAD", "FREE"],
        "stalk-shape": ["ENLARGING","TEMPARING"],
        "stalk-root": ["?", "BULBOUS","CLUB","EQUAL","ROOTED"],
        "stalk-surface-above-ring": ["FIBROUS", "SCALY","SILKY","SMOOTH"],
        "stalk-color-above-ring": ["BUFF", "CINNAMON","GRAY","ORANGE","PINK","RED","WHITE","YELLOW"],
        "stalk-color-below-ring": ["BROWN","BUFF", "CINNAMON","GRAY","ORANGE","PINK","RED","WHITE","YELLOW"],
        "veil-type": ["PARTIAL",],
        "veil-color": ["BROWN", "ORANGE","WHITE","YELLOW"],
        "ring-number": ["BROAD", "FREE"],
        "stalk-": ["NONE", "ONE","TWO"],
        "ring-type": ["EVANESCENT", "FLARING","LARGE","NONE","PENDANT"],
        "sport-print-color": ["BLACK", "BROWN","BUFF","CHOCOLATE","GREEN","ORANGE","PURPLE","WHITE","YELLOW"],
        "population": ["ABUNDANT", "CLUSTERED","NUMEROUS","SCATTERED","SEVERAL","SOLITARY"],
        "habitat": ["GRASSES", "LEAVES","MEADOWS","PATHS","URBAN","WASTE","WOODS"],
    }

    let selectInputs = []

    for (const mushroomAttribute in mushroomsAttributes) {
        const select = (
            <select
                name={mushroomAttribute}
                onChange={handleChange}
                key={mushroomAttribute}
                style ={mystyle}
            >
                {mushroomsAttributes[mushroomAttribute].map((item, key) => <option value={item} key={key}> {item} </option>)}
            </select>)

        selectInputs.push(select)
    }

    return selectInputs
}

const Form = props => {
    const {
        handleSubmit,
        handleChange,
    } = props;

    const mushroomInputs = buildMushroomInputs(props)

    return (
        <form onSubmit={handleSubmit}>
            <h1>MUSHROOM</h1>
            {mushroomInputs.map((input) => input)}
            <br></br>
            <button type="submit">Submit</button>
        </form>
    )
}

const EnhancedForm = withFormik({
    mapPropsToValues: () => ({}),
    handleSubmit: (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    },

    displayName: 'BasicForm',
})(Form)

export default EnhancedForm;