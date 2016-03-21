/* James Boynton
3/20/16
COMI 2010 Client-Side Scripting Languages
Project 2

scripts.js

JavaScript for Project 4. */

/**
 * updateProfile function
 * If the user has entered info for all three form fields, then the page
 * will update to show the new content.  Otherwise, the user will get a
 * message to alert them that a field was left blank.
 */
function updateProfile() {

  var name = document.getElementById('profile-name').value;
  var imagePath = document.getElementById('profile-image').value;
  var description = document.getElementById('profile-description').value;

  /* If all fields have been completed... */
  if (name !== "") {
    if (imagePath !== "") {
      if (description !== "") {

        /* ...then replace this form with the new content... */
        document.getElementById('header').innerHTML = "<h2>" + name +
          "</h2><p><img class=\'profile-pic\' src=\'" + imagePath +
          "\' alt=\'President " + "image\'></p><p><h4>About me:</h4>" +
          description + "</p>";

      /* ...else, show an error. */
      } else {
        window.alert("Error: Profile description can\'t be blank.");
      }
    } else {
      window.alert("Error: Profile image can\'t be blank.");
    }
  } else {
    window.alert("Error: Profile name can\'t be blank.");
  }
}

/**
 *
 * ## NOT CURRENTLY IN USE, see appendLinks() below
 * ##
 * ## In contrast to appendLinks(), this function uses only techniques
 * ## that we have used in class so far, as required by the project specs.
 * ## However, this function is not XHTML 1.0 Strict, which is also a
 * ## requirement.  Therefore I decided I should include both, to be safe.
 *
 * updateLinks function
 * If the user has entered a link, then the page will update to show the
 * link in the link area.  Otherwise, the user will get a message to
 * alert them that a field was left blank.
 */
function updateLinks() {

  var linkCategory = document.getElementById('link-category').value;
  var linkURL = document.getElementById('link-url').value;

  /* If all fields have been completed... */
  if (linkCategory !== "") {
    if (linkURL !== "") {

      /* ...insert the URL into the list that corresponds with the given
        category... */
      if (linkCategory == "Funny") {
        document.getElementById('funny-links-list').innerHTML +=
          "<li><a href=\'" + linkURL + "\'>" + linkURL + "</a></li>";
      } else if (linkCategory == "Informative") {
        document.getElementById('informative-links-list').innerHTML +=
          "<li><a href=\'" + linkURL + "\'>" + linkURL + "</a></li>";
      } else if (linkCategory == "Silly") {
        document.getElementById('silly-links-list').innerHTML +=
        "<li><a href=\'" + linkURL + "\'>" + linkURL + "</a></li>";
      } else if (linkCategory == "Sobering") {
        document.getElementById('sobering-links-list').innerHTML +=
          "<li><a href=\'" + linkURL + "\'>" + linkURL + "</a></li>";
      } else if (linkCategory == "Strange") {
        document.getElementById('strange-links-list').innerHTML +=
          "<li><a href=\'" + linkURL + "\'>" + linkURL + "</a></li>";
      } else {
        window.alert("Error: invalid selection.");
      }

    /* ...else, show an error. */
    } else {
      window.alert("Error: Enter the URL you want to post.");
    }
  } else {
    window.alert("Error: Link category can\'t be blank.");
  }
}

/**
 * appendLinks function
 * This function accompishes the same thing that updateLinks() accomplishes,
 * but unlike updateLinks(), this function passes XHTML 1.0 Strict validation.
 * This function creates new anchor and list item elements for the user's link,
 * wraps the anchor element within the list item element, and then appends the
 * list item to the list that matches the user's chosen category.
 */
