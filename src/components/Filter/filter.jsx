import PropTypes from 'prop-types'
export const Filter = ({ value, onChange }) => (
    <>
         <label htmlFor="filter">find contacts by name</label>
  <input
    type="text"
    placeholder="Search contacts"
    value={value}
    onChange={onChange}
      id='filter'
  />
    </>
   
);

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}