<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Smart Extendable Label Forms (+Dropdown Example) Using jQ, JS, and CSS</title>
  <script src="//use.typekit.net/zrq4gvu.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
  
  
      <link rel="stylesheet" href="css/style.css">
	   <link rel="stylesheet" href="picture/css/style.css">
  

  
</head>

<body>

  <!-- Remember to check Pens for the files they include in the header. You can find this if you click on the settings button -->
  <div class="form-group">
  <div class="row">
  <div class="small-12 large-4 columns">
    <div class="containers">
      <div class="imageWrapper">
        <img class="image" src="http://digital-art-gallery.com/oid/0/1300x648_403_Knight_by_the_lake_2d_fantasy_knight_lake_warrior_picture_image_digital_art.jpg">
      </div>
    </div>
    <button class="file-upload">            
      <input type="file" class="file-input">Choose Photo To Upload
    </button>
	
	<div class="wrapper">

<label id="Status" class="centered">Please, Fill Me Out</label>
<form>
  <div class="input-field full ">
    <label for="Username">Username</label>
    <input id="Username" type="text" required="">
  </div>
  
  <!--Attractive grouping of related inputs-->
    <div class="input-field full">
    <label for="email">Email</label>
    <input id="email" type="email" required=""></div>
   <div class="input-field full">
   <label for="title">Blog Title</label>
    <input id="title" type="text" required="">
  </div>
 <div class="input-field full">
    <!--<label for="blog">Write Your Blog</label>-->
	<textarea input id="blog" name="blog" type="text" class="form-control" rows="9" placeholder="Write your blog" required=""></textarea>
    <!--><input id="blog" type="text">-->
  </div>
  
  <!-- Drop down box, cause I needed one and it's a good example of how to extend this framework -->
  <div class="select-dropdown">
    <label for='StateSelect'>Select Your Subject</label>
    <select id="StateSelect" class="dropdown" required="">
      <option></option>
      <option>SCIENCE</option>
      <option>MATH</option>
    </select>
  </div>
 <div> 
<button class="submit">            
      Submit Your Blog
    </button>
</div>

</form>
</form>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

  

    <script  src="js/index.js"></script>
	</script>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

  

    <script  src="picture/js/index.js"></script>
	<script  src="button.js">
	

	</script>
	




</body>

</html>
