var NuPackCalculator = function(_base){

	this.base = _base;
	this.base_markup_pct = 5;
	this.workers = 1;
	this.workers_markup_pct = 1.2;
	this.goods_markup_pct = 0;
	this.goods_markup_list = {
		food: 13,
		drugs: 7.5,
		electronics: 2
	}

};