const dataSource = 'https://jsonplaceholder.typicode.com';

// Get all posts
function getAllPosts() {
  hideResultsFromPrev();
  fetch(`${dataSource}/posts`)
    .then(response => response.json())
    .then(json => renderResult('allPosts', json));
}

// Get post by id
function getPostById() {
  hideResultsFromPrev();
  fetch(`${dataSource}/posts/10`)
    .then(response => response.json())
    .then(json => renderResult('postById', [json]));
}

// Create new post
function createNewPost() {
  hideResultsFromPrev();
  const post = {
    title: 'Daily post',
    body: 'This is getting hard',
    userId: 1
  };
  fetch(`${dataSource}/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => renderResult('newPost', [json]));
}

// Replace post by id
function replacePost() {
  hideResultsFromPrev();
  const post = {
    title: 'Post 12',
    body: 'We are getting more practice',
    userId: 1
  };
  fetch(`${dataSource}/posts/12`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => renderResult('replacedPost', [json]));
}
// Update post by id
function updatePost() {
  hideResultsFromPrev();
  const post = {
    title: 'React'
  };
  fetch(`${dataSource}/posts/12`, {
    method: 'PATCH',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => renderResult('updatedPost', [json]));
}

// Delete post by id
function deletePost() {
  hideResultsFromPrev();
  fetch(`${dataSource}/posts/12`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        deleteRender('It is deleted');
      } else {
        deleteRender(`Not deleting: ${response.status} ${response.statusText}`);
      }
    });
}
//Render the results to the page in html elements.
function renderResult(elementId, result) {
  const dataByElementId = document.getElementById(elementId);
  result.map(posts => {

    let H2 = document.createElement("h2");
    H2.innerHTML = posts.title;
    let p = document.createElement("p");
    p.innerHTML = posts.body;
    let div = document.createElement("div");
    div.append(H2);
    div.append(p);
    dataByElementId.append(div);

  })
  dataByElementId.style.display = 'block';
}
// Hide the results from the previous actions
function hideResultsFromPrev() {
  const datas = document.querySelectorAll('.data');
  datas.forEach(result => result.style.display = 'none');
}

function deleteRender(message) {
  const deletedDiv = document.getElementById('deletedPost');
  let p = document.createElement('p')
  p.innerHTML = message;
  deletedDiv.append(p);

  deletedDiv.style.display = 'block';
}


