import { useEffect, useState, useRef } from 'react';
import { getMemberList, postRegister } from '../api'
import { useModal } from '../hook';
import Modal from './Modal';
import './Register.css';

function Register() {
  const [ memberList, setMemberList ] = useState([]);
  const [ username, setUsername ] = useState('');
  const [ modalState, setNone, setLoading, setCostome ] = useModal();
  const signEl = useRef(null);

  const getRoleClass = (username) => {
    const user = memberList.find((member) => member.username === username);
    return user?.roleClass;
  };

  const getFormData = (element) => {
    const formData = new FormData(element);
    const params = {};
    for (const [key, value] of formData.entries()) {
      params[key] = value;
    }
    params.role = getRoleClass(params.username);
    return params;
  };

  const registerActivity = (e) => {
    setLoading();
    const params = getFormData(e.target);
    postRegister(params).then(({ result, message }) => {
      setUsername(params.username);
      setCostome(result === 'success' ? undefined : message);
    }).catch((error) => {
      setCostome(error?.message);
    });
    e.preventDefault();
  };

  useEffect(() => {
    getMemberList().then((memberList) => { setMemberList(memberList); });
  }, []);

  useEffect(() => {
    if (memberList.length > 0 && signEl) RPGUI.create(signEl.current, 'dropdown');
  }, [memberList.length]);

  return (
    <div className="container">
      <button className="rpgui-button autoHeight boardMargin" type="button">
        <p>No Game No Life</p>
      </button>
      <div className="scroll">
        <div className="scrollHead" />
        <div className="scrollMid">
          <form onSubmit={registerActivity}>
            <div className="noRpgFont">
              <h1>冒險契約</h1>
              <p>為維護 Habitica 之和平，我願加入騎士團野外訓練隊。</p>
              <p>預計訓練內容為</p>
              <textarea name="exercise" placeholder="每周一、三 20:30pm 使用健身環運動 30 分鐘" required />
              <p>為達訓練目標，我預先準備的行動是</p>
              <textarea name="prepare" placeholder="先在旁備好運動褲、將健身環放在顯眼的地方" required />
              <p>若紀律散漫或因不可抗力因素，無法達成訓練任務時，我將以</p>
              <textarea name="remedy" placeholder="睡前伸展操 10 分鐘 (10 個仰臥起坐)" required />
              <p>進行補救，務必協助騎士團達成任務。</p>
              <label><strong>署名</strong></label>
            </div>
            <select name="username" ref={signEl} defaultValue="" required>
              {memberList.map(({ username }) => <option key={username} value={username}>{username}</option>)}
            </select>
            <hr />
            <div className="centerBlock noRpgFont">
              <button className="rpgui-button autoHeight" type="submit">
                <strong>加入騎士團</strong>
              </button>
            </div>
          </form>
        </div>
        <div className="scrollFoot" />
      </div>
      <Modal modalState={modalState} closeModal={setNone}>
        <p>
          <div>
            <span>{username}</span>
            <span> 的加入，必定會成為一大助力！</span>
          </div>
          <div>期待你的表現。</div>
        </p>
        <p>
          <div>別忘了每天訓練後要進行進度回報，</div>
          <div>晚點會再發布回報的細節。</div>
        </p>
        <button className="rpgui-button autoHeight" type="button" onClick={setNone}>
          <p>確定</p>
        </button>
      </Modal>
    </div>
  );
}

export default Register;