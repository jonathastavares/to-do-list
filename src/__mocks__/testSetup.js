beforeAll(() => {
  document.body.innerHTML = `
    <div id='list-container' class='container w-25 shadow my-5'>
    <ul class="list-group join-list-bottom no-round-borders">
      <li class="list-group-item font-bold">Today's To Do List</li>
      <li class='list-group-item d-flex'><input id='add-list' placeholder='Add to your list...'><button id='add-btn' type='submit' class='btn btn-secondary'>Add</button></li>
    </ul>
    <ul id='list-objects' class="list-group join-list-top join-list-bottom">
      <!-- Add list elements Here -->
    </ul>
    <ul class='list-group join-list-top no-round-borders'>
      <li class="list-group-item text-center"><button id='delete-completed-btn' type='submit' class='btn btn-danger w-100'>Clear all completed</button></li>
    </ul>
  </div>`;
});