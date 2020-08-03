import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FormWrapper } from "../styles";

const SearchBar = props => {
    return (
        // just put "inline" to make the button go with 
        //the same line as the input !!! it's a reactstrap fuchere
        <FormWrapper inline>
            <FormGroup>
                <Label for="searchTerm" hidden>Location Search</Label>
                <Input type="text" name="searchTerm" id="searchTerm" placeholder="Denver, CO OR Statue of Liberty OR 80112" />
                <Button>Search</Button>
            </FormGroup>
        </FormWrapper>
    )
}

export default SearchBar;