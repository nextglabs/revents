import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Button } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
};

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      }
      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }
  };
  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };
  render() {
    const { handleCancel } = this.props;
    const { event } = this.state;
    return (
      <div>
        <Segment>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input
                name="title"
                value={event.title}
                onChange={this.onInputChange}
                placeholder="Event Title"
              />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input
                value={event.date}
                name="date"
                type="date"
                onChange={this.onInputChange}
                placeholder="Event Date"
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                value={event.city}
                name="city"
                onChange={this.onInputChange}
                placeholder="City event is taking place"
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                value={event.venue}
                name="venue"
                onChange={this.onInputChange}
                placeholder="Enter the Venue of the event"
              />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                value={event.hostedBy}
                name="hostedBy"
                onChange={this.onInputChange}
                placeholder="Enter the name of person hosting"
              />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button type="button" onClick={this.props.history.goBack}>
              Cancel
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(EventForm);
