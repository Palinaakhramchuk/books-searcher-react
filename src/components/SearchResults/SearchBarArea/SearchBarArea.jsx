import React, {useState} from 'react';
import s from './SearchBarArea.module.css';

import {Form, FormControl, Button, Dropdown, DropdownButton, Row, Col, InputGroup} from 'react-bootstrap';
// Container,
// export let API_KEY;

const API_KEY = `${process.env.REACT_APP_API_KEY_GB}`;

// const API_KEY = 'YourAPIKEY';
const SearchBarArea = ({API_KEY}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("relevance");

    // const [currentPage, setCurrentPage] = useState(1);
    // const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // function handleSearch(e) {
    //     e.preventDefault();
    //     // Make API call to Google Books API with search term, category, and sort as query parameters
    //     // ...
    // }
    function handleSearch(e) {
    //     function handleSearch() {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        if (!API_KEY) {
            setError("API Key is missing.");
            setIsLoading(false);
            return;
        }
        const encodedSearchTerm = encodeURIComponent(searchTerm);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodedSearchTerm}&key=${API_KEY}`)
            .then((response) => {
                if (response.status === 401) {
                    throw new Error("Invalid API key");
                }
                return response.json();
            })
            .then((data) => setSearchResults(data.items))
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    //     fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodedSearchTerm}&key=${API_KEY}`)
    //         .then((response) => response.json())
    //         .then((data) => setSearchResults(data.items))
    //         .catch((error) => console.error(error))
    //         // ;
    //         .finally(() => setIsLoading(false));
    //
    //         // .then((response) => {
    //         //     if (!response.ok) {
    //         //         throw Error(response.statusText);
    //         //     }
    //         //     return response.json();
    //         // })
    //         // .then((data) => setSearchResults(data.items))
    //         // .catch((error) => {
    //         //     setError(error.message);
    //         // })
    //         // .finally(() => {
    //         //     setIsLoading(false);
    //         // });
    }
//last?:
    // function handleSearch(e) {
    //     e.preventDefault();
    //     setLoading(true);
    //     const encodedSearchTerm = encodeURIComponent(searchTerm);
    //     fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodedSearchTerm}&key=${API_KEY}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setSearchResults(data.items);
    //             setLoading(false);
    //         })
    //         .catch((error) => console.error(error));
    // }

    // function loadMore() {
    //     setLoading(true);
    //     setCurrentPage(currentPage + 1);
    //     fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodedSearchTerm}&key=${API_KEY}&startIndex=${currentPage * 30}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setSearchResults([...searchResults, ...data.items]);
    //             setLoading(false);
    //         })
    //         .catch((error) => console.error(error));
    // }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className={s.SearchBarArea_block}> search_line and categories will be here +-sorting
            {/*maybe I need 2 'child' components of this component: searchbar, sorting, categories*/}

            {/*<Form className="d-flex justify-content-center mx-auto">*/}
            {/*    <FormControl type="text" placeholder="Search..." className="mr-2" />*/}
            {/*    <Button variant="outline-light" type="submit">Search</Button>*/}
            {/*</Form>*/}

            <Form className="d-flex justify-content-center align-items-center custom-responsible-searchBar flex-column" onSubmit={handleSearch}>
                {/*<Container>*/}
                {/*<Row></Row>*/}
                    <Col className="d-flex mb-3" lg={8} md={8} sm={10} xs={11}>
                <InputGroup className="" >
                        <FormControl type="text" placeholder="Search..." className="mr-2" style={{minHeight: "44px"}} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onFocus={handleSearch} onKeyPress={handleKeyPress}/>
                        {/*<FormControl type="text" placeholder="Search..." className="mr-2" style={{minHeight: "44px"}} value={searchTerm} onChange={props.handleSearch} />*/}
                        {/*<Button variant="outline-light" type="submit" onClick={handleSearch}>Search</Button>*/}
                        <Button variant="outline-light" type="submit">Search</Button>
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

                    <Col className="d-flex justify-content-center align-items-center mb-3 " xs={11}>
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

            {/*<ul>*/}
            {/*    {searchResults.map((book) => (*/}
            {/*        <li key={book.id}>*/}
            {/*            <h2>{book.volumeInfo.title}</h2>*/}
            {/*            <p>{book.volumeInfo.description}</p>*/}
            {/*        </li>*/}
            {/*    }*/}
            {/*</ul>        */}
            {/*<br/>*/}
        </div>

    );
};

export default SearchBarArea;

