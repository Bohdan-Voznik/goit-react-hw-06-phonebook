import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from 'components/redux/contacts/contacts-actions';
import { getFilter } from 'components/redux/contacts/contacts-selector';

export const Filter = () => {
  const tag = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Filter"
        required
        value={tag}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};
