module.exports = Franz => {

  getMessages = () => {
    const events = document.querySelectorAll(".today")[0].getElementsByClassName('list')[0].getElementsByClassName('task-list')[0].getElementsByClassName('event-section')[0].getElementsByClassName('droppable')[0].children[0].childElementCount
    const tasks = document.querySelectorAll(".today")[0].getElementsByClassName('list')[0].getElementsByClassName('task-list')[0].getElementsByClassName('task-section')[0].getElementsByClassName('droppable')[0].children[0].childElementCount

    Franz.setBadge(events + tasks);
  };

  Franz.loop(getMessages);

}