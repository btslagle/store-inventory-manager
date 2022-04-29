Knowns	Unknowns	Constraints 
All items have  `sell in date` #days to left to sell item	What is category of item. 	Once `sell_in` is >zero  `quality`$  is decreased by 2 each day
All items have   `quality` value denotes how $valueable item is		`quality` can never be -# or go above 50 unless Sulfuras which is 80 and never changes
Each day `sell in date` and `quality` are decreased by 1		"Aged Brie"  class incrases in quality each day. 
Software should reduce both  `sell in date` # and  `quality` by ` each day that passes		"Sulfuras" goods "Legendary" items never have `sell_in` value or `quality` change
		"Backstage passes"  `quality`$ increase as "sell_in` decreases
		"Backstage passes" quality increases by 2 once sellin date is <= 10  by  3 <= 5 days left on sell in
		"Backstage passes" quality ===0 when sell_in date is <= 0 
		Conjured items degrade twice as fast as normal items 
		Category can not be in  first position (ie: expect something like "SuperUberSword, Conjured" or "Mighty Sulfuras Armour of Ultimate Awesomeness")
