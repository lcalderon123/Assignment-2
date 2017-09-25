<!DOCTYPE html>
<html>
<head>
	<title>Boo The Dog</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<!-- Linking CSS -->
	<link rel="stylesheet" type="text/css" href="style.css">
	<!-- Linking jQuery -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<!-- Linking Google Fonts -->
	<link href='https://fonts.googleapis.com/css?family=Montserrat|Roboto+Slab|Yellowtail' rel='stylesheet' type='text/css'>
</head>
<body>

<div class="container">

<div class="jumbotron bg-primary text-center">
		<h1>Boo The Dog Fan Page!</h1>
	</div>

		<div class="row">
	<div class="col-sm-12">
		<div class="panel panel-primary">
		<div class="panel-heading">Instructions</div>
			<div class="panel-body text-center">
					<h4>Oh no! Someone has vandalized our Boo 'The Cutest Dog In The World' fanpage!</h4>
				<h4>There are a bunch of errors on this page!</h4>
				<h4>Try your best to find them all!</h4>
				</div>
				</div>
		</div>
	</div>

		<div class="row">
		<div class="col-sm-6">
			<div class="panel panel-primary">
				<div class="panel-heading">About Boo</div>
				<div class="panel-body">
						Boo the dog belongs to a San Francisco-based Facebook employee who created a Facebook page for the dog with a statement "My name is Boo. I am a dog. Life is good." He became popular in October 2010 after singer Ke$ha sent a tweet that she had a new boyfriend, linking to the page.
						Chronicle Books, noticing that Boo had 5 million Facebook fans at the time, approached the owner to write a picture book. In August 2011, Boo: The Life of the World's Cutest Dog, written by his owner under pen name J.H. Lee, was published. The book was eventually published in ten languages. A second book followed, Boo: Little Dog in the Big City, as well as a calendar and plans for a cut-out book and additional children's books. He also has his own stuffed animal for kids. His merchandise includes a Gund stuffed animal.
						Boo was appointed a spokesdog for Virgin America airline, which featured photos of him in an airplane along with advice for people traveling with pets. In April 2012, Boo was the subject of a death hoax after #RIPBOO appeared on Facebook. Tweets followed as Gizmodo writer Sam Biddle tweeted Boo had died. It was later confirmed by The Chronicle Book staff that Boo was alive and well. In July 2012, Boo was named the Official Pet Liaison of Virgin America.
						Read more at: <a href="https://en.wikipedia.org/wiki/Boo_(dog)">https://en.wikipedia.org/wiki/Boo_(dog)</a>
			</div>
			</div>
			</div>
			<div class="col-sm-6">
			<div class="well text-center">
				<div>
					<img class="img-responsive" src="https://img.buzzfeed.com/buzzfeed-static/static/2015-04/21/16/enhanced/webdr05/enhanced-31550-1429646952-7.jpg">
				</div>
			</div>
			</div>
		</div>

	<br><br>

	<div class="row">
	<div class="col-sm-6 text-center">
		<button class="btn btn-primary form-control" id="factButton">Random Boo Fact</button>
		<div class="well text-center">
			<div>
					<p id="factText">Click the button for a random Boo fact!</p>
				</div>
			</div>
			</div>
		<div class="col-sm-6">
			<div class="panel panel-primary">
				<div class="panel-heading">List Of Boo's Favorite Things</div>
				<div class="panel-body">
					<ol>
						<li>Dressing Up</li>
						<li>Eating Grass</li>
						<li>Sleeping</li>
						<li>Swimming</li>
						<li>Hiking</li>
					</ol>
				</div>
				</div>
			</div>
	</div>

	<br><br><br><br>

	<div class="row text-center">
			
	<div class="col-sm-6 text-center">
				<button class="btn" id="textGreen">Green</button>
				<button class="btn" id="textOrange">Orange</button>
			<button class="btn" id="textPink">Pink</button>
			<br>
			<br>
			<div class="well text-center">
				<p id="funText">Boo Rules!</p>
			</div>

		</div>

		<div class="col-sm-6">
		<button class="btn" id="boxGrow">Grow</button>
		<button class="btn" id="boxShrink">Shrink</button>
		<br>
		<br>
		<div class="well text-center">
			<img id="box" src="http://petradioshow.com/wp-content/uploads/2015/05/jiff1.jpg">
		</div>
	</div>

	</div>
	
</div>

<script type="text/javascript" src="logic.js"></script>
</body>
</html>