import React, {useContext} from 'react';
import Row from "./Row";
import {FilterArrayContext} from "../../services/Context";

const Field = (props) => {
    const {filterArray, setFilterArray} = useContext(FilterArrayContext);
    let filterRows = props.fieldArray.map((item, index) =>
        <Row
            key={index}
            categoryValue={item}
            // someChecked={someChecked}
        />
    )

    return (
        <div className="filter-field">
            <h2>{props.fieldName}</h2>
            {filterRows}
        </div>
    );
};

export default Field;