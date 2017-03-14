/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* RSS feeds test suite for RSS feeds definitions,
     * the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable
         * has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test loops through each feed in the allFeeds object and
         * ensures it has a URL defined and that the URL is not empty.
         */
        it('should have a url', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* Test loops through each feed in the allFeeds object and
         * ensures it has a name defined and that the name is not empty.
         */
        it('should have a name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* "The Menu" test suite */
    describe('The Menu', function() {

        /* Test ensures the menu element is hidden by default. */
        it('should be hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Test ensures the menu changes visibility when the
         * menu icon is clicked.
         * This test has two expectations: does the menu display
         * when clicked and does it hide when clicked again.
         */
        it('should change visibility when menu icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');

            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });


    /* "Initial Entries" test suite */
    describe('Initial Entries', function() {
        beforeAll(function(done) {
            loadFeed(0, done);
        });

        /* Test ensures when the loadFeed function is called and
         * completes its work, there is at least a single
         * .entry element within the .feed container.
         */
        it('should contain at least one entry', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });


    /* "New Feed Selection" test suite */
    describe('New Feed Selection', function() {
        var feed0,
            feed1,
            feed2,
            feed3;

        beforeAll(function(done) {
            loadFeed(0, function() {
                feed0 = $('.feed')[0].innerHTML;
                loadFeed(1, function() {
                    feed1 = $('.feed')[0].innerHTML;
                    loadFeed(2, function() {
                        feed2 = $('.feed')[0].innerHTML;
                        loadFeed(3, function() {
                            feed3 = $('.feed')[0].innerHTML;
                            done();
                        });
                    });
                });
            });
        });

        /* Test ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */
        it('should change content when new feed loads', function(done) {
            expect(feed0).not.toEqual(feed1);
            expect(feed0).not.toEqual(feed2);
            expect(feed0).not.toEqual(feed3);
            expect(feed1).not.toEqual(feed2);
            expect(feed1).not.toEqual(feed3);
            expect(feed0).toEqual(feed0);
            expect(feed1).toEqual(feed1);
            expect(feed2).toEqual(feed2);
            expect(feed3).toEqual(feed3);
            done();
        });
    });
}());
