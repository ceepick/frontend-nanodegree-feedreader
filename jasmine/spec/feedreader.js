/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests related to this project.
 */

$(function() {
    /* This suite is all about the RSS feeds definitions, 
     * the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This test tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have defined url properties that are not empty', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have defined name properties that are not empty', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });

    // This suite tests the behavior of the slide menu.
    describe('The Menu', function() {
        /* This test ensures the menu element is
         * hidden by default.
         */
         it('hides the slide menu by default', function() {
            expect(document.body.className).toContain('menu-hidden');
         });


         /* This test ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('toggles visibility when the menu icon is clicked', function() {
            const menuToggle = document.querySelector('.menu-icon-link');

            // toggle open
            menuToggle.click();
            expect(document.body.className).not.toContain('menu-hidden');

            // toggle closed
            menuToggle.click();
            expect(document.body.className).toContain('menu-hidden');
          });
      });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
