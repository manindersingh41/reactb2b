import React, { useEffect,useCallback , useMemo} from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import _debounce from 'lodash/debounce';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
  className: 'filter-wrapper'
})`
&.filter-wrapper{
  width: 95%;
padding: 50px 30px;

background-color: #CFDEF3;
border-radius: 20px;
margin-top: 40px;
}
.searchbar {
  padding: 15px;
    width: 35%;
    margin-bottom: 20px;
    font-size: 17px;
    outline: none;
    border-radius: 10px;
    border: 1px solid gainsboro;
}
  table {
  width: 100%;

  border-collapse: collapse;
}

th {
  background-color: #E0EAFC;
  padding: 15px; 
  text-align: left;
}

tr:nth-child(even) {
  background-color: #E0EAFC;
}

tr:nth-child(odd) {
  background-color: #CFDEF3;
  

}

td {
  padding: 10px;
  

  /* border: 1px solid #ccc; */
}

.pagination-buttons{
  background: linear-gradient(to bottom, #00d2ff, #7157f7);
  padding: 10px 15px;
  font-size: 15px;
  margin: 25px 10px;
  color: #fff;
  border-style: none;
  border-radius: 10px;
}
@media (max-width: 992px) {
 
  .searchbar {
    width: 50%;
    }
}


@media (max-width: 667px) {
  &.filter-wrapper{
    width: 95%;
    padding: 20px !important;
    background-color: #CFDEF3;
    border-radius: 20px;
    margin: 40px 0;

  }
  .searchbar {
    width: 100%;
  }
  .email-th {
    display: none;
  }

  th, td, tr {
    font-size: 13px;
  }

  
}

`
const Filter = () => {

    
    const {users, searchTerm, filteredUsers, setSearchTerm, setFilteredUsers, getAllUsers, currentPage, itemsPerPage, setCurrentPage} = useAppContext();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    useEffect(() => {
      getAllUsers();
  // eslint-disable-next-line
    }, [])
    useEffect(() => {
          debouncedHandleSearch();
    
  // eslint-disable-next-line
      }, [ searchTerm])
      
    const handleChange =(e) => {
              setSearchTerm(e.target.value);
              debouncedHandleSearch()
          }
    
          
          
          const handleSearch = () => {
            if(searchTerm === ''){
              setFilteredUsers(users)
            }
            const filtered = users.filter(user => {
              return user.name.toLowerCase().includes(searchTerm.toLowerCase()) 
              || user.email.toLowerCase().includes(searchTerm.toLowerCase()) 
              || user.role.toLowerCase().includes(searchTerm.toLowerCase()) 
              || user.dateJoined.includes(searchTerm) 
            });
            setFilteredUsers(filtered);
            
            
          }
          
          const debouncedHandleSearch =   _debounce(handleSearch, 400); // Adjust the debounce delay as needed (in milliseconds)
          const memoizedHandleChange = useCallback(handleChange, [ setSearchTerm, debouncedHandleSearch])
    const visibleUsers = useMemo(() => filteredUsers.slice(startIndex, endIndex), [filteredUsers, startIndex, endIndex]);

  return (
    <Wrapper>
        
      <div>
        <input
          type="text"
          className='searchbar'
          placeholder="Search by name , email, role or date joined"
          onChange={memoizedHandleChange}
       
        />
       {
          searchTerm !== '' && (
            <h3>{filteredUsers.length} : Search Results!</h3>
          )
        }
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className='email-th'>Email</th>
            {/* <th>Role</th>
            <th>Date Joined</th> */}
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map((user) => (
            <tr key={user.id} >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td className='email-th'>{user.email}</td>
              {/* <td>{user.role}</td>
              <td>{user.dateJoined}</td> */}
              <td>
                <Link to={`/details/${user.id}`}>View Details</Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
  <button  className='pagination-buttons'
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>
  <span>{currentPage} of {Math.ceil(filteredUsers.length / itemsPerPage)} Pages</span>
  <button className='pagination-buttons'
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={endIndex >= filteredUsers.length}
  >
    Next
  </button>
</div>
    </Wrapper>
  )
}

export default Filter