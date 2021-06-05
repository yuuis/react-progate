import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    // stateの定義。constructor内でobjectとして定義する
    this.state = {
      email: '',
      content: '',
      hasEmailError: false,
      hasContentError: false,
      isSubmitted: false
    };
  }

  handleSubmit () {
    this.setState({isSubmitted: true});
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';

    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';

    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    });
  }

  render() {
    // メールのエラー
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          メールアドレスを入力してください
        </p>
      );
    }

    // 問い合わせ内容のエラー
    let contentErrorText;
    if (this.state.hasContentError) {
      contentErrorText = (
        <p className='contact-message-error'>
          お問い合わせ内容を入力してください
        </p>
      );
    }

    // フォーム
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => this.handleSubmit()}>
          <p>メールアドレス（必須）</p>
          <input
            value={this.state.email}
            onChange={(event) => this.handleEmailChange(event)}
          />
          {emailErrorText}

          <p>お問い合わせ内容（必須）</p>
          <textarea
            value={this.state.content}
            onChange={(event) => this.handleContentChange(event)}
          />
          {contentErrorText}

          <input type='submit' value='送信'/>
        </form>
      )
    }

    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
