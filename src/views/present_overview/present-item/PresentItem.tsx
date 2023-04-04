import React from 'react';
import {IPresent} from "../../../assets/common/models/IPresent";
import {Delete} from "@mui/icons-material";

interface IPresentItemProps{
    present: IPresent,
    removePresent: (present: IPresent) => void;
}

const PresentItem: React.FC<IPresentItemProps> = ({present, removePresent}) => {
    return (
        <tr>
            <td>
                {present.name}
            </td>
            <th>
                {present.price}
            </th>
            <th>
                <Delete onClick={(e) => {

                    e.stopPropagation();
                    present && removePresent(present);
                }}/>
            </th>
        </tr>
    );
};

export default PresentItem;
