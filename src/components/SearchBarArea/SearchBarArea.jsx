import React, {useState} from 'react';
import s from './SearchBarArea.module.css';

import {Form, FormControl, Button, Dropdown, DropdownButton, Row, Col, InputGroup} from 'react-bootstrap';
// Container,
const SearchBarArea = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("relevance");

    function handleSearch(e) {
        e.preventDefault();
        // Make API call to Google Books API with search term, category, and sort as query parameters
        // ...
    }
    return (
        <div className={s.SearchBarArea_block}> search_line and categories will be here +-sorting
            {/*maybe I need 2 'child' components of this component: searchbar, sorting, categories*/}

            {/*<Form className="d-flex justify-content-center mx-auto">*/}
            {/*    <FormControl type="text" placeholder="Search..." className="mr-2" />*/}
            {/*    <Button variant="outline-light" type="submit">Search</Button>*/}
            {/*</Form>*/}

            <Form className="d-flex justify-content-center custom-responsible-searchBar flex-column">
                {/*<Container>*/}
                {/*<Row></Row>*/}
                    <Col className="d-flex" lg={8} md={8} sm={10} xs={8}>
                <InputGroup className="mb-3" >
                        <FormControl type="text" placeholder="Search..." className="mr-2" style={{minHeight: "44px"}} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <Button variant="outline-light" type="submit" onClick={handleSearch}>Search</Button>
                </InputGroup>
                    </Col>
                    {/*<Row className="d-flex justify-content-center">*/}
                    {/*    <Col lg={8} md={8} sm={10} xs={8}>*/}
                    {/*        <FormControl type="text" placeholder="Search..." className="mr-2" style={{minHeight: "44px"}} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />*/}
                    {/*    </Col>*/}
                    {/*    <Col className="mr-1">*/}
                    {/*        <Button variant="outline-light" type="submit" onClick={handleSearch}>Search</Button>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}

                    <Col className="d-flex justify-content-center" >
                        <label className="me-2">Search categories:</label>
                        <DropdownButton id={s["category-dropdown"]} title={category} className="mr-2 me-4">
                            <Dropdown.Item onClick={() => setCategory("all")}>All</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("art")}>Art</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("biography")}>Biography</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("computers")}>Computers</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("history")}>History</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("medical")}>Medical</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("poetry")}>Poetry</Dropdown.Item>
                        </DropdownButton>
                        <label className="me-2">Sort by:</label>
                        <DropdownButton id={s["sort-dropdown"]} title={sort}>
                            <Dropdown.Item onClick={() => setSort("relevance")}>Relevance</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSort("newest")}>Newest</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                {/*</Container>*/}


            </Form>

            {/*<Row>*/}
            {/*    <Col>*/}
            {/*        <Form.Group>*/}
            {/*            <Form.Control as="select" value={sort} onChange={(e) => setSort(e.target.value)}>*/}
            {/*                <option value="relevance">Relevance</option>*/}
            {/*                <option value="newest">Newest</option>*/}
            {/*            </Form.Control>*/}
            {/*        </Form.Group>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

        </div>
    );
};

export default SearchBarArea;

