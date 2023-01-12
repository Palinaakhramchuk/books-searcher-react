import React, {useState} from 'react';
import s from './SearchBarArea.module.css';

import { Form, FormControl, Button, Dropdown, DropdownButton,  Container, Row, Col } from 'react-bootstrap';

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

            <Form className="d-flex justify-content-center custom-responsible-searchBar" style={{minHeight: "44px"}}>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg={8} md={8} sm={10} xs={8}>
                            <FormControl type="text" placeholder="Search..." className="mr-2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <Button variant="outline-light" type="submit" onClick={handleSearch}>Search</Button>
                        </Col>
                    </Row>
                    <Row className="d-inline" >
                        <DropdownButton id={s["category-dropdown"]} title={category} className={`$["mr-2"] ${s.custom_dropdown}`}>
                            <Dropdown.Item onClick={() => setCategory("all")}>All</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("art")}>Art</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("biography")}>Biography</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("computers")}>Computers</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("history")}>History</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("medical")}>Medical</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory("poetry")}>Poetry</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id={s["sort-dropdown"]} title={sort}>
                            <Dropdown.Item onClick={() => setSort("relevance")}>Relevance</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSort("newest")}>Newest</Dropdown.Item>
                        </DropdownButton>
                    </Row>
                </Container>


            </Form>

        </div>
    );
};

export default SearchBarArea;

