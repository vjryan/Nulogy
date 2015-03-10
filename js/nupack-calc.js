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

// Calculates & returns base price w/ % markup.
NuPackCalculator.prototype.getBasePrice = function(){
	return this.base + ( (this.base * this.base_markup_pct) / 100 );
};


// Sets number of workers needed for the job: default => 1 
NuPackCalculator.prototype.setWorkers = function(_workers){
	this.workers = _workers;
};

// returns the markup on workers.
NuPackCalculator.prototype.getWorkerMarkup = function(){
	return this.workers * this.workers_markup_pct;
};

//Sets the markup % of additonal material goods if found.
NuPackCalculator.prototype.setGoodsMarkup = function(_goods){
	if(typeof(this.goods_markup_list[_goods]) !== "undefined"){
		this.goods_markup_pct = this.goods_markup_list[_goods];
	}
};