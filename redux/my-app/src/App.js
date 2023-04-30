import React, {useState, useEffect} from 'react';
import './App.css';
import $ from 'jquery';
import axios from 'axios';

function App() {
  function ajax(){

    $.ajax({
      url: "https://openlibrary.org/subjects/mystery_and_detective_stories.json",
      dataType: "json",
    }).done(function (data) {
      console.log(data);   
      // $.each(data.works, function (index, bookInfo) {
      //   console.log(bookInfo);
      //   if (bookInfo.authors.length == 1)
      //     var authorsInfo = Author: <a href="https://openlibrary.org/${bookInfo.authors[0].key}/">${bookInfo.authors[0].name}</a>;
      //   else {
      //     var authorsInfo = 'Authors: ';
      //     $.each(bookInfo.authors, function (i, author) {
      //       authorsInfo += <a href="https://openlibrary.org/${author.key}/">${author.name}</a>, ;
      //     });
      //     authorsInfo = authorsInfo.slice(0, -2);
      //   }
      //   bookDiv += `<div class="book">
      //     <div class="book-title">${bookInfo.title.length < 50 ? bookInfo.title : bookInfo.title.slice(0, 60) + '...'}</div>
      //     <div class="book-author">${authorsInfo}</div>
      //     <div class="book-cover"><img src="https://covers.openlibrary.org/b/id/${bookInfo.cover_id}-M.jpg"></div>
      //     <div class="book-hidden">
      //       <a href="https://openlibrary.org${bookInfo.key}" class="btn btn-info" target="_blank">More Info</a>
      //       ${bookInfo.availability ? <a href="https://openlibrary.org/borrow/ia/${bookInfo.ia}?ref=ol" class="btn btn-read" target="_blank">Read Book</a> : ''}
      //     </div>
      //   </div>`;
      // });
    });  
  }

  ajax();

    return (

      <div className="App">

      </div>
    );
  }

  export default App;
