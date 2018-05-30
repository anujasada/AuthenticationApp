<template>
<div class="row">
  <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2 aside">
    <img src="../assets/img.jpg" alt="">
    <h3>Dashboard</h3>
    <li>News Feeds</li>
    <li>Notification</li>
    <li>Gallery</li>
    <li>Contact</li>
  </div>
  <div class="col-md-10 col-sm-10 col-xs-10 col-lg-10">
    <h2 class="header">My Dashboard</h2>
  </div>
  <div class="card">
    <div class="col-md-10 col-sm-10 col-xs-10 col-lg-10">
      <h1>Lorem ipsum</h1><br>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Aut alias quae eos itaque reprehenderit sapiente ratione sequi cupiditate odit ipsa
        provident perspiciatis voluptatem natus, praesentium optio non quidem debitis a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque exercitationem molestias, voluptate ex in, delectus aliquam mollitia quibusdam atque sequi assumenda officiis temporibus facilis. Maxime nostrum autem magni deleniti hic.
      </p>
      <br>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Cumque, optio? Qui obcaecati sed saepe odit, quia deleniti illum at, Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus optio! Hic, similique? Voluptatum in eaque dicta distinctio quasi dolorem dolores, tempora debitis iure, hic aut veritatis. In, dolore deleniti?
        officiis quae quaerat illo impedit officia praesentium sit accusamus voluptate debitis!
      </p>
    </div>
  </div>
</div>
</template>

<style>

img{
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-left: 5%;
}

.aside {
  background-color: #e8efff;
  padding: 30px;
  height: 665px;
  text-align: center;
  color: rgb(135, 135, 211);
  box-shadow: 0 4px 8px 0 rgb(135, 135, 211);
  font-family: 'Raleway', sans-serif;
}

.aside li {
  list-style: none;
  padding: 15px;
  font-size: 1.2em;
  cursor: pointer;
}

.header {
  background-color: rgb(188, 188, 229);
  padding: 10px;
  color: #f2f4f8;
  font-family: 'Roboto Mono', monospace;
  margin-top: 0px;
  margin-left: -15px;
  width: 102%;
}

.card {
  text-align: justify;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin-left: 10%;
  margin-top: 5%;
  color: #213a66;
  font-family: 'PT Serif', serif;
}

.card h1 {
  text-align: center;
}
</style>
