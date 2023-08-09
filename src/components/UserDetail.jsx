import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import styled from 'styled-components'
import Avatar from 'react-avatar';


const Wrapper = styled.div.attrs({
  className: 'details'
})`
&.details {
  background-color: #CFDEF3;
  /* border: 1px solid red; */
  padding: 50px;
  margin-top: 50px;
  border-radius: 20px;

}
  .details-wrapper {
    display: flex;
  }
 
  .user-profilepic {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .user-info {
    padding: 30px;
  }

  .user-info p{
    font-size: 20px;
  }

  @media (max-width: 992px) {

  .details-wrapper {
    display: block;
  }
 
  }

  @media (max-width: 667px) {

    &.details {
        background-color: #CFDEF3;
        padding: 20px;
        margin-top: 50px;
        border-radius: 20px;

}

  .user-profilepic {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .user-info {
    padding: 10px;
  }

  .user-info p{
    font-size: 13px;
  }
  }

`
const UserDetails = () => {

  const {user, getUser} = useAppContext();
  console.log(user)
  const { id } = useParams();


  React.useEffect(() => {
   getUser(id);
   // eslint-disable-next-line
  }, [ id])
  return (
    <Wrapper>
      <div className="details-wrapper">
        <div className="user-profilepic">
        <Avatar name={user?.name} size="300"  round="50%" />
        </div>
        <div className="user-info">
            <p><strong>ID:</strong> {user?.id}</p>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Role:</strong> {user?.role}</p>
            <p><strong>Date Joined:</strong> {user?.dateJoined}</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default UserDetails