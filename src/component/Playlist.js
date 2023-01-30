import React from 'react';

function Playlist(props) {
  return (
    <div>
      <div className='black-bg'></div>
      <div className='modal_program'>
        <table className="p_list">
          <caption>프로그램</caption>
          <tbody>
            <tr>
              <th>슈만</th>
              <td>유모레스크 Op.20</td>
            </tr>
            <tr>
              <th>시마노프스키</th>
              <td>마스크 Op.34</td>
            </tr>
            <tr>
              <th>리스트</th>
              <td>피아노 소나타 b단조 S.178</td>
            </tr>
          </tbody>
        </table>

        <table className="p_list">
          <caption>앙코르</caption>
          <tbody>
            <tr>
              <th>차이코프스키</th>
              <td>10월</td>
            </tr>
            <tr>
              <th>쇼팽</th>
              <td>스케르초 3번</td>
            </tr>
            <tr>
              <th>리스트</th>
              <td>위안 3번</td>
            </tr>
          </tbody>
        </table>
        <div className='close_modal' onClick={props.close}><p>닫기</p></div>
      </div>
    </div>
  );
}

export default Playlist;
