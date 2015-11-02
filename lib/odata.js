//PATCH request
// webix.ajax.prototype.patch = function(url, params, call){
// 	return this._send(url,params,call, 0, "PATCH");  
// };

webix.proxy.odata = {
	$proxy: true,
	load: function(view, callback, details) {

		var url = this._odataurl(view, details);
		this._load(view, callback, url);
	},
	_odataurl: function(view, details) {
		var url = this.source;

		url = url.replace(/(\$format=(.*)&)|(\$format=(.*)$)/, "").replace(/\?$/, "");
		url += (url.indexOf("?") == -1) ? "?" : "&";
		url += "$format=json";

		if (this.dynamicLoading) {
			url += "&$inlinecount=allpages";
			if (!details) url += "&$top=" + view.config.datafetch;
		}

		if (details) {
			var start = details.from,
				count = details.count;

			//page && scroll
			if (start && count !== -1) {
				if (start < 0) start = 0;
				url += "&$skip=" + start + "&$top=" + count;
			}

			//filter && sort
			if (details.sort)
				url += "&$orderby=" + details.sort.id + " " + details.sort.dir;

			if (details.filter) {
				var filters = [];
				for (var key in details.filter) {
					if (details.filter[key])
						filters.push("startswith(" + key + ",'" + (details.filter[key] ? details.filter[key] : "") + "')");
				}
				if (filters.length) url += "&$filter=" + filters.join(" and ");
			}
		}
		return url;
	},
	_load: function(view, callback, url) {
		webix.ajax(url).then(function(data) {
			data = data.json();
			if (data.d) {
				if (data.d.__count) {
					var records = {
						data: data.d.results,
						pos: data.d.__skip || 0,
						total_count: data.d.__count * 1
					};
				} else
					var records = data.d.results;
				webix.ajax.$callback(view, callback, "", records, -1);
			}
		});
	},
	save: function(view, update, dp, callback) {
		var url = this.source,
			mode = update.operation,
			data = update.data,
			editLink = url.replace(/\/$/, "") + "(" + data["id"] + ")";

		if (mode == "insert") delete data.id;
		data = JSON.stringify(data);

		//call odata URI
		if (mode == "insert") {
			webix.ajax().headers({
				"Content-type": "application/json"
			}).post(url, data, callback);
		} else if (editLink) {
			if (mode == "update") {
				webix.ajax().headers({
					"Content-type": "application/json"
				}).put(editLink, data, callback);
			} else if (mode == "delete") {
				webix.ajax().headers({
					"Content-type": "application/json"
				}).del(editLink, data, callback);
			}
		}
	},
	result: function(state, view, dp, text, data, loader) {
		data = data.json();
		var obj = state;
		if (data) {
			obj = data.d.results || {
				status: "error"
			};
			obj.newid = data.d.results.id;

			dp.processResult(state, obj);
		}
	}
};

webix.proxy.odataDynamic = {
	init: function() {
		webix.extend(this, webix.proxy.odata);
	},
	dynamicLoading: true
};