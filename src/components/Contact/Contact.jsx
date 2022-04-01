import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'components/redux/contacts/contacts-actions';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
