import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactText, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ContactText>
        {name}: {number}
      </ContactText>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
