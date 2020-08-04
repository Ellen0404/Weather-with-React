import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { FormWrapper } from "../styles";

const SearchBar = props => {
    return (
        // just put "inline" to make the button go with 
        //the same line as the input !!! it's a reactstrap fuchere
        <FormWrapper inline
        // onSubmit={props.handleFormSubmit}
        >
            <FormGroup>
                <Label for="searchTerm" hidden>Location Search</Label>
                <Input
                    //3 things we shound have :
                    onChange={props.handleInputChange}
                    value={props.searchTerm}
                    name="searchTerm"

                    type="text"
                    id="searchTerm"
                    placeholder="Denver, CO OR Statue of Liberty OR 80112" />
                <Button onClick={props.handleFormSubmit}>Search</Button>
            </FormGroup>
        </FormWrapper>
    )
}

export default SearchBar;