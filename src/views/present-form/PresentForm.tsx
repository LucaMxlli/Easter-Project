import React, {FormEvent} from 'react';
import {IPresent} from "../../assets/common/models/IPresent";
import {presentData} from "../../assets/common/components/present-data";

interface PresentFormProps {
    addPresent: (present: IPresent) => void;
    childId: number;
}

const PresentForm: React.FC<PresentFormProps> = ({addPresent, childId}) => {

    const lastPresentId = presentData[presentData.length - 1].id;


    const submitPresentForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const present = event.currentTarget;
        const presentToAdd: IPresent = {
            name: event.currentTarget.tfName.value,
            price: event.currentTarget.tfPrice.value,
            id: lastPresentId + 1,
            childId: childId,
        }

        console.log(presentToAdd);
        addPresent(presentToAdd);
    }

    return (
        <div>
            <form onSubmit={submitPresentForm}>
                <label htmlFor="tfName">Name:</label>
                <input type="text" id="tfName" name="tfName"/>

                <label htmlFor="tfPrice">Preis:</label>
                <input type="number" id="tfPrice" name="tfPrice"/>
                <button>Add</button>
            </form>
        </div>
    );
};

export default PresentForm;
