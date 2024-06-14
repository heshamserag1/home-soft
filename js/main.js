
var controller = new ScrollMagic.Controller();
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
gsap.from(box1, { opacity: 0, y: 100, duration: 1 });
gsap.from(box2, { opacity: 0, x: -100, duration: 1 });
gsap.from(box3, { opacity: 0, y: 100, duration: 1 });
new ScrollMagic.Scene({
    triggerElement: box1,
    triggerHook: 0.8, 
    reverse: false // تعطيل العكس للتأكد من أن التأثير يظهر مرة واحدة فقط
})
.setTween(box1, { opacity: 1, y: 0 })
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: box2,
    triggerHook: 0.8,
    reverse: false
})
.setTween(box2, { opacity: 1, x: 0 })
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: box3,
    triggerHook: 0.8,
    reverse: false
})
// Function to add a new article
function addArticle(event) {
    event.preventDefault();
    const title = document.getElementById('newArticleTitle').value;
    const content = document.getElementById('newArticleContent').value;
    const articleDiv = document.createElement('div');
    // Creating HTML structure for the new article
    articleDiv.innerHTML = `
      <div class="mt-5">
        <h2>${title}</h2>
        <p>${content}</p>
      </div>
    `;
    document.body.appendChild(articleDiv);
    // Clearing the form fields
    document.getElementById('newArticleTitle').value = '';
    document.getElementById('newArticleContent').value = '';
  }
  
  // Event listener for new article form submission
  document.getElementById('newArticleForm').addEventListener('submit', addArticle);
  
  // Function to add a new comment
  function addComment(event) {
    event.preventDefault();
    const name = document.getElementById('commenterName').value;
    const comment = document.getElementById('commentContent').value;
    const commentDiv = document.createElement('div');
    // Creating HTML structure for the comment
    commentDiv.innerHTML = `
      <div class="mt-3">
        <strong>${name}</strong>: ${comment}
      </div>
    `;
    document.getElementById('commentsSection').appendChild(commentDiv);
    // Clearing the form fields
    document.getElementById('commenterName').value = '';
    document.getElementById('commentContent').value = '';
  }
  
  // Event listener for comment form submission
  document.getElementById('commentForm').addEventListener('submit', addComment);
  