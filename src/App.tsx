import React, {ReactNode, useState} from 'react';
import './App.css';
import {IPresent} from "./assets/common/models/IPresent";
import {presentData} from "./assets/common/components/present-data";
import ChildOverView from "./views/child_overview/ChildOverView";
import {childData} from "./assets/common/components/child-data";
import {IChild} from "./assets/common/models/IChild";
import PresentForm from "./views/present-form/PresentForm";
import ChildForm from "./views/child-form/ChildForm";


export enum AppViews{
    OverView = 1,
    Presentform = 2,
    ChildForm = 3,
}

function App() {

    const handleAddPresent = (child: IChild) => {
        setSelectedView(AppViews.Presentform);
        setChildId(child.id)
    }


    const [presents, setPresents] = useState<IPresent[]>(presentData);
    const [children, setChildren] = useState<IChild[]>(childData);
    const [selectedView, setSelectedView] = useState<AppViews>(AppViews.OverView);
    const [childId, setChildId] = useState<number>(1);

    const [lastChildIndex, setLastChildIndex] = useState<number>(childData.length - 1);

    const updateLastChildIndex = () => {
        setLastChildIndex(lastChildIndex + 1);
        return lastChildIndex + 1;
    };

    const checkIfPresent = (childId: number, presents: IPresent[]) : IPresent[] => {
        return presents.filter(e => e.childId === childId);
    }

    const removePresent = (present: IPresent) => {
        //const updated = //presents.filter(e => e.id !== present.id || e.childId !== present.childId);
      //  const updated = //presents.filter(e => e.id !== present.id && e.childId !== present.childId);
        //const updated = presents.filter(e => !(e.id === present.id && e.childId === present.childId));
       // const updated = presents.filter(p => p.id !== present.id || p.childId !== present.childId);

       // const updated = presents.filter(p => !(p.id === present.id && p.childId === present.childId));
      //  setPresents();
        setPresents(presents.filter((item) => item !== present));
    }

    const removeChild = (child: IChild) => {
        const updatedPresents = presents.filter(e => e.childId != child.id);
        const updated = children.filter(e => e.id != child.id);
        setPresents(updatedPresents);
        setChildren(updated);
    }

    const handleAddChildren = () => {
        setSelectedView(AppViews.ChildForm);
    }


    const addPresent = (present: IPresent) => {
        setPresents([...presents, present]);

        const updatedChildren = children.map(child => {
            if (child.id === present.childId) {
                return {
                    ...child,
                    presents: [...child.presents, present],
                };
            }
            return child;
        });

        setChildren(updatedChildren);
        setSelectedView(AppViews.OverView);
        renderSelectedView();

    }

    const addChild = (child: IChild) => {
        setChildren([...children, child]);
        setSelectedView(AppViews.OverView);
        renderSelectedView();
        console.log(children);
    }


    const renderSelectedView = ():ReactNode => {
        switch (selectedView){
            case AppViews.OverView:
                return (
                    <ChildOverView presents={presents} children={children}  showChildrenForm={handleAddChildren} showAdd={handleAddPresent} checkIfPresent={checkIfPresent} removeChild={removeChild} removePresent={removePresent}></ChildOverView>
                )
            case AppViews.Presentform:
                return (
                    <PresentForm addPresent={addPresent} childId={childId}/>
                )
            case AppViews.ChildForm:
                return(
                    <ChildForm addChild={addChild} getLastIndex={updateLastChildIndex}/>
                )
        }
    }


    return (
        <div className="App">
            <header className="App-header">
                {renderSelectedView()}
            </header>
        </div>
    );
}

export default App;
