import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Proptypes from 'prop-types';

export default class Note extends Component {
  constructor(props) {
    super(props);
    const { title, description } = this.props;
    this.state = {
      open: false,
      title,
      description,
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { onDeleteNote, onUpdateNote, _id } = this.props;
    const { title, description } = this.state;

    const { open } = this.state;
    return (
      <div className="col-12 col-sm-4 col-md-3">
        <div className="card mt-2">
          <div className="card-body">
            <div className="card-title">
              <h3>{title}</h3>
            </div>
            <div className="card-text">
              <p>{description}</p>
            </div>
          </div>
          <button
            onClick={this.onOpenModal}
            type="button"
            className="btn btn-primary"
          >
            Edit note
          </button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <form action="" onSubmit={event => onUpdateNote(event, { _id, title, description })}>
              <div className="form-group">
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={event => this.setState({ title: event.target.value })
                    }
                    placeholder="Here goes the note title"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="title">
                  Description
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    value={description}
                    onChange={event => this.setState({ description: event.target.value })
                    }
                    placeholder="Here goes the note title"
                  />
                </label>
              </div>
              <div className="form-row">
                <div className="col-6">
                  <button
                    type="submit"
                    className="btn btn-info"
                    onClick={this.onCloseModal}
                  >
                    Save
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    onClick={() => onDeleteNote(_id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  title: Proptypes.string,
  description: Proptypes.string,
  _id: Proptypes.string,
  onDeleteNote: Proptypes.func,
  onUpdateNote: Proptypes.func,
};

Note.defaultProps = {
  title: '',
  description: '',
  _id: '',
  onDeleteNote: () => {},
  onUpdateNote: () => {},
};
