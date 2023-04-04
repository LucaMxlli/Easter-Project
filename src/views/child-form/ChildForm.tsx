import React, {FormEvent} from 'react';
import {IChild} from "../../assets/common/models/IChild";
import {IPresent} from "../../assets/common/models/IPresent";
import {presentData} from "../../assets/common/components/present-data";
import {childData} from "../../assets/common/components/child-data";

interface ChildFormProps{
    addChild: (child: IChild) => void;
    getLastIndex: () => number;
}

const ChildForm: React.FC<ChildFormProps> = ({addChild,getLastIndex}) => {


    const submitPresentForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const child = event.currentTarget;
        const childToAdd: IChild = {
            childName: event.currentTarget.tfName.value,
            age: event.currentTarget.tfAge.value,
            id: getLastIndex() + 1,
            presents: []
        }

        addChild(childToAdd);
    }



    return (
        <div>
            <form onSubmit={submitPresentForm}>
                <label htmlFor="tfName">Name:</label>
                <input type="text" id="tfName" name="tfName"/>
                <label htmlFor="tfAge">Age:</label>
                <input type="number" id="tfAg" name="tfAge"/>
                <button>Add</button>
            </form>
        </div>
    );
};

export default ChildForm;
