import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';

export default class AddNote extends Component {
  state = {
    open: false,
    title: '',
    description: '',
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, title, description } = this.state;
    const { onCreateNote } = this.props;

    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <form
            action=""
            onSubmit={event => onCreateNote(event, {
              title,
              description,
              id: `${new Date().getMilliseconds()}`,
            })
            }
          >
            <div className="form-group">
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={(event) => {
                    this.setState({ title: event.target.value });
                  }}
                  placeholder="Note title"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="description">
                Description
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={(event) => {
                    this.setState({ description: event.target.value });
                  }}
                  placeholder="Note description"
                />
              </label>
            </div>
            <div className="form-row">
              <div className="col">
                <button
                  className="btn btn-info"
                  type="submit"
                  onClick={this.onCloseModal}
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </Modal>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onOpenModal}
        >
          Add Note
        </button>
      </div>
    );
  }
}

AddNote.defaultProps = {
  onCreateNote: () => {},
};

AddNote.propTypes = {
  onCreateNote: PropTypes.func,
};
