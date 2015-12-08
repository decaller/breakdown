var view_login_breakdown = {
	cols:[
		{
			rows:[
				{
					view:"toolbar", elements:[
						{view:"label", label: "Breakdown"}
					]
				},
				{
					view:"carousel",
					cols:[
						{ css: "image", data:{src:""} },
						{ css: "image", data:{src:""} }
					]
				},
				{
					view:"toolbar", elements:[
							{view:"label", label: "Please fill your databoom.space data"}
					]
				},
				{
					view : "form",
					id: "connectForm",
					rows : [
						
						{ view : "text", label : "URL", name : "url", value: "https://t099.databoom.space" },
						{ view : "text", label : "Database", name : "db", value: "b099" },
						{ view : "text", label : "User", name : "user", value:"t099" },
						{ view : "text", label : "Password", name : "pass", value:"4614" },
						{ view : "button", label : "connect" }
					]
				}
			]	
		},
		{
			rows:[
				{
					view:"toolbar", elements:[
							{view:"label", label: "Project List"}
					]
				},
				{
					view:"dataview", 
					id:"dataview1",
					select:true,
					type: {
						height: 60
					},
					template:"<div class='webix_strong'>#title#</div> Year: #year#, rank: #rank#",
					data:[
						{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1},
						{ id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2},
						{ id:3, title:"The Godfather: Part II", year:1974, votes:319352, rating:9.0, rank:3},
						{ id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030, rating:8.9, rank:4}
					]
				}
			]	
		},
		
	]
	
};
