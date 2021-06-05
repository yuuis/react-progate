import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);

    // stateの定義。constructor内でobjectとして定義する
    this.state = {isModalOpen: false};
  }

  handleClickLesson() {
    // stateの更新は、setStateで
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      // stateのisModalOpenがtrueだったら、変数にmodalを詰める
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              {/*propsの参照は、this.props.{プロパティ名}*/}
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button className='modal-close-btn' onClick={() => this.handleClickClose()}>
              {/*onClickイベントに反応してhandleClickCloseを実行*/}
              とじる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='lesson-card'>
        <div className='lesson-item'>
          <p>{this.props.name}</p>
          <img src={this.props.image} onClick={() => this.handleClickLesson()} alt=""/>
        </div>
        {modal}
      </div>
    )
  }
}

export default Lesson;
