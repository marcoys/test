import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Login(props) {
  const dispatch = useDispatch();

  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ loading, setLoading ] = useState(false);
  const [ msg, setMsg ] = useState('');

  // let body = {
  //   id : use
  // }

  useEffect(() => {

  }, [msg])

  const loginFunc = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="black-bg">
        <div className="modal_login">
          <span onClick={props.close}>x</span>
          <h5>LOG IN</h5>
          <form onSubmit={loginFunc}>
            <table>
              <tbody>
                <tr>
                  <th>
                    <p>아이디</p>
                  </th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <p>비밀번호</p>
                  </th>
                  <td>
                    <input type="password" />
                  </td>
                </tr>
              </tbody>
            </table>

            <button className="btn_login" type='submit' >
              <p>로그인</p>
            </button>

            {msg}
          </form>
          
        </div>
      </div>
    </>
  );
}

export default Login;
