<!DOCTYPE html>
<html lang="en">
<head>
	<title>scrollarama</title>
	<link rel="stylesheet" href="css/style.css" type="text/css">
	<link rel="stylesheet" href="css/normalize.css" type="text/css">
</head>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<body>

<p id="console"></p>

<div id="nav">
	<ul>
		<li><span class="intro">Intro</span></li>
		<li><span class="transitions">Transition</span></li>
		<li><span class="pin">Pin</span></li>
		<li><span class="paralax">Parallax</span></li>
		<li><span class="ease">Ease</span></li>
		<li><span class="gallery">Gallery</span></li>
	</ul>
</div>
<div id="wrap">
	<div class="scrollblock" id="intro">
		<h1 id="title"><span>Fuck</span> <span>Yeah</span> <span>Scrolling</span> <span>Animation</span></h1>
	</div>
	<div class="scrollblock" id="transitions">
		<h2>Transitions</h2>
		<h3 id="fade-in">Fade In</h3>
		<h3 id="fly-in">Fly In</h3>
		<h3 id="rotate">Rotate</h3>
		<h3 id="zoom-in">Zoom In</h3>
	</div>
	<div class="scrollblock" id="pin">
		<h2>Pin</h2>
		<h3 id="unpin">Unpin</h3>

	</div>
	<div class="scrollblock" id="paralax">
		<h2 id="parallax1"><img src="images/grooming.jpg" alt="Sharpei" /></h2>
		<h3 id="parallax2"><img src="images/pet-medicine.jpg" alt="Sharpei" /></h3>
		<h3 id="parallax3"><img src="images/farm.png" alt="Sharpei" /></h3>
	</div>
	<div class="scrollblock" id="ease">
		<h2 id="easing">
			<span>E</span>
			<span>A</span>
			<span>S</span>
			<span>I</span>
			<span>N</span>
			<span>G</span>
		</h2>
	</div>
	<div class="scrollblock" id="gallery">	
		<div id="navi">
			<ul class="clearfix">
				<li><a href="javascript:void(0);" class="picker1" data="1">1</a></li>
				<li><a href="javascript:void(0);" class="picker2" data="2">2</a></li>
				<li><a href="javascript:void(0);" class="picker3" data="3">3</a></li>
			</ul>
		</div>
	
		<div id="background">
			<div class="bg bg1">
                <img src="http://www.noelfox.com/wp-content/uploads/2012/12/home-01.jpg" />
            </div>
            <div class="bg bg2">
                <img src="http://www.noelfox.com/wp-content/uploads/2012/12/home-02.jpg" />
            </div>
            <div class="bg bg3">
                <img src="http://www.noelfox.com/wp-content/uploads/2012/12/home-03.jpg" />
            </div>
		</div>
	</div>
</div>

</body>

<script src="js/respond.js"></script>
<script src="js/jquery.scrollorama.js"></script>
<script src="js/application.js"></script>
</html>

