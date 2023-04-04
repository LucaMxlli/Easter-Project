import React from 'react';
import {IChild} from "../../../assets/common/models/IChild";
import {IPresent} from "../../../assets/common/models/IPresent";
import PresentItem from "../../present_overview/present-item/PresentItem";
import {Add, Delete} from "@mui/icons-material";

interface ChildItemProps {
    child: IChild;
    presents: IPresent[];
    showAdd: (child: IChild) => void;
    checkIfPresent: (childId: number, presents: IPresent[]) => IPresent[];
    removePresent: (present: IPresent) => void;
    removeChild: (child: IChild) => void;
}


const ChildItem: React.FC<ChildItemProps> = ({child, presents, showAdd, checkIfPresent, removePresent, removeChild}) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>
                        <Delete onClick={(e) => {
                            e.stopPropagation();
                            child && removeChild(child);
                        }}/>
                    </th>
                    <th><h1>{child.childName}</h1></th>
                    <th>
                        <Add onClick={(e) => {
                            e.stopPropagation();
                            child && showAdd(child);
                        }}/>
                    </th>
                </tr>
                <tr>
                    <th>Geschenk</th>
                    <th>Preis</th>
                </tr>
                </thead>
                <tbody>
                {checkIfPresent(child.id, presents).map((present, index) => (
                    <PresentItem key={index} present={present} removePresent={removePresent}/>
                ))}
                </tbody>
            </table>
        </div>

    );
};

export default ChildItem;
