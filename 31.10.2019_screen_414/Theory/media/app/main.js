  class EventObserver {
  constructor () {
    this.observers = []
  }

  subscribe (fn) {
    this.observers.push(fn)
  }

  unsubscribe (fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  }

  broadcast (data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}

  const blogObserver = new EventObserver();

  const textField = document.querySelector('.textField');
  const countField = document.querySelector('.countField');

  const getWordsCount = text =>
  text ? text.trim().split(/\s+/).length : 0;

  textField.addEventListener('keyup', () => {
    blogObserver.broadcast(textField.value)
  });

  blogObserver.subscribe(text => {
    countField.innerHTML = getWordsCount(text)
  });



