import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import Category from './Category.jsx';
import Location from './Location.jsx';
import Cost from './Cost.jsx';
import PrivateOrPublic from './PrivateOrPublic.jsx';
import NumberOfPeople from './NumberOfPeople.jsx';
import TimeOfDay from './TimeOfDay.jsx';

const Filter = ({
  handleStateChange,
  filterCityValue,
  filterStateValue,
  filterCategoryValue,
  filterNumOfPeopleValues,
  filterCostValue,
  filterPublicValue,
  filterPrivateValue,
  filterToDValue,
  filterEvents,
  handleFilterSubmit,
  filterDropdownCategories,
  loginDisplayName,
  states,
}) => (
  <div className="filter-container">
    <Accordion>
      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="0"> */}
          Location
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="0"> */}
        <Card.Body>
          <Location
            states={states}
            filterEvents={filterEvents}
            handleStateChange={handleStateChange}
            filterCityValue={filterCityValue}
            filterStateValue={filterStateValue}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>

      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="1"> */}
          Category
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="1"> */}
        <Card.Body>
          <Category
            filterEvents={filterEvents}
            handleStateChange={handleStateChange}
            filterCategoryValue={filterCategoryValue}
            filterDropdownCategories={filterDropdownCategories}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>
      {loginDisplayName !== 'Guest' && (
      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="2"> */}
          Number Attending
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="2"> */}
        <Card.Body>
          <NumberOfPeople
            filterEvents={filterEvents}
            handleStateChange={handleStateChange}
            filterNumOfPeopleValues={filterNumOfPeopleValues}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>
      )}


      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="3"> */}
          Cost
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="3"> */}
        <Card.Body>
          <Cost
            filterEvents={filterEvents}
            handleStateChange={handleStateChange}
            filterCostValue={filterCostValue}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>

      {loginDisplayName !== 'Guest' && (
      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="4"> */}
          Public/Private
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="4"> */}
        <Card.Body>
          <PrivateOrPublic
            filterEvents={filterEvents}
            handleStateChange={handleStateChange}
            filterPublicValue={filterPublicValue}
            filterPrivateValue={filterPrivateValue}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>
      )}


      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="5"> */}
          Time
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="5"> */}
        <Card.Body>
          <TimeOfDay
            filterEvents={filterEvents}
            handleStateChange={handleStateChange}
            filterToDValue={filterToDValue}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>

      {/* <Button onClick={() => handleFilterSubmit()}>Submit Filters</Button> */}

    </Accordion>
  </div>
);

export default Filter;
