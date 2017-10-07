document.getElementById('nav_placeholder').innerHTML = 
`
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a id="logo" href="index.html">
      <img src="ua-square-logo.png" alt="UA Logo">
      <p class="logo navbar-item is-hidden-mobile">Artificial Intelligence & Machine Learning Club</p>
      <p class="logo navbar-item is-hidden-tablet">AI & ML Club</p>
      </a>
      <button class="button navbar-burger is-hidden-tablet">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end is-hidden-tablet">
        <a class="navbar-item" href="index.html"><span class="icon"><i class="fa fa-home"></i></span> Home</a>
        <a class="navbar-item" href="about.html"><span class="icon"><i class="fa fa-info-circle"></i></span> About Us</a>
        <a class="navbar-item" href="resources.html"><span class="icon"><i class="fa fa-folder-open"></i></span> Resources</a>
        <a class="navbar-item" href="contact.html"><span class="icon"><i class="fa fa-address-book-o"></i></span> Contact</a>
        <a class="navbar-item" href="projects.html"><span class="icon"><i class="fa fa-briefcase"></i></span> Projects</a>
      </div>
    </div>
  </div>
</nav>
`;

document.getElementById('sidebar_placeholder').innerHTML=
`
<aside class="menu">
 	<p class="menu-label">General</p>
 	<ul class="menu-list">
 	  <li><a href="index.html"><span class="icon is-small"><i class="fa fa-home"></i></span> Home</a></li>
 	  <li><a href="about.html"><span class="icon is-small"><i class="fa fa-info-circle"></i></span> About Us</a></li>
 	  <li><a href="resources.html"><span class="icon is-small"><i class="fa fa-folder-open"></i></span> Resources</a></li>
   	<li><a href="contact.html"><span class="icon is-small"><i class="fa fa-address-book-o"></i></span> Contact</a></li>
 	</ul>
 	<p class="menu-label">Projects</p>
 	<ul class="menu-list">
  	<li><a href="projects.html"><span class="icon is-small"><i class="fa fa-briefcase"></i></span> Projects</a></li>
    <li id="dropdown" class="dropdown">
   			<a id="trigger" aria-haspopup="true" aria-controls="dropdown-menu">
   				<span class="icon is-small"><i class="fa fa-files-o"></i></span>
   				<span> Lists</span>
   				<span class="icon is-small"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
   			</a>
   			<ul class="dropdown-menu" id="dropdown-menu" role="menu">
   				<li><a>Project 1</a></li>
   				<li><a>Project 2</a></li>
   				<li><a>Project 3</a></li>
   			</ul>
    </li>
  </ul>
</aside>
`;

