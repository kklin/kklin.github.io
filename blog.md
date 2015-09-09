---
layout: default
permalink: /blog/
---
<div class="main-section">
  <div class="section-title"><h1>Blog</h1></div>
  <div class="section-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacus odio, vestibulum vitae sem quis, pretium facilisis dui. Donec sit amet euismod nisi, sed euismod orci. Donec magna leo, tempus non libero eu, pharetra lobortis ipsum. Praesent sodales vulputate leo at venenatis. Aliquam venenatis neque at arcu mollis, vel lacinia mauris cursus. Nulla orci diam, lacinia ut mi a, mollis consectetur nibh. Suspendisse gravida convallis erat.</p>
  </div>
</div>
<div class="posts main-section dark-background">
  {% for post in site.categories.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