function appendLinks() {

  var linkCategory = document.getElementById('link-category').value;
  var url = document.getElementById('link-url').value;

  /* Create new anchor and list item elements. */
  var link = document.createElement("a");
  var listItem = document.createElement("li");

  /* The list to which the new list item will be appended. */
  var list;

  /* If all required fields have been filled out... */
  if (linkCategory !== "") {
    if (url !== "") {

      /* Create the link to the user's URL. */
      link.textContent = url;
      link.setAttribute('href', url);

      /* Determine the list to be appended by category. */
      if (linkCategory == "Funny") {
        list = document.getElementById("funny-links-list");
      } else if (linkCategory == "Informative") {
        list = document.getElementById("informative-links-list");
      } else if (linkCategory == "Silly") {
        list = document.getElementById("silly-links-list");
      } else if (linkCategory == "Sobering") {
        list = document.getElementById("sobering-links-list");
      } else if (linkCategory == "Strange") {
        list = document.getElementById("strange-links-list");
      } else {
        window.alert("Error: invalid selection.");
      }

      /* Append the link to the list item, and the list item to the list. */
      listItem.appendChild(link);
      list.appendChild(listItem);

    /* ...else, show an error. */
    } else {
      window.alert("Error: Enter the URL you want to post.");
    }
  } else {
    window.alert("Error: Link category can\'t be blank.");
  }
}

/**
 * now function
 * Creates a new Date object, and uses it to make a formatted string that
 * contains the current date and time.
 */
function now() {

  var currentTimeArray = new Date().toString().split(' ');

  var now = currentTimeArray[1].toString() + ". " +
    currentTimeArray[2].toString() + ", " +
    currentTimeArray[3].toString() + " at " +
    currentTimeArray[4].toString() + ":";

  return now;
}

/**
 * postImage function
 * If the user has entered a path to an image, then the page will update
 * to show the image in the content area.  Otherwise, the user will get a
 * message to alert them that a field was left blank.
 */
function postImage() {

  var previousContent = document.getElementById('page-posts').innerHTML;
  var imagePath = document.getElementById('content-image').value;

  /* If all fields have been completed... */
  if (imagePath !== "") {

    /* ...post the new content, and append the old content below the new
      content... */
    document.getElementById('page-posts').innerHTML = "<div " +
      "class=\'page-post\'><p class=\'date-and-time\'><h4>" + now() +
      "</h4></p><p class=\'post-image\'><img src=\'" + imagePath +
      "\' alt=\'President image\'></p></div>" + previousContent;

  /* ...else, show an error. */
  } else {
    window.alert("Error: Enter the path of the image you want to post.");
  }
}

/**
 * postStatus function
 * If the user has entered a status, then the page will update to show the
 * status in the content area.  Otherwise, the user will get a message to
 * alert them that a field was left blank.
 */
function postStatus() {

  var previousContent = document.getElementById('page-posts').innerHTML;
  var status = document.getElementById('content-status').value;

  /* If the user has entered a status... */
  if (status !== "") {

    /* ...post the new content, and append the old content below the new
      content... */
    document.getElementById('page-posts').innerHTML = "<div " +
      "class=\'page-post\'><p class=\'date-and-time\'><h4>" + now() +
      "</h4></p><p class=\'post-status\'>" + status + "</p></div>" +
      previousContent;

  /* ...else, show an error. */
  } else {
    window.alert("Error: Enter the status you want to post.");
  }
}

/**
 * postStatus function
 * If the user has entered a status, then the page will update to show the
 * status in the content area.  Otherwise, the user will get a message to
 * alert them that a field was left blank.
 */
function postLink() {

  var previousContent = document.getElementById('page-posts').innerHTML;
  var link = document.getElementById('content-url').value;

  /* If the user has entered a link... */
  if (link !== "") {

    /* ...post the new content, and append the old content below the new
      content... */
    document.getElementById('page-posts').innerHTML = "<div " +
      "class=\'page-post\'><p class=\'date-and-time\'><h4>" + now() +
      "</h4></p><p class=\'post-link\'><a href= \'" + link + "\'>" + link +
      "</a></p></div>" + previousContent;

  /* ...else, show an error. */
  } else {
    window.alert("Error: Enter the status you want to post.");
  }
}
