# Test-Driven Development: RSS Feed Reader

Created March 2017.

## Project Overview

This project is a web-based application that reads RSS feeds. The original developer of this application has included [Jasmine](http://jasmine.github.io/), however the test suite was incomplete. This file includes the completed version of the test suite.

- [See original project assets here.](http://github.com/udacity/frontend-nanodegree-feedreader)
- [See project rubric here.](https://review.udacity.com/#!/projects/3442558598/rubric)

### What is "test-driven development"?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

## How to Use

- Download the repo and open `SpecRunner.html` on a browser.
- Default screen displays 10 recent posts from Udacity Blog's RSS feed
- Scroll to the bottom to see Jasmine tests and test results
- Click on the menu icon to see other feeds included in this project
- Click on any other feed and see recent posts from RSS feeds, along with Jasmine tests and test results at the bottom of the screen.

## Test Suites in This Application:

(See file `Jasmine/spec/feedreader.js` for the code.)

**RSS Feeds:**
- A list of RSS feeds is defined.
- Each RSS feed has a name and a url.

**The Menu:**
- The menu is hidden by default.
- The menu changes visibility when the menu icon is clicked.

**Initial Entries:**
- The initial entries from the loaded RSS feed should contain at least one entry.

**New Feed Selection:**
- When a different RSS feed is selected from the menu, the content on the page should update.

### Requirements for the Test Suite:

- No test should be dependent on the results of another.
- Callbacks should be used to ensure that feeds are loaded before they are tested.
- Error handling should be implemented for undefined variables and out-of-bound array access.
- All tests should pass.