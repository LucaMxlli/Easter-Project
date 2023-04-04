import React from 'react';

import {IPresent} from "../../assets/common/models/IPresent";
import {IChild} from "../../assets/common/models/IChild";
import PresentItem from "../present_overview/present-item/PresentItem";
import ChildItem from "./child-item/ChildItem";
import {Add} from "@mui/icons-material";

interface ChildOverViewProps{
    presents: IPresent[];
    children: IChild[];
    showAdd: (child: IChild) => void;
    showChildrenForm: () => void;
    checkIfPresent: (childId: number, presents: IPresent[]) => IPresent[];
    removePresent: (present: IPresent) => void;
    removeChild: (child: IChild) => void;
}

const ChildOverView: React.FC<ChildOverViewProps> = ({presents,children, showAdd, checkIfPresent, removePresent, showChildrenForm, removeChild}) => {
    return (
        <div>
            {children.map((child, index, ) =>
                <ChildItem child={child} key={index} presents={presents} showAdd={showAdd} checkIfPresent={checkIfPresent} removePresent={removePresent} removeChild={removeChild}/>
            )}
            <div className="button-container">
                <button className="blue-button" onClick={showChildrenForm}>Add</button>
            </div>
        </div>
    );
};

export default ChildOverView;
