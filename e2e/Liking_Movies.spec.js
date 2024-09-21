const assert = require('assert');

const emptycondition = "You don't have any Favorite Restaurant";
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptycondition, '.empty_favorite');

  I.amOnPage('/#/home');

  I.waitForElement('.post-item a', 5);
  I.seeElement('.post-item a');
  const cardrestaurant = locate('.post-title').first();
  const firstcardrestaurant = await I.grabTextFrom(cardrestaurant);
  I.click(cardrestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedcardrestaurant = await I.grabTextFrom('.post-title');
  assert.strictEqual(firstcardrestaurant, likedcardrestaurant);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(emptycondition, '.empty_favorite');

  I.amOnPage('/#/home');

  I.waitForElement('.post-item a', 5);
  I.seeElement('.post-item a');
  const cardrestaurant = locate('.post-title').first();
  const firstcardrestaurant = await I.grabTextFrom(cardrestaurant);
  I.click(cardrestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedcardrestaurant = await I.grabTextFrom('.post-title');
  assert.strictEqual(firstcardrestaurant, likedcardrestaurant);

  I.click(likedcardrestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.empty_favorite');

  const empty = await I.grabTextFrom('.empty_favorite');

  assert.strictEqual(empty, emptycondition);
});
